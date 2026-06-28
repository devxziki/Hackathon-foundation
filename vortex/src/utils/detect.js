import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function detectProject(cwd) {
  const info = {
    name: path.basename(cwd),
    type: 'unknown',
    framework: 'unknown',
    dirs: [],
    fileCounts: {}
  };

  const typeChecks = [
    { file: 'package.json', type: 'Node.js' },
    { file: 'requirements.txt', type: 'Python' },
    { file: 'pyproject.toml', type: 'Python' },
    { file: 'go.mod', type: 'Go' },
    { file: 'Cargo.toml', type: 'Rust' },
    { file: 'pom.xml', type: 'Java' },
    { file: 'build.gradle', type: 'Java' },
    { file: 'composer.json', type: 'PHP' },
    { file: 'Gemfile', type: 'Ruby' },
  ];

  for (const check of typeChecks) {
    if (existsSync(path.join(cwd, check.file))) {
      info.type = check.type;
      break;
    }
  }

  if (info.type === 'Node.js') {
    try {
      const pkg = JSON.parse(readFileSync(path.join(cwd, 'package.json'), 'utf8'));
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };
      if (deps?.next) info.framework = 'Next.js';
      else if (deps?.vite) info.framework = 'Vite';
      else if (deps?.react) info.framework = 'React';
      else if (deps?.vue) info.framework = 'Vue';
      else if (deps?.express) info.framework = 'Express';
      else if (deps?.['nestjs/core']) info.framework = 'NestJS';
      if (pkg.name) info.name = pkg.name;
    } catch {}
  }

  if (info.type === 'Python') {
    try {
      const content = readFileSync(path.join(cwd, 'requirements.txt'), 'utf8');
      if (content.includes('fastapi')) info.framework = 'FastAPI';
      else if (content.includes('django')) info.framework = 'Django';
    } catch {}
  }

  const dirChecks = [
    'src', 'app', 'lib', 'api', 'server', 'client',
    'frontend', 'backend', 'components', 'pages', 'routes',
    'tests', 'test', '__tests__', 'docs', 'public', 'static',
    'dist', 'build'
  ];

  for (const dir of dirChecks) {
    if (existsSync(path.join(cwd, dir))) {
      info.dirs.push(dir);
    }
  }

  try {
    const { execSync } = await import('node:child_process');
    const result = execSync(
      `find . -maxdepth 3 -type f 2>/dev/null | sed 's/.*\\.//' | sort | uniq -c | sort -rn | head -10`,
      { cwd, encoding: 'utf8', timeout: 5000 }
    );
    for (const line of result.trim().split('\n')) {
      if (!line) continue;
      const [, count, ext] = line.trim().match(/^(\d+)\s+(.+)$/) || [];
      if (count && ext) info.fileCounts[ext] = parseInt(count, 10);
    }
  } catch {}

  try {
    const { execSync } = await import('node:child_process');
    const total = execSync(
      'find . -maxdepth 3 -type f -not -path "./.vortex/*" 2>/dev/null | wc -l',
      { cwd, encoding: 'utf8', timeout: 5000 }
    );
    info.totalFiles = parseInt(total.trim(), 10) || 0;
  } catch {
    info.totalFiles = 0;
  }

  return info;
}
