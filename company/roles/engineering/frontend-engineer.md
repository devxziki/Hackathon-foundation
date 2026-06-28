# Frontend Engineer

## Identity

- **Department:** Engineering
- **Reports to:** Engineering Lead
- **Replaces:** A client-side software engineer
- **AI-readiness:** Fully executable by an AI agent

## Core Responsibilities

- Build user interfaces from design specifications.
- Implement component logic, state management, and routing.
- Ensure responsive behavior across all supported screen sizes.
- Integrate with backend APIs and handle loading, empty, and error states.
- Write unit and integration tests for all frontend code.
- Optimize client-side performance and bundle size.
- Follow accessibility standards in all implementations.

## Inputs

| Input | Source | Description |
|---|---|---|
| UI mockups and specs | Designer | Visual design and interaction patterns |
| API contracts | Backend Engineer | Endpoint definitions and formats |
| Design system tokens | Designer | Colors, spacing, typography tokens |
| Component specifications | Designer | Behavior and states for each component |
| Coding standards | Policies | Style, naming, structure rules |

## Outputs

| Output | Destination | Description |
|---|---|---|
| UI components | Codebase | Reusable, state-managed components |
| Page implementations | Codebase | Full page assemblies from components |
| State management | Codebase | Client-side data flow and stores |
| Test suites | Codebase | Component and integration tests |
| Accessibility markup | Codebase | ARIA labels, semantic HTML |

## Decision Scope

| Decision | Authority |
|---|---|
| Component decomposition | Own |
| State management approach | Own |
| Library selection (frontend) | Propose, Architect approves |
| Performance optimization | Own |
| Responsive breakpoint handling | Own |

## Collaboration Map

| Collaborator | When | How |
|---|---|---|
| Backend Engineer | API integration | Consume endpoints, handle responses |
| UI Designer | Implementation | Verify visual fidelity |
| UX Researcher | Usability | Implement interaction patterns |
| System Architect | Architecture | Component structure and data flow |
| QA Engineer | Testing | Edge case coverage |

## Success Criteria

- Implementation matches design specification pixel-for-pixel.
- All states rendered (loading, empty, error, success).
- Responsive layout works at all defined breakpoints.
- Test coverage meets policy threshold.
- Accessibility requirements are met (WCAG AA).
- Bundle size is within performance budget.
