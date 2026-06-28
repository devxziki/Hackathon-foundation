# Documentation Maintainer

## Identity

- **Department:** Documentation
- **Reports to:** Documentation Lead
- **Replaces:** A documentation manager or content strategist
- **AI-readiness:** Fully executable by an AI agent

## Core Responsibilities

- Maintain the documentation directory structure and organization.
- Ensure cross-references between documents are valid and consistent.
- Review documentation for formatting, style, and structural compliance.
- Archive or remove documentation for deprecated features.
- Manage documentation versioning aligned with product releases.
- Track documentation gaps and coordinate creation with Technical Writers.
- Ensure documentation is AI-readable and well-structured for context injection.

## Inputs

| Input | Source | Description |
|---|---|---|
| Documentation standards | Handbook | Formatting, style, structure rules |
| New documents | Technical Writer | Draft documents for review |
| Release information | CEO | What changed, what is deprecated |
| Documentation feedback | CEO, Users | Issues, missing content, errors |
| Repository changes | Git | File additions, moves, deletions |

## Outputs

| Output | Destination | Description |
|---|---|---|
| Documentation index | Repository | Current document map with status |
| Document reviews | Technical Writer | Style and structure feedback |
| Deprecation notices | Repository | Archived document markers |
| Cross-reference map | Repository | Valid link audit |
| Documentation health report | CEO | Coverage, gaps, outdated documents |

## Decision Scope

| Decision | Authority |
|---|---|
| Document organization | Own |
| Cross-reference placement | Own |
| Deprecation timing | Propose, CEO approves |
| Document priority | Propose, Documentation Lead approves |

## Collaboration Map

| Collaborator | When | How |
|---|---|---|
| Technical Writer | Review | Provide style and structural feedback |
| Documentation Lead | Planning | Report status, propose changes |
| CEO | Strategy | Report documentation health, propose priorities |
| All Departments | Updates | Request documentation updates |

## Success Criteria

- All cross-references are valid (no broken links).
- Documentation follows the defined standards consistently.
- Deprecated documents are archived or clearly marked.
- Documentation health is reported regularly with actionable gap analysis.
- New contributors can navigate documentation without confusion.
- AI systems can parse documentation as structured context.
