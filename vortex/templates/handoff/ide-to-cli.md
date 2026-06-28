# IDE to CLI — Context Transfer

## Purpose

Define how workspace state is serialized from an IDE environment (VS Code, JetBrains, Cursor, etc.) and transferred back to a CLI environment (terminal, SSH, headless) without loss of context or progress.

## Export from IDE

When leaving an IDE session and intending to continue in CLI:

### Step 1: Save all files

Ensure all open files are saved. Unsubmitted changes will not be visible in CLI.

### Step 2: Update state files

Update the following files with current progress:

- `.vortex/state/last-action.md` — Exactly what was done during this IDE session.
- `.vortex/state/current-task.md` — Updated status, blockers, next action.
- `.vortex/state/task-history.md` — Add entry if a task was completed.

### Step 3: Commit working state

If work is in progress, commit with an explicit WIP message:

```
git add -A
git commit -m "WIP: <what was done in this session>"
```

If work is complete, commit with the standard format.

### Step 4: Push to remote (if needed)

If the CLI session is on a different machine:

```
git push origin main
```

### Step 5: Export context file

Create `.context-transfer.md` at the project root with:

- Session summary (what was accomplished).
- Last modified files.
- Next expected action.
- Any decisions made during the session.
- Any open questions or blockers.

## Import in CLI

When resuming from IDE work in a CLI environment:

### Step 1: Pull latest (if needed)

```
git pull origin main
```

### Step 2: Read the transfer file

```
cat .context-transfer.md
```

### Step 3: Read state files

```
cat .vortex/state/last-action.md
cat .vortex/state/current-task.md
```

### Step 4: Verify

```
git log --oneline -3
git status
```

### Step 5: Begin work

Start from the "Next expected action" in `last-action.md`.

## Clean up

Remove the transfer file after successful resume:

```
rm .context-transfer.md
```
