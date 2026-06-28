import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATES = path.resolve(__dirname, '../../templates');

export async function scaffold(cwd, projectInfo, gitContext) {
  const created = [];
  const skipped = [];

  const vars = {
    '{{PROJECT_NAME}}': projectInfo.name,
    '{{PROJECT_TYPE}}': projectInfo.type,
    '{{FRAMEWORK}}': projectInfo.framework,
    '{{DETECTED_DIRS}}': projectInfo.dirs.slice(0, 6).join(', '),
    '{{LAST_COMMIT}}': gitContext.lastCommit || '—',
    '{{LAST_COMMIT_HASH}}': gitContext.lastCommitHash || '—',
    '{{BRANCH}}': gitContext.branch || '—',
    '{{DATE}}': new Date().toISOString().slice(0, 10),
    '{{FILE_COUNT}}': String(projectInfo.totalFiles || 0)
  };

  const templateDir = TEMPLATES;
  const vortexDir = path.join(cwd, '.vortex');

  const dirs = [
    'state',
    'handoff',
    'policies',
    'scripts'
  ];

  for (const dir of dirs) {
    await fs.ensureDir(path.join(vortexDir, dir));
  }
  await fs.ensureDir(path.join(cwd, '.github'));

  const fileMap = [
    { src: 'state/last-action.md', dest: '.vortex/state/last-action.md' },
    { src: 'state/current-task.md', dest: '.vortex/state/current-task.md' },
    { src: 'state/progress-snapshot.md', dest: '.vortex/state/progress-snapshot.md' },
    { src: 'handoff/resume-protocol.md', dest: '.vortex/handoff/resume-protocol.md' },
    { src: 'handoff/model-switching.md', dest: '.vortex/handoff/model-switching.md' },
    { src: 'handoff/cli-to-ide.md', dest: '.vortex/handoff/cli-to-ide.md' },
    { src: 'handoff/ide-to-cli.md', dest: '.vortex/handoff/ide-to-cli.md' },
    { src: 'handoff/context-export-format.md', dest: '.vortex/handoff/context-export-format.md' },
    { src: 'policies/execution-policy.md', dest: '.vortex/policies/execution-policy.md' },
    { src: 'scripts/start-session.sh', dest: '.vortex/scripts/start-session.sh', executable: true },
    { src: 'scripts/end-session.sh', dest: '.vortex/scripts/end-session.sh', executable: true },
  ];

  for (const entry of fileMap) {
    const srcPath = path.join(templateDir, entry.src);
    const destPath = path.join(cwd, entry.dest);

    if (existsSync(destPath)) {
      skipped.push(entry.dest);
      continue;
    }

    if (!existsSync(srcPath)) {
      skipped.push(entry.dest + ' (template missing)');
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');
    content = fillTemplate(content, vars);
    writeFileSync(destPath, content, 'utf8');
    created.push(entry.dest);

    if (entry.executable) {
      try {
        const { chmodSync } = await import('node:fs');
        chmodSync(destPath, 0o755);
      } catch {}
    }
  }

  const ruleMap = [
    { src: 'rules/AGENTS.md.tpl', dest: 'AGENTS.md' },
    { src: 'rules/cursorrules.tpl', dest: '.cursorrules' },
    { src: 'rules/copilot-instructions.md.tpl', dest: '.github/copilot-instructions.md' },
  ];

  for (const entry of ruleMap) {
    const srcPath = path.join(templateDir, entry.src);
    const destPath = path.join(cwd, entry.dest);

    if (existsSync(destPath)) {
      skipped.push(entry.dest);
      continue;
    }

    if (!existsSync(srcPath)) {
      skipped.push(entry.dest + ' (template missing)');
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');
    content = fillTemplate(content, vars);
    writeFileSync(destPath, content, 'utf8');
    created.push(entry.dest);
  }

  const decisionsPath = path.join(cwd, '.vortex/decisions.md');
  if (!existsSync(decisionsPath)) {
    await fs.ensureDir(path.join(cwd, '.vortex'));
    writeFileSync(decisionsPath, '# Decisions\n\n', 'utf8');
    created.push('.vortex/decisions.md');
  } else {
    skipped.push('.vortex/decisions.md');
  }

  return { created, skipped };
}

function fillTemplate(content, vars) {
  for (const [key, value] of Object.entries(vars)) {
    content = content.replaceAll(key, value);
  }
  return content;
}
