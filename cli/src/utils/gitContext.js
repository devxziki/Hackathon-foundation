import { execSync } from 'node:child_process';

export function getGitContext(cwd) {
  const defaults = {
    lastCommit: 'unknown',
    branch: 'unknown',
    lastCommitHash: 'unknown',
    hasGit: false
  };

  try {
    execSync('git --version', { cwd, stdio: 'pipe', timeout: 3000 });
  } catch {
    return defaults;
  }

  try {
    const branch = execSync('git branch --show-current', { cwd, encoding: 'utf8', timeout: 3000 }).trim();
    const lastCommit = execSync('git log --oneline -1', { cwd, encoding: 'utf8', timeout: 3000 }).trim();
    const lastCommitHash = execSync('git rev-parse --short HEAD', { cwd, encoding: 'utf8', timeout: 3000 }).trim();

    return {
      lastCommit,
      branch,
      lastCommitHash: lastCommitHash || 'unknown',
      hasGit: true
    };
  } catch {
    return defaults;
  }
}
