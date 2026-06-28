# CLI to IDE — Context Transfer

## Purpose

Define how workspace state and context are exported from a CLI environment (terminal, SSH, headless) and imported into an IDE environment (VS Code, JetBrains, Cursor, etc.) for continued work.

## Export from CLI

When leaving a CLI session and intending to continue in an IDE, execute the following export:

### Step 1: Commit current state

Ensure all changes are committed or staged so the IDE can see exactly what was done:

```
git add -A
git commit -m "WIP: <brief description of current state>"
```

If the work is incomplete, use a "WIP" commit message so it is clear this is not a finished task.

### Step 2: Write the resume context

Update `company/workspace/state/last-action.md` with:

- **Last executed action** — exactly what was done.
- **Last modified file** — path and change description.
- **Next expected action** — what should happen next.
- **Continuity notes** — anything the IDE user needs to know.

### Step 3: Export the context summary

Generate a context summary file at the project root:

```
cp company/workspace/state/last-action.md .context-transfer.md
```

This file serves as the entry point when the IDE opens the project.

## Import in IDE

When opening the project in an IDE after CLI work:

### Step 1: Read the transfer file

Open `.context-transfer.md` at the project root. This contains the last action and next expected action.

### Step 2: Read the state files

Read the following state files in order:

1. `company/workspace/state/last-action.md` — Resume checkpoint.
2. `company/workspace/state/current-task.md` — What is being worked on.
3. `company/workspace/state/progress-snapshot.md` — Big picture.
4. `company/workspace/state/task-history.md` — What has been done.

### Step 3: Verify the workspace state

Check that the working tree matches the recorded state:

```
git status
git log --oneline -3
```

Confirm the most recent commit matches the last action recorded.

### Step 4: Begin work

Start from the "Next expected action" in `last-action.md`. If no next action is specified, read `current-task.md` and begin from there.

## Clean up

After successfully resuming in the IDE, remove the transfer file:

```
rm .context-transfer.md
```

The state files in `company/workspace/state/` remain as the permanent source of truth.
