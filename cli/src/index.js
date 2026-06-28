import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  if (command === '--version' || command === '-v') {
    const dir = path.dirname(fileURLToPath(import.meta.url));
    const pkg = JSON.parse(readFileSync(path.resolve(dir, '../package.json'), 'utf8'));
    console.log(pkg.version);
    return;
  }

  if (command === '--help' || command === '-h' || command === 'help') {
    printUsage();
    return;
  }

  if (command === 'init') {
    const { init } = await import('./commands/init.js');
    await init();
    return;
  }

  if (command === 'status') {
    const { status } = await import('./commands/status.js');
    await status();
    return;
  }

  if (command === 'resume') {
    const { resume } = await import('./commands/resume.js');
    await resume();
    return;
  }

  printUsage();
}

function printUsage() {
  console.log(`
  foundation-ai — AI context scaffolding for any project

  Usage:
    npx foundation-ai@latest init       Set up Foundation in current folder
    npx foundation-ai@latest status     Show current AI session state
    npx foundation-ai@latest resume     Print paste-ready context for any AI tool

  Works with: OpenCode · Cursor · VS Code · Claude Code · Antigravity · any AI CLI
`);
}
