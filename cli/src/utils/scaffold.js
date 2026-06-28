import { existsSync, readFileSync, writeFileSync, chmodSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATES_DIR = path.join(__dirname, '..', '..', 'templates');

if (!existsSync(TEMPLATES_DIR)) {
  console.error('Fatal: templates directory not found at', TEMPLATES_DIR);
  process.exit(1);
}

export async function scaffold(cwd, projectInfo, gitContext) {
  const created = [];
  const skipped = [];
  const missingTemplates = [];

  const variables = {
    '{{PROJECT_NAME}}': projectInfo.name || 'my-project',
    '{{PROJECT_TYPE}}': projectInfo.type || 'unknown',
    '{{FRAMEWORK}}': projectInfo.framework || 'unknown',
    '{{DETECTED_DIRS}}': projectInfo.dirs?.join(', ') || 'none detected',
    '{{FILE_COUNT}}': String(projectInfo.totalFiles || 0),
    '{{LAST_COMMIT}}': gitContext.lastCommit || 'no git history',
    '{{LAST_COMMIT_HASH}}': gitContext.lastCommitHash || '',
    '{{BRANCH}}': gitContext.branch || 'unknown',
    '{{DATE}}': new Date().toISOString().split('T')[0],
  };

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
    const srcPath = path.join(TEMPLATES_DIR, entry.src);
    const destPath = path.join(cwd, entry.dest);

    if (!existsSync(srcPath)) {
      missingTemplates.push(entry.dest);
      continue;
    }

    if (existsSync(destPath)) {
      skipped.push(entry.dest);
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');
    content = fillTemplate(content, variables);
    writeFileSync(destPath, content, 'utf8');
    created.push(entry.dest);

    if (entry.executable) {
      chmodSync(destPath, 0o755);
    }
  }

  // Copy and fill rule files
  for (const entry of ruleMap) {
    const srcPath = path.join(TEMPLATES_DIR, entry.src);
    const destPath = path.join(cwd, entry.dest);

    if (!existsSync(srcPath)) {
      missingTemplates.push(entry.dest);
      continue;
    }

    if (existsSync(destPath)) {
      skipped.push(entry.dest);
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');
    content = fillTemplate(content, variables);
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

  if (missingTemplates.length > 0) {
    console.error('\n  \u26A0 Some templates were not found in the package. Run:\n     npx foundation-ai@latest init\n     after updating to the latest version.\n');
  }

  return { created, skipped, missingTemplates };
}

function fillTemplate(content, variables) {
  let result = content;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replaceAll(key, value);
  }
  return result;
}
