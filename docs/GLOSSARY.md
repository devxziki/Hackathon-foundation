# Glossary

## Purpose

This document defines the terms used throughout the Hackathon Foundation documentation.

## A

**Agent.** An AI coding assistant assigned to a specific role. See [ENGINEERING_ROLES.md](./ENGINEERING_ROLES.md).

**AI-agnostic.** A design principle stating that the framework must work with any AI coding assistant, not tied to a specific model or tool. See [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md).

**AI-native.** A framework designed from the ground up for human-AI collaboration, not adapted from traditional software engineering processes. See [CORE_CONCEPTS.md](./CORE_CONCEPTS.md).

**Architecture.** The high-level structure of the repository or the software project being built. See [ARCHITECTURE.md](./ARCHITECTURE.md).

## C

**CEO.** The user of the framework. The person who assigns tasks, reviews output, and maintains project memory. See [COMPANY_MODEL.md](./COMPANY_MODEL.md).

**Company model.** The architectural model where the repository represents a software company, the user is the CEO, and AI coding assistants are employees. See [COMPANY_MODEL.md](./COMPANY_MODEL.md).

**Context.** Shared project knowledge that every AI session reads before producing output. Stored in `.context/`. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

**Cross-link.** A link from one document to another related document within the repository.

## D

**Department.** A group of related roles under a shared focus area (Engineering, Design, Testing, Documentation, Operations, Management). See [DEPARTMENTS.md](./DEPARTMENTS.md).

**Design principle.** A governing rule that shapes repository decisions. The repository has 11 design principles. See [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md).

**Documentation.** All content in the `docs/` directory — the public-facing explanation of the project.

## E

**Employee.** An AI coding assistant assigned to a role. A role definition tells the AI who it is, what it knows, how it behaves, and what to produce.

**Engineering role.** A defined position in the company model with specific responsibilities, skills, rules, and outputs. See [ENGINEERING_ROLES.md](./ENGINEERING_ROLES.md).

## F

**Free Forever.** The commitment that all tools, models, and resources referenced in the repository are free to use. See [FREE_FOREVER.md](./FREE_FOREVER.md).

## H

**Hackathon.** A time-constrained event where participants build software projects, typically 24-48 hours.

## I

**Integration.** The approach for using the Hackathon Foundation framework with a specific AI coding assistant. See [INTEGRATIONS.md](./INTEGRATIONS.md).

## M

**MCP (Model Context Protocol).** A protocol that gives AI coding assistants access to external tools like file systems, version control, and browsers. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

**Memory.** The project's recorded history — decisions, timeline, todos, bugs, and features. Stored in `.memory/`. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

**Mission.** The present purpose of Hackathon Foundation. See [MISSION.md](./MISSION.md).

**Model.** A specific AI large language model used for code generation and other engineering tasks. See [FREE_MODELS.md](./FREE_MODELS.md).

**Model routing.** The practice of using different AI models for different phases of work (planning, building, reviewing, documenting). See [MODEL_SELECTION_GUIDE.md](./MODEL_SELECTION_GUIDE.md).

**Modularity.** The property of being composed of independent, reusable components. See [ARCHITECTURE.md](./ARCHITECTURE.md).

## O

**Orchestration.** The process of organizing how humans and AI work together — selecting roles, providing context, enforcing rules, and reviewing output.

**Output.** The deliverable produced by an AI coding assistant after executing a task.

## P

**Philosophy.** The core beliefs and principles that guide the project. See [PHILOSOPHY.md](./PHILOSOPHY.md).

**Playbook.** A high-level strategy document for running hackathons. Stored in `.playbooks/`. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

**Principle.** See design principle.

**Prompt.** A message sent to an AI coding assistant. Prompts include role definitions, context, rules, and task descriptions. See [CORE_CONCEPTS.md](./CORE_CONCEPTS.md).

## R

**Repository structure.** The organization of the Hackathon Foundation repository, including all top-level folders and their purposes. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

**Responsibility.** A specific duty assigned to a role in the company model. See [RESPONSIBILITIES.md](./RESPONSIBILITIES.md).

**Role.** A defined position in the company model with a purpose, responsibilities, skills, rules, and expected outputs. See [ENGINEERING_ROLES.md](./ENGINEERING_ROLES.md).

**Rule.** A non-negotiable constraint that all AI output must follow. Rules enforce consistency. Stored in `.rules/`. See [RULES.md](./RULES.md).

## S

**Separation of responsibilities.** The architectural principle that each folder and role owns exactly one concern. See [ARCHITECTURE.md](./ARCHITECTURE.md).

**Skill.** A documented, reusable capability that any role can execute. Stored in `.skills/`. See [SKILLS.md](./SKILLS.md).

**Structure.** The organization of the repository — folders, files, naming conventions, and relationships. The repository contains structure, not code.

**Summary.** A condensed version of project memory, used for quick orientation. Stored in `.summaries/`. See [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md).

## T

**Template.** A pre-approved structure for a common deliverable. Stored in `.templates/`. See [TEMPLATES.md](./TEMPLATES.md).

## V

**Vision.** The long-term destination for Hackathon Foundation. See [VISION.md](./VISION.md).

## W

**Workflow.** A step-by-step sequence for transforming project state. Workflows orchestrate roles, rules, skills, templates, and context. Stored in `.workflows/`. See [WORKFLOW_OVERVIEW.md](./WORKFLOW_OVERVIEW.md).

## Glossary navigation

| Letter | Terms |
|---|---|
| A | Agent, AI-agnostic, AI-native, Architecture |
| C | CEO, Company model, Context, Cross-link |
| D | Department, Design principle, Documentation |
| E | Employee, Engineering role |
| F | Free Forever |
| H | Hackathon |
| I | Integration |
| M | MCP, Memory, Mission, Model, Model routing, Modularity |
| O | Orchestration, Output |
| P | Philosophy, Playbook, Principle, Prompt |
| R | Repository structure, Responsibility, Role, Rule |
| S | Separation of responsibilities, Skill, Structure, Summary |
| T | Template |
| V | Vision |
| W | Workflow |

For definitions of AI model names, see [FREE_MODELS.md](./FREE_MODELS.md). For definitions of directory names and their purposes, see [REPOSITORY_STRUCTURE.md](./REPOSITORY_STRUCTURE.md). For definitions of engineering role names, see [ENGINEERING_ROLES.md](./ENGINEERING_ROLES.md).
