# Glossary

## Purpose

This document defines key terms used throughout the Hackathon Foundation framework. Every AI assistant and human contributor should reference this glossary when encountering unfamiliar terms.

## Terms

### Asset

A reusable internal capability — template, skill, workflow, checklist, playbook, or prompt. Assets live in `company/assets/`. See [README.md](./README.md).

### CEO

The user of the framework. The person who assigns tasks, reviews output, and maintains project memory. The CEO is the human in the loop.

### Company

The conceptual organization that the repository represents. The company has departments, policies, assets, and a handbook. See `company/`.

### Context

Shared project knowledge that every AI session reads before producing output. Context lives in the handbook. See `company/handbook/`.

### Definition of Done (DoD)

The criteria that must be met before a task is considered complete. See [definition-of-done.md](./definition-of-done.md).

### Department

A functional area of the company with distinct responsibilities. Departments include Engineering, Design, Testing, Documentation, Operations, and Management. See `company/departments/`.

### Employee

An AI coding assistant assigned to a specific role. The employee follows role definitions, rules, and workflows to produce output.

### Handbook

The brain of the company. Contains mission, culture, principles, and standards that every AI must read. See `company/handbook/`.

### Lifecycle

The stages of an engineering project: Idea, Research, Planning, Architecture, Implementation, Review, Testing, Documentation, Deployment, Maintenance. See [project-lifecycle.md](./project-lifecycle.md).

### Onboarding

Guides that teach new users and AI assistants how to use the framework. See `company/onboarding/`.

### Policy

A binding constraint that all output must follow. Policies include coding rules, security requirements, and quality gates. See `company/policies/`.

### Role

A defined position in the company with specific responsibilities, skills, rules, and expected outputs. Examples: Software Architect, Frontend Engineer, QA Engineer. See `company/departments/`.

### Skill

A documented, reusable capability (how to build a component, how to create an API). Any role can execute any skill. Skills live in `company/assets/`.

### Template

A pre-approved structure for a common deliverable (README, API spec, bug report). Templates live in `company/assets/`.

### Workflow

A step-by-step process for a common development scenario. Workflows orchestrate roles, skills, rules, and templates. Workflows live in `company/assets/`.

## Role-specific terms

### Architecture Decision Record (ADR)

A document that records an architecture decision, including the context, options considered, and the final decision with rationale.

### Acceptance Criteria

The specific conditions that must be met for a feature to be considered complete. Defined by the Product Manager.

### Edge Case

An input or condition that occurs at the extreme boundaries of normal operation. Edge cases must be handled gracefully.

### Regression

A bug that appears in a previously working feature after a change is made.

### Technical Debt

The implied cost of additional rework caused by choosing an easy solution now instead of a better approach that would take longer.

## Framework terms

### Free Forever

The commitment that all tools, models, and resources referenced in the framework are free to use. See `docs/FREE_FOREVER.md`.

### AI-Agnostic

The principle that the framework must work with any AI coding assistant, not tied to a specific model or tool.

## See also

For a comprehensive glossary covering all framework terms, see `docs/GLOSSARY.md`.
