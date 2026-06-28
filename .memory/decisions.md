# Decision Log

## 2026-06-28: Rename company/resources/ to company/assets/

**Decision:** Renamed `company/resources/` to `company/assets/` to eliminate semantic ambiguity with the top-level `resources/` directory.

**Rationale:** The top-level `resources/` directory contains public resource catalogs (AI models, integrations, examples, community). The `company/resources/` directory contained internal reusable capabilities (templates, skills, workflows). The name collision caused confusion about which directory to use for what purpose. The word "assets" better describes internal reusable company resources.

**Alternatives considered:**
- Keep both as `resources/` and document the distinction — rejected because documentation alone cannot eliminate confusion when the same name points to different concepts.
- Merge both into a single `resources/` — rejected because the separation between public catalogs and internal company assets is architecturally important.

**Made by:** CEO

**Context:** Phase 2.1 architecture refinement. Updated 14 cross-reference files across `company/handbook/`, `company/departments/`, `docs/`, and root README.

---

## 2026-06-28: Department structure — 6 departments with 6 files each

**Decision:** Created 6 departments (engineering, design, documentation, quality-assurance, operations, research), each with 6 files (README, mission, responsibilities, collaboration, deliverables, roadmap).

**Rationale:** Consistent structure across departments makes the framework predictable and machine-readable. Six files per department covers the essential dimensions: identity, purpose, scope, relationships, outputs, and evolution.

**Alternatives considered:**
- Variable file counts per department — rejected because consistency aids discoverability.
- Fewer files per department — rejected because the 6 dimensions are all necessary for a complete department definition.

**Made by:** CEO

**Context:** Phase 4 department design. 36 files created across all departments.

---

## 2026-06-28: Workspace state system — 4 separate files instead of 1

**Decision:** Created 4 separate state files (`current-task.md`, `last-action.md`, `task-history.md`, `progress-snapshot.md`) instead of a single combined state document.

**Rationale:** Each file has a distinct purpose and update frequency. `last-action.md` changes every action. `progress-snapshot.md` changes per phase. A combined file would create merge conflicts and make it harder to read just the information needed. Separation also allows AI tools to read only the relevant file for the current context.

**Alternatives considered:**
- Single state document with sections — rejected due to update frequency mismatch.
- More granular files (per-role state, per-department state) — rejected as over-engineering for current scale.

**Made by:** CEO

**Context:** Phase 8 state + context continuity layer.

---

## 2026-06-28: No automation — structure-only design

**Decision:** The framework defines file structures and protocols but contains no executable automation (scripts, agents, watchers, daemons).

**Rationale:** Automation creates environment dependencies, installation requirements, and maintenance burden. The core promise of the framework is portability — any directory, any tool, any machine. Structured files achieve this while automation would compromise it. Users follow protocols manually, which works universally.

**Alternatives considered:**
- Shell scripts for common workflows — rejected because they would not work in IDE-only or chat-based workflows.
- Agent framework integration — rejected because it would create model-specific dependencies.

**Made by:** CEO

**Context:** Consistent design principle across all phases.

---

## 2026-06-28: Keep docs/ and company/handbook/ as complementary directories

**Decision:** Retained both `docs/` (27 public reference files) and `company/handbook/` (14 internal governance files) as separate directories with explicit cross-references in their respective READMEs.

**Rationale:** The two directories serve different audiences and purposes. `docs/` is public-facing — it explains the project to new users, contributors, and evaluators. `company/handbook/` is internal-facing — it governs AI assistant behavior with mission, culture, principles, and policies. Merging them would create a single document set that serves neither audience well. The cross-reference sections in both READMEs eliminate confusion about which to use.

**Alternatives considered:**
- Merge all into `company/handbook/` — rejected because the 27 `docs/` files are reference documentation (model catalogs, FAQ, roadmap) that is not governance-related and does not belong in a handbook.
- Remove `docs/` entirely — rejected because it contains valuable reference content (integration guides, model catalog) that is not replicated in the handbook.

**Made by:** CEO

**Context:** Structural gap fixes — `docs/README.md` and `company/handbook/README.md` now each link to the other with an explanation of their complementary roles.
