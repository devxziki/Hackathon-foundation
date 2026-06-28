# VS Code Integration Guide

## Purpose

How to use the Hackathon Foundation workspace with VS Code and GitHub Copilot (or any VS Code AI extension) for context-aware, continuous AI-assisted development.

---

## Prerequisites

- VS Code installed
- GitHub Copilot or compatible AI extension installed
- Hackathon Foundation repository cloned locally
- The project root folder opened in VS Code (the folder containing `company/`)

## Step 1: Open project

Open the repository root folder in VS Code:

```
File → Open Folder → /path/to/Hackathon-foundation
```

VS Code uses the opened folder as its workspace root.

## Step 2: Load context using #file references

In Copilot Chat, reference state files using the `#file:` syntax:

```
Read the following files and understand the current state before we begin:

#file:company/workspace/state/last-action.md
#file:company/workspace/state/current-task.md
#file:company/workspace/state/progress-snapshot.md
```

Copilot will load these files into the conversation context. You can also reference policy files and role definitions the same way:

```
#file:company/policies/execution-policy.md
#file:company/roles/engineering/frontend-engineer.md
```

## Step 3: .github/copilot-instructions.md — auto-load foundation context

Create `.github/copilot-instructions.md` in the project root. Copilot reads this file automatically and uses it as system-level context for code completion and chat.

```markdown
# Copilot Instructions — Auto-loaded by GitHub Copilot

## Required context — always load these before any work

Before responding, read:
- company/workspace/state/last-action.md — the primary resume checkpoint
- company/workspace/state/current-task.md — the active task objective
- company/workspace/state/progress-snapshot.md — overall project status

## Session contract

1. Read the 3 state files above before any work.
2. Update company/workspace/state/last-action.md before ending every session.
3. Commit all changes before switching tools.
4. Follow company/policies/execution-policy.md execution lifecycle.
5. Follow company/policies/code-quality-policy.md for code quality rules.
6. Follow company/policies/review-policy.md for self-review before submitting.

## Code generation rules

- Single Responsibility: every function, module, and component does exactly one thing.
- Simplicity over optimization: write clean, readable code first. Optimize only when measured.
- Consistency: follow existing codebase patterns for naming, structure, and error handling.
- No dead code: no unused imports, variables, or commented-out code.

## Context window management

If context is limited, prioritize company/workspace/state/last-action.md.
This single file contains the last action and the next expected action.
```

Create this file at: `.github/copilot-instructions.md`.

### Alternative: Workspace settings to pin state files

To keep state files visible during the session, add to `.vscode/settings.json`:

```json
{
  "workbench.editor.pinnedTabWidth": 20,
  "files.exclude": {
    ".session-context.txt": true,
    ".context-export.md": true,
    ".context-transfer.md": true,
    ".model-switch-context.md": true
  },
  "explorer.openEditors.visible": 8
}
```

This hides transient transfer files from the explorer while keeping state files accessible.

## Step 4: Session loop inside VS Code

```
1. START SESSION
   - Copilot auto-loads .github/copilot-instructions.md
   - Use #file: references in Copilot Chat to load state files
   - Read last-action.md and current-task.md

2. EXECUTE
   - Use Copilot Chat (#file:) for questions and code review
   - Use inline Copilot completions for code generation
   - Follow company/policies/execution-policy.md lifecycle
   - Use company/assets/templates/ for output structure

3. UPDATE STATE via VS Code
   - Edit company/workspace/state/last-action.md
   - Edit company/workspace/state/current-task.md if status changed
   - Add to company/workspace/state/task-history.md if task completed
   - Record decisions in .memory/decisions.md

4. COMMIT via VS Code
   - Use Source Control panel (Ctrl+Shift+G)
   - Stage changes, write commit message, commit
   - Or use integrated terminal: git add -A && git commit -m "msg"

5. END SESSION
   - Write .summaries/session-NNN.md
   - Run bash scripts/end-session.sh in integrated terminal (Ctrl+`)
```

## Step 5: Handoff from VS Code to another tool

1. Complete the current unit of work.
2. Update `company/workspace/state/last-action.md`.
3. Commit all changes via Source Control panel or terminal:

```bash
git add -A
git commit -m "WIP: <current state>"
```

4. Run the end-session script:

```bash
bash scripts/end-session.sh
```

5. If switching machines:

```bash
git push origin main
```

6. Open the target tool, pull the repo, and follow its integration guide.

### Handoff from another tool to VS Code

1. Pull latest changes in the VS Code terminal:

```bash
git pull origin main
```

2. Check for transfer files in the file explorer or terminal:

```bash
ls .context-export.md .context-transfer.md .model-switch-context.md 2>/dev/null
```

3. If a transfer file exists, open and read it.
4. Use `#file:` to load the state files into Copilot Chat:

```
#file:company/workspace/state/last-action.md
#file:company/workspace/state/current-task.md
```

5. Begin work from the next expected action.

## Tips

- **Copilot Chat vs Inline:** Use Copilot Chat for complex questions and multi-file changes. Use inline completions for single-function or single-component generation.
- **#file: is required:** Copilot does not automatically know about your project files. Use `#file:path` explicitly to bring files into chat context.
- **Source Control panel:** Use VS Code's built-in git UI for staging and committing. It shows a diff of every change, which helps with self-review.
- **Pin state files:** Right-click `last-action.md` and `current-task.md` in the editor tab and select "Pin Tab" to keep them open across the session.
- **Integrated terminal:** Use Ctrl+` for running scripts (`start-session.sh`, `end-session.sh`) without leaving the editor.
- **Copilot Instructions persistence:** The `.github/copilot-instructions.md` file is loaded automatically — put your most-used context references and code standards there.
- **Free Forever:** All workflows assume free AI models. No paid API configuration is needed or recommended.
