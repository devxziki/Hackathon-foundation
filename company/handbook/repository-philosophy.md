# Repository Philosophy

## Purpose

This document explains the core philosophy behind the Hackathon Foundation repository architecture. It defines why the repository is structured the way it is and the principles that guided every design decision.

## The repository is a company

The central philosophical premise of Hackathon Foundation is that **a well-structured repository is a well-structured engineering team.**

Traditional software frameworks organize code by technical concern — models, views, controllers, services. Hackathon Foundation organizes by organizational concern — departments, policies, assets, roles. This is not a cosmetic choice. It is a fundamental shift in how we think about AI-assisted development.

### Why a company

A software company solves the same problems that an AI-assisted developer faces:

- **Division of labor.** Different people (and different AI models) have different strengths. The company model assigns work to the right role.
- **Standards and consistency.** A company has policies that everyone follows. The repository has rules that every AI follows.
- **Knowledge management.** A company has documentation, onboarding, and shared knowledge. The repository has a handbook and context files.
- **Quality control.** A company has review processes and definitions of done. The repository has review workflows and quality gates.
- **Institutional memory.** A company remembers past decisions. The repository has memory files that persist across sessions.

### The mapping

| Company concept | Repository equivalent |
|---|---|
| Company handbook | `company/handbook/` |
| Departments | `company/departments/` |
| Company policies | `company/policies/` |
| Internal tools and templates | `company/assets/` |
| Employee onboarding | `company/onboarding/` |
| External resources | `resources/` |
| Public documentation | `docs/` |

## Separation of knowledge vs execution

The repository draws a clean line between knowledge (what to know) and execution (what to do).

### Knowledge directory: `company/handbook/`

The handbook contains everything an AI needs to know before it starts working:

- Mission and culture
- Engineering principles
- Communication standards
- Decision-making framework
- Definition of done

Knowledge is declarative. It states what is true about the company. It does not contain step-by-step instructions for specific tasks.

### Execution directory: `company/assets/`

Assets contain everything an AI needs to execute specific tasks:

- Templates (output structures)
- Skills (step-by-step guides)
- Workflows (process definitions)
- Checklists (verification lists)

Execution is procedural. It states how to perform specific tasks. It does not contain company philosophy or values.

### Why this separation

- **Knowledge changes slowly.** Mission, culture, and principles evolve over months and years. They are stable references.
- **Execution changes frequently.** Templates, skills, and workflows are updated as techniques improve. They are iterative.
- **Different audiences.** Knowledge is for orientation. Execution is for action. Mixing them creates confusion about which is which.
- **Different review processes.** Knowledge requires careful, consensus-driven review. Execution can be updated more freely as better approaches emerge.

## Why departments exist before roles

The repository defines departments (`company/departments/`) before individual roles. This is deliberate:

1. **Departments define boundaries.** A department establishes the scope of work. Engineering does not design. Design does not test.
2. **Roles fit within departments.** A role is a specific function within a department's boundary. Multiple roles can exist within one department.
3. **Departments enable role expansion.** New roles can be added to a department without reorganizing the structure.
4. **Departments clarify handoffs.** When work moves from one department to another, the handoff point is clear.

The order is: define what areas of work exist, then define who does what within each area.

## Why assets are reusable instead of duplicated

Every asset in `company/assets/` is designed to be used by any role, in any project, across any session. Duplication is avoided for three reasons:

### Consistency

A skill used by ten different roles produces consistent output because all ten roles execute the same skill. If each role had its own version, the output would diverge.

### Maintainability

When a skill needs to be updated, it is updated once. If the skill were duplicated across roles, the update would need to be applied in multiple places, and inevitably some would be missed.

### Discoverability

A developer who needs to build an API should not need to search through role definitions to find instructions. They open `.skills/build-api/` and the skill is there, regardless of which role they are playing.

## Why policies are isolated from implementation

Policies in `company/policies/` define what must be done. Assets in `company/assets/` define how to do it. This separation is critical:

- **Policies change when standards change.** If the company decides to enforce a new security rule, the policy is updated. No asset needs to change.
- **Assets change when techniques improve.** If a better way to build components is discovered, the skill is updated. No policy needs to change.
- **Policies are reviewed by humans.** Rules require human agreement. Assets can be iterated more freely.
- **Assets are executed by AI.** Skills and templates are AI-facing. Policies are both human-facing and AI-facing.

This separation allows standards to remain stable while execution techniques evolve.

## Scalability principles for AI + human collaboration

### Principle 1: Structure before scale

The framework works for a 24-hour hackathon with one person and one AI model. It also works for a semester-long project with a team of humans and multiple AI models. The structure does not change. Only the depth changes — more roles, more assets, more policies.

### Principle 2: Clear boundaries prevent chaos

Every directory, every role, and every policy has a clear boundary. When a new contributor (human or AI) joins, they can immediately understand where they fit and what they own. Boundaries prevent overlap, conflict, and duplicated work.

### Principle 3: Explicit over implicit

In human teams, much knowledge is implicit — shared context that everyone absorbs over time. AI systems do not absorb implicit knowledge. Everything must be documented explicitly. The repository is designed around this constraint.

### Principle 4: Human in the loop

The CEO (human) is always the final decision-maker. AI systems execute, propose, and recommend — but they do not decide. The framework preserves human agency while maximizing AI productivity.

### Principle 5: Free is a constraint, not a limitation

Designing for free tools forces better decisions. When you cannot throw money at a problem, you must think more carefully about architecture, tool selection, and resource usage. The resulting framework is stronger, not weaker, for this constraint.

## Long-term vision of AI-native development frameworks

Hackathon Foundation is an early example of a new category: **AI-native development frameworks.** These frameworks differ from traditional software engineering frameworks in fundamental ways:

### Traditional frameworks

- Designed for human developers
- Organize code by technical concern
- Assume persistent, shared human memory
- Optimize for large, long-lived codebases
- Assume consistent team membership

### AI-native frameworks

- Designed for human-AI collaboration
- Organize code by organizational concern
- Assume stateless AI sessions with explicit context
- Optimize for rapid, iterative development
- Assume changing AI models and tools

### The trajectory

As AI models improve, AI-native frameworks will become more important, not less. Better models amplify the need for structure — they produce more output, faster, which means inconsistency scales with capability. The framework that organizes AI output effectively becomes the determining factor in project quality.

Hackathon Foundation's architecture — separating knowledge from execution, departments from roles, policies from assets — is designed for this future. It will work with whatever AI models exist, adapt to whatever tools emerge, and scale to whatever project size is needed.

## Connection to handbook

This philosophy is the foundation for all other handbook documents. The mission defines what we do ([mission.md](./mission.md)). The culture defines how we do it ([company-culture.md](./company-culture.md)). This document defines why the repository is built the way it is.
