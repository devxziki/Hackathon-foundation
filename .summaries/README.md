# Summaries

## Purpose

The `.summaries/` directory contains lightweight session summaries written at the end of each work session. Each summary captures what was accomplished, what was learned, and what should happen next. These are designed to be read by AI tools or humans resuming work after a gap.

## Format

Each summary file is named sequentially: `session-001.md`, `session-002.md`, etc.

Each file follows this structure:

```
# Session NNN — YYYY-MM-DD

## Duration
<start time> to <end time>

## Role
<which role or roles were active>

## Accomplished
- What was completed in this session

## Files created
- <path>: <description>

## Files modified
- <path>: <description>

## Decisions made
- <decision>

## Blockers or issues
- <issue> (if any, else "none")

## Next session
- <what to do next>
```

## Rules

- Write a summary at the end of every session, regardless of how much was accomplished.
- Summaries are append-only. Do not edit past summaries.
- If a session produced no meaningful output, write "Maintenance session — no deliverables" rather than skipping.
- The summary number increments sequentially (001, 002, 003...).

## See also

- `.memory/decisions.md` — detailed decision records
- `company/workspace/state/` — current task and last action
