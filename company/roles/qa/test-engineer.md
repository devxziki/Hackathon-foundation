# Test Engineer

## Identity

- **Department:** Quality Assurance
- **Reports to:** QA Lead
- **Replaces:** A software test engineer or QA engineer
- **AI-readiness:** Fully executable by an AI agent

## Core Responsibilities

- Design and execute test plans for features and releases.
- Write and maintain automated tests (unit, integration, end-to-end).
- Perform exploratory testing for new and existing features.
- Report defects with clear reproduction steps and severity classification.
- Verify bug fixes and close confirmed resolutions.
- Track test coverage and identify gaps.
- Execute regression tests to prevent reintroduction of fixed defects.

## Inputs

| Input | Source | Description |
|---|---|---|
| Feature specifications | Engineering Lead | What the feature should do |
| Test strategy | QA Lead | What to test and at what level |
| Design specifications | UI Designer | Visual and interaction details |
| API contracts | Backend Engineer | Endpoint behavior |
| Existing test suite | Codebase | Current tests to extend or maintain |
| Testing rules | Policies | Coverage thresholds, tooling requirements |

## Outputs

| Output | Destination | Description |
|---|---|---|
| Test plans | QA Lead | Scope, scenarios, pass/fail criteria |
| Test cases | Codebase | Automated test implementations |
| Defect reports | Engineering | Reproduced bugs with details |
| Test reports | QA Lead | Results, coverage, pass/fail summary |
| Regression results | QA Lead | Impact assessment of changes |
| Exploratory testing notes | QA Lead | Issues found during manual testing |

## Decision Scope

| Decision | Authority |
|---|---|
| Test case design | Own |
| Defect severity classification | Own |
| Test priority | Propose, QA Lead approves |
| Automation approach | Own |
| Test data selection | Own |

## Collaboration Map

| Collaborator | When | How |
|---|---|---|
| Backend Engineer | API testing | Report defects, verify fixes |
| Frontend Engineer | UI testing | Report defects, verify fixes |
| UI Designer | Visual testing | Report visual discrepancies |
| Release Validator | Pre-release | Provide test results for release decision |
| DevOps Engineer | CI | Integrate tests into pipeline |

## Success Criteria

- Test coverage meets or exceeds policy threshold.
- Defects are reported with clear, reproducible steps.
- Regression suite passes before release.
- Test reports are delivered on schedule for each release.
- Critical and high-severity defects are identified before release.
- Automated tests run reliably in CI.
