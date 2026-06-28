#!/usr/bin/env bash
# validate.sh — Structural consistency checker for Hackathon Foundation
# Verifies that the repository structure matches the expected layout.
# Exits with code 0 if all checks pass, code 1 if any fail.

set -o pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT" || exit 1

PASS=0
FAIL=0
WARN=0
ERRORS=""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

check_dir() {
    local dir="$1"
    if [ -d "$dir" ]; then
        echo -e "  ${GREEN}✓${NC} $dir exists"
        PASS=$((PASS + 1))
    else
        echo -e "  ${RED}✗${NC} $dir missing"
        ERRORS="$ERRORS\n  Missing directory: $dir"
        FAIL=$((FAIL + 1))
    fi
}

check_file_not_empty() {
    local file="$1"
    if [ -f "$file" ]; then
        # Count lines with substantive content (exclude blank lines and pure heading lines)
        local content_lines
        content_lines=$(grep -cvE '^$|^#+$|^#+ +$' "$file" 2>/dev/null || true)
        if [ "$content_lines" -gt 3 ]; then
            echo -e "  ${GREEN}✓${NC} $file has content"
            PASS=$((PASS + 1))
        else
            echo -e "  ${YELLOW}⚠${NC} $file appears empty (mostly headings)"
            ERRORS="$ERRORS\n  Warning: $file appears empty (mostly headings)"
            FAIL=$((FAIL + 1))
        fi
    else
        echo -e "  ${RED}✗${NC} $file missing"
        ERRORS="$ERRORS\n  Missing file: $file"
        FAIL=$((FAIL + 1))
    fi
}

check_stub_dir() {
    local dir="$1"
    local name="$2"
    if [ -d "$dir" ]; then
        local file_count
        file_count=$(find "$dir" -maxdepth 1 -type f 2>/dev/null | wc -l)
        if [ "$file_count" -le 1 ]; then
            echo -e "  ${YELLOW}⚠${NC} $name ($dir) has only $file_count file(s) — stub (expected)"
            WARN=$((WARN + 1))
        else
            echo -e "  ${GREEN}✓${NC} $name ($dir) has $file_count files"
            PASS=$((PASS + 1))
        fi
    fi
}

echo "=== Hackathon Foundation — Structure Validation ==="
echo ""

# Check 1: All directories listed in foundation.yaml exist
echo "[Check 1] Required directories"
check_dir "company"
check_dir "company/handbook"
check_dir "company/departments"
check_dir "company/roles"
check_dir "company/policies"
check_dir "company/assets"
check_dir "company/assets/templates"
check_dir "company/assets/workflows"
check_dir "company/onboarding"
check_dir "company/workspace"
check_dir "company/workspace/handoff"
check_dir "company/workspace/skills"
check_dir "company/workspace/state"
check_dir "resources"
check_dir "resources/ai"
check_dir "resources/integrations"
check_dir "resources/examples"
check_dir "resources/community"
check_dir "docs"
check_dir "scripts"
check_dir ".memory"
check_dir ".summaries"
echo ""

# Check 2: State files have content beyond headings
echo "[Check 2] State file content"
check_file_not_empty "company/workspace/state/current-task.md"
check_file_not_empty "company/workspace/state/last-action.md"
check_file_not_empty "company/workspace/state/progress-snapshot.md"
check_file_not_empty "company/workspace/state/task-history.md"
echo ""

# Check 3: Memory and summary files have content
echo "[Check 3] Memory and summary file content"
check_file_not_empty ".memory/README.md"
check_file_not_empty ".memory/decisions.md"
check_file_not_empty ".summaries/README.md"
check_file_not_empty ".summaries/session-001.md"
echo ""

# Check 4: Template files exist
echo "[Check 4] Asset templates"
check_file_not_empty "company/assets/templates/context-export.md"
check_file_not_empty "company/assets/templates/task-assignment.md"
check_file_not_empty "company/assets/templates/pr-checklist.md"
check_file_not_empty "company/assets/templates/role-onboarding.md"
check_file_not_empty "company/assets/workflows/new-task-workflow.md"
echo ""

# Check 5: Integration guides
echo "[Check 5] Integration guides"
check_file_not_empty "resources/integrations/opencode.md"
echo ""

# Check 6: Onboarding guides
echo "[Check 6] Onboarding"
check_file_not_empty "company/onboarding/quick-start.md"
echo ""

# Check 7: Stub directories (directories with only a README)
echo "[Check 7] Stub directory check"
check_stub_dir "company/assets" "Assets directory (pre-population)"
check_stub_dir "resources/ai" "AI catalog"
check_stub_dir "resources/examples" "Examples"
check_stub_dir "resources/community" "Community resources"
echo ""

# Check 8: Scripts directory
echo "[Check 8] Validation script"
if [ -f "scripts/validate.sh" ]; then
    if [ -x "scripts/validate.sh" ]; then
        echo -e "  ${GREEN}✓${NC} scripts/validate.sh exists and is executable"
        PASS=$((PASS + 1))
    else
        echo -e "  ${YELLOW}⚠${NC} scripts/validate.sh exists but is not executable"
        chmod +x "scripts/validate.sh"
        echo -e "  ${GREEN}✓${NC} Fixed: made scripts/validate.sh executable"
        FAIL=$((FAIL + 1))
    fi
else
    echo -e "  ${RED}✗${NC} scripts/validate.sh missing"
    ERRORS="$ERRORS\n  Missing file: scripts/validate.sh"
    FAIL=$((FAIL + 1))
fi
echo ""

# Summary
echo "=== Summary ==="
echo -e "  Passed: ${GREEN}$PASS${NC}"
echo -e "  Warnings: ${YELLOW}$WARN${NC}"
echo -e "  Failed: ${RED}$FAIL${NC}"
if [ -n "$ERRORS" ]; then
    echo -e "  Errors:$ERRORS"
fi
echo ""

if [ "$FAIL" -gt 0 ]; then
    echo -e "${RED}VALIDATION FAILED${NC} — $FAIL check(s) failed"
    exit 1
elif [ "$WARN" -gt 0 ]; then
    echo -e "${YELLOW}VALIDATION PASSED WITH WARNINGS${NC} — $WARN warning(s), 0 failures"
    exit 0
else
    echo -e "${GREEN}VALIDATION PASSED${NC} — All checks OK"
    exit 0
fi
