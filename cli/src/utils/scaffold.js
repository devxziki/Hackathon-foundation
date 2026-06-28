import { existsSync, readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import path from 'node:path';
import fs from 'fs-extra';

function TEMPLATE_DIR(base) {
  return path.resolve(base, '../templates');
}

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

  const templateDir = TEMPLATE_DIR(import.meta.url);

  // Create required directories
  const dirs = [
    'company/workspace/state',
    'company/workspace/handoff',
    'company/policies',
    'scripts',
    '.github'
  ];

  for (const dir of dirs) {
    await fs.ensureDir(path.join(cwd, dir));
  }

  // Template file mappings: [source relative to templates/, dest relative to cwd]
  const fileMap = [
    { src: 'state/last-action.md', dest: 'company/workspace/state/last-action.md' },
    { src: 'state/current-task.md', dest: 'company/workspace/state/current-task.md' },
    { src: 'state/progress-snapshot.md', dest: 'company/workspace/state/progress-snapshot.md' },
    { src: 'handoff/resume-protocol.md', dest: 'company/workspace/handoff/resume-protocol.md' },
    { src: 'handoff/model-switching.md', dest: 'company/workspace/handoff/model-switching.md' },
    { src: 'handoff/cli-to-ide.md', dest: 'company/workspace/handoff/cli-to-ide.md' },
    { src: 'handoff/ide-to-cli.md', dest: 'company/workspace/handoff/ide-to-cli.md' },
    { src: 'handoff/context-export-format.md', dest: 'company/workspace/handoff/context-export-format.md' },
    { src: 'policies/execution-policy.md', dest: 'company/policies/execution-policy.md' },
    { src: 'scripts/start-session.sh', dest: 'scripts/start-session.sh', executable: true },
    { src: 'scripts/end-session.sh', dest: 'scripts/end-session.sh', executable: true },
  ];

  // Rule files (with template variables)
  const ruleMap = [
    { src: 'rules/AGENTS.md.tpl', dest: 'AGENTS.md' },
    { src: 'rules/cursorrules.tpl', dest: '.cursorrules' },
    { src: 'rules/copilot-instructions.md.tpl', dest: '.github/copilot-instructions.md' },
  ];

  // Copy and fill regular files
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

  // Copy and fill rule files
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

  // Create .memory/decisions.md if not exists
  const decisionsPath = path.join(cwd, '.memory/decisions.md');
  if (!existsSync(decisionsPath)) {
    await fs.ensureDir(path.join(cwd, '.memory'));
    writeFileSync(decisionsPath, '# Decisions\n\n', 'utf8');
    created.push('.memory/decisions.md');
  } else {
    skipped.push('.memory/decisions.md');
  }

  return { created, skipped };
}

function fillTemplate(content, vars) {
  for (const [key, value] of Object.entries(vars)) {
    content = content.replaceAll(key, value);
  }
  return content;
}
