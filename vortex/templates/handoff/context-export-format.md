# Context Export Format

## Purpose

Define a universal context format for transferring workspace state between tools, models, and environments. This format ensures no context is lost during handoffs.

## Format specification

The context export file must be named `.context-export.md` and placed at the project root. It contains exactly the following sections:

```
# Context Export

## Project Summary
<2-3 sentence overview of the project>

## Current Task
<what is currently being worked on>

## Last Action
<the single most recent action taken>

## Pending Decisions
- <decision that needs to be made>
- <decision that needs to be made>

## Files Changed
- <file path>: <brief description of change>
- <file path>: <brief description of change>

## Constraints
- <active constraint relevant to current work>
- <active constraint relevant to current work>

## Next Expected Action
<what should happen next>

## Open Questions
- <question that needs answering>
- <question that needs answering>
```

## Section requirements

### Project Summary

Must be brief (2-3 sentences). High-level purpose and current phase. The reader should understand what this project is within 10 seconds.

### Current Task

The name and objective of the active task. Include the phase or milestone it belongs to.

### Last Action

The single most recent action. Include what was done, who did it, and the result.

### Pending Decisions

Decisions that are required before work can proceed. Each entry must include the decision needed and who should make it. Do not include decisions already made — those go in the knowledge base.

### Files Changed

List of files modified in the current session. Each entry must include the file path and a one-line description of the change. Do not include files that were read but not modified.

### Constraints

Active constraints that affect the current task. Include policy constraints, resource limits, architectural decisions, or technical limitations. Do not include generic company constraints — only those relevant to the current task.

### Next Expected Action

The single next step. Must be specific enough that the reader can begin work immediately without asking for clarification.

### Open Questions

Questions that arose during the session and remain unanswered. Each question must include context about why it matters.

## Minimal export

For quick transfers (e.g., same session, same person), use the minimal format:

```
# Context Export (minimal)

## Last Action
<what was just done>

## Next Expected Action
<what to do next>
```

Full export is required for:
- Handoffs between different people.
- Handoffs between different AI models.
- Transfer between different environments (CLI ↔ IDE).
- Session gaps longer than 24 hours.

## Validation

Before submitting a context export, verify:

- [ ] All sections are present (or explicitly marked as "none").
- [ ] File paths are relative to project root.
- [ ] Decisions are clearly stated, not implied.
- [ ] Next action is actionable without clarification.
- [ ] Open questions include context.
