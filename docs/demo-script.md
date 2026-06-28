# Demo Script

**Target:** Under 2 minutes.
**Setup:** A terminal window and an IDE (VS Code or Cursor) open side by side on the same repository.

---

## Scene 1: The Problem (15 seconds)

**Narrator:**
"Every AI coding tool starts from zero. You explain your project, it starts working. Then you switch to a different tool — and you explain everything again. Context is lost. Progress is fragmented."

---

## Scene 2: Opening the Workspace (20 seconds)

**Action:** Open the repository in a terminal.

```
cd Hackathon-foundation
cat company/workspace/state/progress-snapshot.md
```

**Narrator:**
"This is Hackathon Foundation. A standard file structure that any AI tool can read. Open it — and immediately know: what phase we're in, what's been done, and what comes next."

**Action:** Open the same directory in VS Code/Cursor.

**Narrator:**
"Same directory, same files. IDE or terminal — the state is identical."

---

## Scene 3: Resuming Work (25 seconds)

**Action:** Read the resume checkpoint.

```
cat company/workspace/state/last-action.md
cat company/workspace/state/current-task.md
```

**Narrator:**
"Last action, next action, open blockers — it's all here. Any AI tool reads these files and knows exactly where to continue. No explanation needed."

---

## Scene 4: Handoff (30 seconds)

**Action:** Switch from terminal to AI chat tool. Open the `.context-export.md` format.

```
cat company/workspace/handoff/model-switching.md | head -20
```

**Narrator:**
"Switching to a different AI model? Export the context, open a new session with the new model, import the context — and the new model continues from exactly where the last one stopped. No lost state. No repeated explanations."

---

## Scene 5: The Takeaway (20 seconds)

**Narrator:**
"Hackathon Foundation is the workspace standard that makes AI context portable. CLI, IDE, or chat — open the same files, see the same state, continue the same work. No databases. No servers. No subscriptions. Just files."

---

## Total: ~110 seconds

## Optional: Live Context Transfer

If time permits, demonstrate a live handoff:

1. Make a small edit in the terminal.
2. Update `last-action.md` with the change.
3. Close the terminal. Open the IDE.
4. Read `last-action.md` — the state is there.
5. Continue work.

This demonstrates zero-context-loss portability in under 30 seconds.
