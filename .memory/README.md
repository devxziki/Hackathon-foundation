# Memory

## Purpose

The `.memory/` directory is a persistent decision log that spans across AI sessions. It records decisions, rationale, and context so that any future session — regardless of tool or model — can understand why the project is the way it is.

AI sessions are stateless by default (per the AI Collaboration Policy). This directory is the explicit state that persists between sessions.

## Format

Each entry in `.memory/decisions.md` follows this structure:

```
## YYYY-MM-DD: Decision title

**Decision:** What was decided.
**Rationale:** Why this decision was made.
**Alternatives considered:** Other options that were evaluated (if any).
**Made by:** The role or person who made the decision.
**Context:** Link to related files, discussions, or task assignments.
```

## Rules

- Every significant decision must be recorded here.
- "Significant" means any decision that affects future work: architecture, technology, process, or policy changes.
- Routine implementation details (e.g., "which variable name to use") do not need entries.
- Entries are append-only. Do not edit or delete past entries — add corrections as new entries.
- The most recent entry is at the bottom of the file.

## See also

- `company/workspace/state/` — current task state, last action, progress
- `company/workspace/handoff/resume-protocol.md` — how to resume work
