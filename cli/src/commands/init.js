import { existsSync } from 'node:fs';
import path from 'node:path';
import prompts from 'prompts';
import { detectProject } from '../utils/detect.js';
import { getGitContext } from '../utils/gitContext.js';
import { scaffold } from '../utils/scaffold.js';
import { printBanner, printDetection, printSuccess, printError } from '../utils/printer.js';

export async function init() {
  const cwd = process.cwd();

  printBanner();

  // Check already initialized
  const stateFile = path.join(cwd, 'company/workspace/state/last-action.md');
  if (existsSync(stateFile)) {
    console.log('  ✓ Foundation already set up here.\n');
    console.log('  Run: ' + 'npx foundation-ai@latest status'.cyan + '\n');
    return;
  }

  // Detect project
  let projectInfo;
  try {
    projectInfo = await detectProject(cwd);
  } catch (err) {
    projectInfo = {
      name: path.basename(cwd),
      type: 'unknown',
      framework: 'unknown',
      dirs: [],
      fileCounts: {},
      totalFiles: 0
    };
  }

  // Git context
  let gitContext;
  try {
    gitContext = getGitContext(cwd);
  } catch {
    gitContext = { lastCommit: 'unknown', branch: 'unknown', lastCommitHash: 'unknown', hasGit: false };
  }

  // Print detection
  printDetection(projectInfo, gitContext);

  // Confirm
  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Set up AI context layer here?',
    initial: true
  });

  if (!response.value) {
    console.log('  Cancelled.');
    return;
  }

  // Scaffold
  let result;
  try {
    result = await scaffold(cwd, projectInfo, gitContext);
  } catch (err) {
    printError(`Failed to scaffold: ${err.message}`);
    return;
  }

  // Update .gitignore
  try {
    updateGitignore(cwd);
  } catch {}

  // Print success
  printSuccess(result.created, result.skipped, cwd);
}

function updateGitignore(cwd) {
  const gitignorePath = path.join(cwd, '.gitignore');
  const lines = [
    '',
    '# Foundation AI — transient context files',
    '.session-context.txt',
    '.context-export.md',
    '.context-transfer.md',
    '.model-switch-context.md',
  ];

  const existing = existsSync(gitignorePath)
    ? require('fs').readFileSync(gitignorePath, 'utf8')
    : '';

  const missing = lines.filter(line => !existing.includes(line));

  if (missing.length > 0) {
    require('fs').appendFileSync(gitignorePath, missing.join('\n') + '\n');
  }
}
