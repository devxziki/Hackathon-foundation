import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { printBanner, printStatus, printError } from '../utils/printer.js';

export async function status() {
  const cwd = process.cwd();
  const stateDir = path.join(cwd, '.vortex/state');

  if (!existsSync(path.join(stateDir, 'last-action.md'))) {
    printBanner();
    printError('Vortex is not set up in this directory.');
    console.log('  Run: ' + 'npx vortex init'.cyan + '\n');
    return;
  }

  const state = {
    currentTask: extractField(path.join(stateDir, 'current-task.md'), 'Task:', '—'),
    state: extractField(path.join(stateDir, 'current-task.md'), 'State:', '—'),
    lastAction: extractField(path.join(stateDir, 'last-action.md'), 'Action:', '—'),
    nextAction: extractNextAction(path.join(stateDir, 'last-action.md')),
    updated: getHumanTime(path.join(stateDir, 'last-action.md'))
  };

  printBanner();
  printStatus(state);
}

function extractField(filePath, label, fallback) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- **' + label)) {
        return trimmed.replace(/- \*\*[^*]+\*\*:\s*/, '').trim();
      }
    }
    return fallback;
  } catch {
    return fallback;
  }
}

function extractNextAction(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let inSection = false;
    for (const line of lines) {
      if (line.includes('## Next expected action')) {
        inSection = true;
        continue;
      }
      if (inSection && line.startsWith('## ')) break;
      if (inSection && line.includes('- **Action:**')) {
        return line.replace(/- \*\*Action:\*\* /, '').trim();
      }
    }
    return '—';
  } catch {
    return '—';
  }
}

function getHumanTime(filePath) {
  try {
    const stat = statSync(filePath);
    const date = new Date(stat.mtime);
    return date.toLocaleString();
  } catch {
    return '—';
  }
}
