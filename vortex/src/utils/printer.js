import kleur from 'kleur';

export function printBanner() {
  console.log(kleur.cyan().bold('\n  Vortex — AI Context Continuity for Any Project\n'));
}

export function printDetection(projectInfo, gitContext) {
  const { name, type, framework, dirs } = projectInfo;
  const dirStr = dirs.length > 0 ? dirs.slice(0, 6).join(', ') + (dirs.length > 6 ? '...' : '') : 'none detected';
  const branch = gitContext.branch || 'unknown';
  const commit = gitContext.lastCommit || '—';

  console.log(kleur.cyan('  ┌──────────────────────────────────────────────┐'));
  console.log(kleur.cyan('  │') + '  Vortex — Project Detected                    ' + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + '                                              ' + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + `  Project:    ${name.padEnd(37)}` + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + `  Type:       ${(type + (framework !== 'unknown' ? ` / ${framework}` : '')).padEnd(37)}` + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + `  Structure:  ${dirStr.padEnd(37)}` + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + `  Branch:     ${branch.padEnd(37)}` + kleur.cyan('│'));
  console.log(kleur.cyan('  │') + `  Last commit: ${commit.substring(0, 34).padEnd(36)}` + kleur.cyan('│'));
  console.log(kleur.cyan('  └──────────────────────────────────────────────┘'));
  console.log();
}

export function printSuccess(created, skipped, cwd) {
  console.log(kleur.green(`  ✓ Vortex initialized in ${cwd}\n`));

  if (created.length > 0) {
    console.log(kleur.bold('  Created:\n'));
    for (const file of created) {
      console.log(`    ${kleur.green('+')} ${file}`);
    }
    console.log();
  }

  if (skipped.length > 0) {
    console.log(kleur.yellow('  Skipped (already exist):\n'));
    for (const file of skipped) {
      console.log(`    ${kleur.yellow('·')} ${file}`);
    }
    console.log();
  }

  console.log(kleur.bold('  Next steps:'));
  console.log('    1. Open and review these 3 files — update them with your real project state:');
  console.log(kleur.cyan('         .vortex/state/last-action.md'));
  console.log(kleur.cyan('         .vortex/state/current-task.md'));
  console.log(kleur.cyan('         .vortex/state/progress-snapshot.md'));
  console.log();
  console.log('    2. Start your AI session:');
  console.log(kleur.cyan('         bash .vortex/scripts/start-session.sh'));
  console.log();
  console.log('    3. Paste the output into any AI tool and begin.\n');
  console.log('  Works with: ' + kleur.cyan('OpenCode · Cursor · VS Code Copilot · Claude Code · Antigravity · any AI\n'));
}

export function printStatus(state) {
  console.log();
  console.log(`  Current task:  ${kleur.cyan(state.currentTask || '—')}`);
  console.log(`  State:         ${kleur.cyan(state.state || '—')}`);
  console.log(`  Last action:   ${kleur.cyan(state.lastAction || '—')}`);
  console.log(`  Next action:   ${kleur.cyan(state.nextAction || '—')}`);
  console.log(`  Updated:       ${kleur.cyan(state.updated || '—')}`);
  console.log();
  console.log(`  ${kleur.green('→')} To resume: ${kleur.cyan('bash .vortex/scripts/start-session.sh')}`);
  console.log();
}

export function printError(msg) {
  console.log(kleur.red(`  ✗ ${msg}`));
}
