# Resume Protocol

## Purpose

Define the step-by-step process for resuming work in any tool (CLI, IDE, chat-based AI) with zero context loss. This protocol ensures that regardless of which tool or model is used, the state is fully recoverable.

## Before pausing

Every time work is paused (end of session, context switch, tool switch), execute this checklist:

### Mandatory: Update state files

- [ ] `.vortex/state/last-action.md` — Update with last action, next expected action.
- [ ] `.vortex/state/current-task.md` — Update status, blockers.
- [ ] If a task was completed: update `.vortex/state/task-history.md`.

### Mandatory: Save all work

- [ ] All files saved.
- [ ] Changes committed (`git commit -m "WIP: <description>"` or standard commit).
- [ ] Pushed to remote if switching machines.

### Optional: Export context

- [ ] If switching tools or models: create `.context-export.md` at project root.
- [ ] If switching models: create `.model-switch-context.md`.

## Resume checklist

When resuming work, follow these steps in order:

### Step 1: Synchronize

If resuming on a different machine:

```
git pull origin main
```

If resuming on the same machine, verify the branch and commit match expectations:

```
git status
git log --oneline -3
```

### Step 2: Read the resume entry point

Check for context transfer files at the project root:

```
ls .context-export.md .model-switch-context.md .context-transfer.md 2>/dev/null
```

If a transfer file exists, read it first. It contains the summary of what was happening.

### Step 3: Read the state files

Read these files in order:

1. `.vortex/state/last-action.md` — Exact last step taken.
2. `.vortex/state/current-task.md` — What is being worked on.
3. `.vortex/state/progress-snapshot.md` — Overall project status.
4. `.vortex/state/task-history.md` — Completed work context.

### Step 4: Verify current file state

For the files referenced in `last-action.md`, read their current content:

```
cat <path to last modified file>
```

If the file content matches the expected state, context is intact. If not, investigate the discrepancy before proceeding.

### Step 5: Re-establish context

Read any handbook sections or policies relevant to the current task:

- `.vortex/handbook/mission.md` — Project purpose.
- `.vortex/handbook/engineering-principles.md` — Technical standards.
- Relevant sections from `.vortex/policies/` — Active constraints.

This is especially important when switching to a different AI model that has no prior knowledge of the project.

### Step 6: Confirm readiness

Before starting work, confirm:

- [ ] I know what the last action was.
- [ ] I know what the next expected action is.
- [ ] I know what files I need to work on.
- [ ] I know what constraints apply.
- [ ] I know what decisions are pending.

If any of these are unclear, do not proceed. Read the appropriate state file again or ask for clarification from the CEO.

### Step 7: Begin work

Start with the "Next expected action" from `last-action.md` or the transfer file.

## Emergency resume (no state files)

If state files are missing or outdated, use this emergency procedure:

1. Check `git log --oneline -10` to see recent activity.
2. Check `git diff HEAD~1 --stat` to see what changed in the last commit.
3. Read any documentation files in `docs/` for project understanding.
4. Report the missing state to the CEO and reconstruct context from available artifacts.

## Protocol violations

Resuming work without following this protocol may result in:
- Lost context and rework.
- Inconsistent decisions.
- Violations of policies due to missing context.

If a step cannot be completed (e.g., state file is missing), note the gap and proceed with available context. Report the gap so the state system can be repaired.
