#!/usr/bin/env bash
# end-session.sh — Enforce clean session ending before switching tools
# Usage: bash scripts/end-session.sh
# Exits with code 0 if clean, code 1 if issues found.

set -o pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT" || exit 1

LAST_ACTION="company/workspace/state/last-action.md"

ERRORS=0

echo "=== End Session Check ==="
echo ""

# Step 1: Check if last-action.md was modified recently (within 2 hours)
if [ -f "$LAST_ACTION" ]; then
    LAST_MOD=$(stat -c %Y "$LAST_ACTION" 2>/dev/null || stat -f %m "$LAST_ACTION" 2>/dev/null)
    NOW=$(date +%s)
    DIFF=$((NOW - LAST_MOD))
    # 2 hours = 7200 seconds
    if [ "$DIFF" -gt 7200 ]; then
        echo "⚠  WARNING: $LAST_ACTION was last modified more than 2 hours ago."
        echo "   Update it with your last action and next expected action before switching tools."
        ERRORS=$((ERRORS + 1))
    else
        echo "✓  $LAST_ACTION updated recently (${DIFF}s ago)"
    fi
else
    echo "⚠  WARNING: $LAST_ACTION not found. Create it before ending session."
    ERRORS=$((ERRORS + 1))
fi

# Step 2: Check for uncommitted changes
if ! git diff --quiet HEAD 2>/dev/null; then
    echo "⚠  WARNING: Uncommitted changes found — commit before switching tools."
    echo ""
    git status --short
    ERRORS=$((ERRORS + 1))
else
    echo "✓  No uncommitted changes — working tree is clean"
fi

# Step 3: Clean up .session-context.txt if it exists
if [ -f ".session-context.txt" ]; then
    rm .session-context.txt
    echo "✓  Cleaned up .session-context.txt"
fi

echo ""

# Step 4: Print handoff summary
if [ "$ERRORS" -eq 0 ]; then
    echo "✓  Session clean. Ready to switch tools."

    # Extract last action line
    if [ -f "$LAST_ACTION" ]; then
        LAST_ACTION_LINE=$(grep -A1 '\*\*Action:\*\*' "$LAST_ACTION" | head -1 | sed 's/^- \*\*Action:\*\* //')
        NEXT_ACTION_LINE=$(grep -A2 '\*\*Next expected action' "$LAST_ACTION" | grep -v 'Next expected' | grep '\*\*Action:\*\*' | sed 's/^- \*\*Action:\*\* //')

        if [ -n "$LAST_ACTION_LINE" ]; then
            echo "   Last action: $LAST_ACTION_LINE"
        fi
        if [ -n "$NEXT_ACTION_LINE" ]; then
            echo "   Next action: $NEXT_ACTION_LINE"
        fi
    fi

    LAST_COMMIT=$(git log --oneline -1 2>/dev/null)
    if [ -n "$LAST_COMMIT" ]; then
        echo "   Commit: $LAST_COMMIT"
    fi

    echo ""
    echo "--- Handoff Instructions ---"
    echo "Run: cp company/assets/templates/context-export.md .context-export.md"
    echo "Then fill it in for your next tool."
else
    echo "⚠  $ERRORS issue(s) must be resolved before switching tools."
fi

echo ""
exit $ERRORS
