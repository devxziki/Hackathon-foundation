# Universal Integration Guide

## Purpose

Master integration guide for any AI tool — named or unnamed, CLI or IDE, web chat or API. If your tool is not listed in a specific guide in `resources/integrations/`, use this one.

---

## Section 1: The Universal Session Contract

Every AI tool using Hackathon Foundation must follow these 3 rules:

### Rule 1 — Always read these 3 files first, in order, before any work

```
company/workspace/state/last-action.md
company/workspace/state/current-task.md
company/workspace/state/progress-snapshot.md
```

These files contain the full state of the project at a glance: what was just done, what is being worked on now, and the overall progress. No work may begin until these files have been read.

### Rule 2 — Always update last-action.md before ending any session

Before switching tools, models, or closing the session, update `company/workspace/state/last-action.md` with:
- The last action taken
- The last file modified
- Any decisions made during the session
- The next expected action

If this file is not updated, the next session starts with stale context.

### Rule 3 — Always commit state changes before switching tools

Before moving to a different tool, commit all changes:

```bash
git add -A
git commit -m "WIP: <description of current state>"
```

If switching machines, push to remote:

```bash
git push origin main
```

---

## Section 2: Universal Session Startup Script (copy-paste for ANY tool)

Copy and paste this block as your first message to any AI tool:

"""
SYSTEM CONTEXT — read before responding:

[paste content of company/workspace/state/last-action.md]
[paste content of company/workspace/state/current-task.md]

You are acting as [ROLE] from company/roles/[dept]/[role].md.
Follow company/policies/execution-policy.md.
Your next action is: [next expected action from last-action.md]
Do not ask for clarification. Begin.
"""

To quickly generate this block with actual content:

```bash
bash scripts/start-session.sh
```

This prints the complete startup context to the terminal and saves it to `.session-context.txt` for easy copy-paste.

---

## Section 3: Tool Category Matrix

| Category | Examples | How to load context | How to end session |
|---|---|---|---|
| **Terminal CLI** | OpenCode, Antigravity, Aider, Claude Code, Gemini CLI, any unknown CLI | Run `bash scripts/start-session.sh`, copy the output, and paste as your first prompt. Or use `cat` to read state files directly. | Run `bash scripts/end-session.sh`. It checks that `last-action.md` is updated and all changes are committed. Handoff instructions printed on success. |
| **IDE chat panel** | Cursor, VS Code Copilot, JetBrains AI, Windsurf | Use `@file` or `#file` references to link state files directly in chat. See the Cursor or VS Code guide for tool-specific syntax. | Update `last-action.md` via the chat panel, then commit via the built-in terminal or GUI. Run `bash scripts/end-session.sh` in the integrated terminal. |
| **Web chat** | Claude.ai, ChatGPT, Gemini, any browser chat | Copy the output of `bash scripts/start-session.sh` and paste as the first message. Save the full context export as a text file for reference. | Manually update `last-action.md` and commit via a terminal. Web chat cannot write files — you must update state files in a CLI or IDE after the chat session. |
| **API/custom** | Direct API calls, scripts, automation | Read state files with file I/O, then include them in the system prompt or messages array. Use `bash scripts/start-session.sh` to generate the context block programmatically. | Write updated `last-action.md` via file I/O, commit via git API or CLI, then run cleanup steps from `bash scripts/end-session.sh` manually. |
| **Unknown tool** | Any tool not listed above | Follow the [Unknown Tool Protocol](#section-4-unknown-tool-protocol) below. | Follow the [Unknown Tool Protocol](#section-4-unknown-tool-protocol) Section 4 Step 5. |

---

## Section 4: Unknown Tool Protocol

When the tool has no specific integration guide:

### Step 1 — Find where to paste context

Look for any of the following in the tool's interface:
- A "system prompt" or "system message" field
- An initial message input where you can paste a large block of text
- A configuration file where you can set a system prompt
- A `--prompt` or `--context` CLI flag

### Step 2 — Generate session context

```bash
bash scripts/start-session.sh
```

This prints the full context block to the terminal and saves it to `.session-context.txt`.

### Step 3 — Paste context

Copy the output of the script (or the contents of `.session-context.txt`) and paste it into the tool's prompt field as your first message.

### Step 4 — Begin

Tell the AI:

```
Read the above context. Your next action is [X]. Begin.
```

Replace `[X]` with the "Next expected action" from `last-action.md`.

### Step 5 — End session

When finished with the session:

```bash
bash scripts/end-session.sh
```

This script:
- Verifies `last-action.md` was updated recently
- Checks for uncommitted changes
- Cleans up `.session-context.txt`
- Prints handoff summary

If the tool cannot run bash, update `last-action.md` and commit manually, then delete `.session-context.txt`.

---

## Section 5: Context Size Adaptation

When the tool has a small context window (under 8k tokens):

### Minimal context (the single most important file)

```
company/workspace/state/last-action.md
```

This one file contains the last action and the next expected action — the minimum needed to continue work without repeating yourself.

### What to drop first (in order)

1. `task-history.md` — completed tasks are not needed for current work.
2. `progress-snapshot.md` — only needed for new contributors, not for continuing work.
3. Handbook and policy files — only read the specific sections relevant to the task.
4. Example files and templates — reference only when needed for output structure.
5. `current-task.md` — only if its content overlaps heavily with `last-action.md`.

### What to never drop

- `company/workspace/state/last-action.md` — this is the resume checkpoint. Without it, the AI starts from zero.

### The one-line context summary format

When context is extremely tight, use this compressed format:

```
Last: [paste "Action" line from last-action.md]. Next: [paste "Next expected action"]. Role: [role name].
```

Example:

```
Last: Implemented dark mode toggle with theme persistence. Next: Peer review of dark mode implementation. Role: frontend-engineer.
```

This conveys the essential state in under 200 characters.

---

## Section 6: Verification Checklist

Before starting work in any tool, verify:

- [ ] Read `company/workspace/state/last-action.md` — know exactly where work stopped
- [ ] Read `company/workspace/state/current-task.md` — know the objective and acceptance criteria
- [ ] Confirmed `git status` is clean or matches last recorded state
- [ ] Role is identified and role file has been referenced (`company/roles/<dept>/<role>.md`)
- [ ] First action matches "Next expected action" in `last-action.md`

Before ending a session in any tool, verify:

- [ ] `company/workspace/state/last-action.md` has been updated
- [ ] All changes are committed (`git status` is clean)
- [ ] If switching tools: `.session-context.txt` exists and contains the latest context
- [ ] If switching machines: changes have been pushed to remote
