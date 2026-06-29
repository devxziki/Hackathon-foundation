import { existsSync, readFileSync, appendFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import prompts from 'prompts';
import { detectProject } from '../utils/detect.js';
import { getGitContext } from '../utils/gitContext.js';
import { scaffold } from '../utils/scaffold.js';
import { printBanner, printDetection, printSuccess, printError } from '../utils/printer.js';
import { runGraphify } from '../graphify/index.js';

export async function init() {
  const cwd = process.cwd();

  printBanner();

  const stateFile = path.join(cwd, '.vortex/state/last-action.md');
  if (existsSync(stateFile)) {
    console.log('  ✓ Vortex already set up here.\n');
    console.log('  Run: ' + 'npx dev-vortex status'.cyan + '\n');
    return;
  }

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

  let gitContext;
  try {
    gitContext = getGitContext(cwd);
  } catch {
    gitContext = { lastCommit: 'unknown', branch: 'unknown', lastCommitHash: 'unknown', hasGit: false };
  }

  printDetection(projectInfo, gitContext);

  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Set up Vortex AI context layer here?',
    initial: true
  });

  if (!response.value) {
    console.log('  Cancelled.');
    return;
  }

  let result;
  try {
    result = await scaffold(cwd, projectInfo, gitContext);
  } catch (err) {
    printError(`Failed to scaffold: ${err.message}`);
    return;
  }

  try {
    updateGitignore(cwd);
  } catch {}

  printSuccess(result.created, result.skipped, cwd);

  const graphifyResponse = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Do you want to analyze your code with Graphify and generate an interactive code graph?',
    initial: false
  });

  if (graphifyResponse.value) {
    await runGraphify(cwd);
  } else {
    await prompts({
      type: 'text',
      name: '_',
      message: 'You can use npx dev-vortex graphify anytime to analyze your code.\nPress Enter to continue...'
    });
  }
}

function updateGitignore(cwd) {
  const gitignorePath = path.join(cwd, '.gitignore');
  const lines = [
    '',
    '# Vortex — AI context layer',
    '.vortex/',
    '.session-context.txt',
    '.context-export.md',
    '.context-transfer.md',
    '.model-switch-context.md',
  ];

  try {
    const existing = readFileSync(gitignorePath, 'utf8');
    const missing = lines.filter(line => !existing.includes(line));
    if (missing.length > 0) {
      appendFileSync(gitignorePath, missing.join('\n') + '\n');
    }
  } catch {
    writeFileSync(gitignorePath, lines.join('\n') + '\n');
  }
}
