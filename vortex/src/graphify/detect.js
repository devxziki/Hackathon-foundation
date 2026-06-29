import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { resolve, relative, sep } from 'path';
import picomatch from 'picomatch';

const CODE_EXTENSIONS = new Set([
  '.py', '.ts', '.js', '.jsx', '.tsx', '.mjs', '.go', '.rs',
  '.java', '.cpp', '.cc', '.cxx', '.c', '.h', '.hpp',
  '.rb', '.swift', '.kt', '.kts', '.cs', '.scala', '.php',
  '.lua', '.zig', '.dart', '.sql', '.sh', '.bash', '.json'
]);

const SKIP_DIRS = new Set([
  'venv', '.venv', 'env', '.env', 'node_modules', '__pycache__',
  '.git', 'dist', 'build', 'target', 'out', '.next', '.nuxt',
  '.turbo', '.cache', 'coverage', '.vortex', 'graphify-out',
  '.idea', '.svelte-kit', '.terraform'
]);

const SKIP_FILES = new Set([
  'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
  'cargo.lock', 'poetry.lock', 'gemfile.lock',
  'composer.lock', 'go.sum', 'go.work.sum'
]);

function classifyFile(filename) {
  const name = filename.toLowerCase();
  if (name.endsWith('.blade.php')) return 'code';
  const lastDot = name.lastIndexOf('.');
  const ext = lastDot >= 0 ? name.slice(lastDot) : '';
  if (CODE_EXTENSIONS.has(ext)) return 'code';
  return null;
}

function isNoiseDir(dirName) {
  if (SKIP_DIRS.has(dirName)) return true;
  if (dirName.endsWith('.egg-info')) return true;
  return false;
}

function shouldSkipFile(filename) {
  return SKIP_FILES.has(filename);
}

function getExtension(filename) {
  const lastDot = filename.lastIndexOf('.');
  return lastDot >= 0 ? filename.slice(lastDot) : '';
}

function parseIgnoreLine(raw) {
  let line = raw.trimEnd();
  line = line.trimStart();
  if (!line || line.startsWith('#')) return '';
  line = line.replace(/\s+#+[^\\].*$/, '');
  line = line.replace(/\\#/g, '#');
  line = line.replace(/(?<!\\)\s+$/, '');
  return line;
}

function findVcsRoot(start) {
  const VCS_MARKERS = ['.git', '.hg', '.svn', '_darcs', '.fossil'];
  let current = resolve(start);
  const home = process.env.HOME || process.env.USERPROFILE || '';
  while (true) {
    for (const marker of VCS_MARKERS) {
      if (existsSync(current + sep + marker)) return current;
    }
    const parent = resolve(current, '..');
    if (parent === current || current === home) return null;
    current = parent;
  }
}

function loadIgnorePatterns(root) {
  const resolvedRoot = resolve(root);
  const ceiling = findVcsRoot(resolvedRoot) || resolvedRoot;
  const dirs = [];
  let current = resolvedRoot;
  while (true) {
    dirs.push(current);
    if (current === ceiling) break;
    current = resolve(current, '..');
  }
  dirs.reverse();
  const patterns = [];
  for (const dir of dirs) {
    const ignoreFile = dir + sep + '.graphifyignore';
    if (existsSync(ignoreFile)) {
      try {
        const content = readFileSync(ignoreFile, 'utf-8');
        const lines = content.split('\n');
        for (const raw of lines) {
          const line = parseIgnoreLine(raw);
          if (!line) continue;
          const negated = line.startsWith('!');
          const rawPattern = negated ? line.slice(1) : line;
          patterns.push({ anchor: dir, pattern: rawPattern, negated });
        }
      } catch {}
    }
  }
  return patterns;
}

function isIgnored(path, root, patterns) {
  if (!patterns.length) return false;
  const resolvedRoot = resolve(root);
  const resolvedPath = resolve(path);
  function matches(relPath, pattern) {
    const matcher = picomatch(pattern, { dot: true });
    return matcher(relPath) || matcher(path.split(sep).pop() || '');
  }
  let result = false;
  for (const { anchor, pattern, negated } of patterns) {
    let relPath;
    try {
      if (anchor !== resolvedRoot) {
        relPath = relative(anchor, resolvedPath).replace(/\\/g, '/');
        if (matches(relPath, pattern)) result = !negated;
      }
      relPath = relative(resolvedRoot, resolvedPath).replace(/\\/g, '/');
      if (matches(relPath, pattern)) result = !negated;
    } catch {}
  }
  const relParts = relative(resolvedRoot, resolvedPath).split(sep);
  let ancestor = resolvedRoot;
  for (let i = 0; i < relParts.length - 1; i++) {
    ancestor = resolve(ancestor, relParts[i]);
    let ancestorIgnored = false;
    for (const { anchor, pattern, negated } of patterns) {
      try {
        const relAnc = relative(anchor, ancestor).replace(/\\/g, '/');
        if (matches(relAnc, pattern)) {
          ancestorIgnored = !negated;
          if (ancestorIgnored) break;
        }
      } catch {}
    }
    if (ancestorIgnored) return true;
  }
  return result;
}

export function detect(rootPath) {
  const root = resolve(rootPath);
  const ignorePatterns = loadIgnorePatterns(root);
  const files = [];
  function walkDir(dir) {
    let entries;
    try { entries = readdirSync(dir); } catch { return; }
    for (const entry of entries) {
      if (isNoiseDir(entry)) continue;
      const fullPath = dir + sep + entry;
      try {
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
          if (!isIgnored(fullPath, root, ignorePatterns)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          if (shouldSkipFile(entry)) continue;
          if (isIgnored(fullPath, root, ignorePatterns)) continue;
          const ext = getExtension(entry);
          const ftype = classifyFile(entry);
          if (ftype) files.push(fullPath);
        }
      } catch {}
    }
  }
  if (existsSync(root)) walkDir(root);
  return files;
}
