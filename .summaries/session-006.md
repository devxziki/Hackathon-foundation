# Session 006 — Fix foundation-ai runtime bugs

## Summary

Fixed 6 critical bugs in `foundation-ai` CLI package that caused "template missing" errors at runtime after npm publish.

## Bugs fixed

1. **Template path resolution** (`cli/src/utils/scaffold.js`): `import.meta.url` was passed directly to `path.resolve()` which expects a file path, not a URL. Replaced with `fileURLToPath(import.meta.url)` + `dirname()` + `../../templates` relative path. Added startup `existsSync` guard.

2. **Skip/created/missing logic**: Template-missing files were incorrectly reported as "Skipped (already exist)". Now 3 distinct states: `created[]`, `skipped[]` (already exists), `missingTemplates[]` (template not found). Warning printed at end if any templates missing.

3. **State template placeholders**: Updated `templates/state/last-action.md`, `current-task.md`, `progress-snapshot.md` and `templates/rules/AGENTS.md.tpl`, `cursorrules.tpl`, `copilot-instructions.md.tpl` with full `{{VARIABLE}}` placeholders.

4. **Variable default values**: Added proper fallbacks (`|| 'unknown'`, `|| 'no git history'`, `|| 'none detected'`) instead of potentially undefined values.

5. **Executable chmod**: Switched `chmodSync` from dynamic `await import('node:fs')` to static top-level import.

6. **Empty/no-git projects**: Ensured scaffold works correctly when `dirs` is empty or `gitContext` has no git.

## Files changed

- `cli/src/utils/scaffold.js` — Major rewrite of path resolution, variable map, skip/missing logic
- `cli/src/utils/printer.js` — Added `missingTemplates` parameter to `printSuccess`
- `cli/src/commands/init.js` — Pass `result.missingTemplates` to `printSuccess`
- `cli/templates/state/last-action.md` — Full rewrite with {{VARIABLE}} placeholders
- `cli/templates/state/current-task.md` — Full rewrite with {{VARIABLE}} placeholders
- `cli/templates/state/progress-snapshot.md` — Full rewrite with {{VARIABLE}} placeholders
- `cli/templates/rules/AGENTS.md.tpl` — Expanded with project/session details
- `cli/templates/rules/cursorrules.tpl` — Expanded with project context
- `cli/templates/rules/copilot-instructions.md.tpl` — Expanded with key dirs
- `cli/package.json` — `0.5.1` → `0.5.2`
- `company/workspace/state/last-action.md` — Updated with this session
- `.summaries/session-006.md` — Created

## Verification

- `find cli/templates -type f | sort` — All 13 template files present
- Path resolution test: `TEMPLATES_DIR` correctly resolves to `cli/templates/`
- Version bumped to `0.5.2`
