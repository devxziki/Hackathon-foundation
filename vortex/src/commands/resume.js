import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import kleur from 'kleur';
import { printError } from '../utils/printer.js';

export async function resume() {
  const cwd = process.cwd();
  const stateDir = path.join(cwd, '.vortex/state');
  const lastActionFile = path.join(stateDir, 'last-action.md');
  const currentTaskFile = path.join(stateDir, 'current-task.md');
  const contextFile = path.join(cwd, '.session-context.txt');

  if (!existsSync(lastActionFile)) {
    printError('Vortex is not set up in this directory.');
    console.log('  Run: ' + kleur.cyan('npx dev-vortex init') + '\n');
    return;
  }

  const separator = kleur.cyan('=== SESSION CONTEXT — paste into any AI tool ===');
  const end = kleur.cyan('=== END CONTEXT — your next action is above ===');

  let output = '';

  output += separator + '\n\n';

  if (existsSync(lastActionFile)) {
    output += '## LAST ACTION\n';
    output += readFileSync(lastActionFile, 'utf8').trim() + '\n\n';
  }

  if (existsSync(currentTaskFile)) {
    output += '## CURRENT TASK\n';
    output += readFileSync(currentTaskFile, 'utf8').trim() + '\n\n';
  }

  output += end + '\n';

  try {
    writeFileSync(contextFile, output, 'utf8');
  } catch {}

  console.log(output);
  console.log(kleur.green('  Context saved to .session-context.txt'));
  console.log('  Paste the above into any AI tool — OpenCode, Cursor, Claude Code, etc.\n');
}
