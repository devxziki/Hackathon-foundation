#!/usr/bin/env bash
# start-session.sh — Print a ready-to-paste context block for any AI tool
# Usage: bash scripts/start-session.sh
# Output: Prints context block to stdout AND writes to .session-context.txt

set -o pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT" || exit 1

LAST_ACTION="company/workspace/state/last-action.md"
CURRENT_TASK="company/workspace/state/current-task.md"
PROGRESS="company/workspace/state/progress-snapshot.md"

SEPARATOR="=== SESSION CONTEXT — paste into any AI tool ==="
END="=== END CONTEXT — your next action is above ==="

{
    echo "$SEPARATOR"
    echo ""

    # Extract phase/progress line from progress-snapshot
    if [ -f "$PROGRESS" ]; then
        PHASE_LINE=$(grep -E 'Phase|Status' "$PROGRESS" | head -3 | tr -s ' ')
        echo "Project phase: $PHASE_LINE"
        echo ""
    fi

    # Print last-action.md
    if [ -f "$LAST_ACTION" ]; then
        echo "## LAST ACTION"
        cat "$LAST_ACTION"
        echo ""
    else
        echo "## LAST ACTION"
        echo "WARNING: $LAST_ACTION not found — no resume checkpoint available."
        echo ""
    fi

    # Print current-task.md
    if [ -f "$CURRENT_TASK" ]; then
        echo "## CURRENT TASK"
        cat "$CURRENT_TASK"
        echo ""
    else
        echo "## CURRENT TASK"
        echo "WARNING: $CURRENT_TASK not found — no active task defined."
        echo ""
    fi

    echo "$END"
} | tee .session-context.txt

echo ""
echo "Context saved to .session-context.txt — paste it into your AI tool"
