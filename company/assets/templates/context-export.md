# Context Export

## Project Summary

Hackathon Foundation is an open-source, file-based AI workspace continuity framework. It solves context loss when switching between AI tools, models, and environments. The repository defines a layered structure — handbook, departments, roles, policies, assets, workspace — that any AI tool can read and write.

## Current Task

Phase 9/10 completion — filling execution layer gaps: creating asset templates, memory/summary directories, onboarding guide, OpenCode integration guide, validation script, and populating the foundation manifest.

## Last Action

Created 5 handoff protocol files in `company/workspace/handoff/` defining context transfer standards between CLI, IDE, and AI models.

## Pending Decisions

- Whether to consolidate the 27 legacy `docs/` files with the newer handbook or keep both
- What priority to assign to populating `company/assets/` with reusable skills

## Files Changed

- `company/workspace/handoff/cli-to-ide.md`: CLI to IDE context transfer protocol
- `company/workspace/handoff/ide-to-cli.md`: IDE to CLI context transfer protocol
- `company/workspace/handoff/model-switching.md`: Model-to-model context transfer protocol
- `company/workspace/handoff/context-export-format.md`: Universal context export format specification
- `company/workspace/handoff/resume-protocol.md`: Complete resume protocol

## Constraints

- Free Forever — only free AI models and tools may be referenced
- Model-agnostic — no file may reference a specific AI model by name
- No automation — only structured file definitions, no executable agents
- All handoff formats must be implementable manually without tooling

## Next Expected Action

Populate `company/assets/templates/` with reusable templates (context-export, task-assignment, pr-checklist, role-onboarding) and `company/assets/workflows/` with a new-task-workflow.

## Open Questions

- Should the model-switching context adaptation table include specific guidance for context-window-limited models beyond the general characteristic advice?
