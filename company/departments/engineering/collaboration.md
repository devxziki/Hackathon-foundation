# Engineering — Collaboration

## Cross-department workflow

Engineering interacts with every other department. The collaboration follows a consistent handoff protocol defined in the handbook.

### Design → Engineering

**Handoff:** Design provides UI mockups, design system tokens, component specifications, and user flows.

**Engineering returns:** Implemented components matching the design specification, with behavior notes for any deviations.

**Check:** Engineering verifies that the implementation matches the design before marking a task complete.

### Documentation → Engineering

**Handoff:** Documentation provides content requirements, API documentation templates, and user-facing text.

**Engineering returns:** API endpoints with clear contracts, generated API reference, and technical accuracy review of documentation.

**Check:** Engineering reviews all documentation touching technical systems for accuracy.

### Quality Assurance → Engineering

**Handoff:** QA provides test plans, quality gates, bug reports, and regression test results.

**Engineering returns:** Fixed bugs, improved test coverage, and explanation of root causes.

**Check:** Engineering does not close a bug until QA confirms the fix in the relevant environment.

### Operations → Engineering

**Handoff:** Operations provides deployment pipelines, infrastructure requirements, and monitoring tools.

**Engineering returns:** Build configurations, deployment manifests, health check endpoints, and observability instrumentation.

**Check:** Engineering verifies that code builds and passes all checks in the CI pipeline before requesting deployment.

### Research → Engineering

**Handoff:** Research provides technology evaluations, proof-of-concept implementations, and migration recommendations.

**Engineering returns:** Adopted recommendations integrated into the codebase, with migration plans for changes.

**Check:** Engineering evaluates research output against architecture principles before adoption.

## Escalation path

| Issue | Escalate to |
|---|---|
| Unclear specification | Engineering Lead |
| Cross-department conflict | Department leads meeting |
| Architecture disagreement | Software Architect |
| Policy violation | CEO |
