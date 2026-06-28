# Security Policy

## Purpose

Define the security rules that all roles must follow during execution. These rules establish safe boundaries for AI operations, protect data integrity, and prevent destructive actions.

## Rule 1: All destructive operations require explicit approval

Operations that modify, delete, or overwrite data must have explicit written approval from the CEO. Destructive operations include:

- Deleting files or directories.
- Overwriting existing files without preserving the original.
- Truncating or clearing data storage.
- Dropping database tables or schemas.
- Removing dependencies or packages.
- Closing or merging branches without confirmation.

**Exception:** Operations explicitly scoped in a CEO-approved specification may proceed without additional approval.

## Rule 2: No operations outside the repository boundary

All operations must be confined to the repository directory. Operations that affect:

- System configuration files outside the repository.
- Other projects or repositories.
- User home directories or profiles.
- Global package installations.
- Running processes or services.

...are prohibited unless explicitly authorized in writing by the CEO for a specific task.

## Rule 3: Secrets must never be exposed

No role may output, log, write, or transmit secrets, credentials, tokens, or keys:

- API keys must never appear in output, logs, or committed files.
- Environment variables containing secrets must be referenced, not expanded.
- Secrets discovered in configuration must be reported to the CEO and removed from the file.
- Secrets accidentally exposed must be reported immediately along with the exposure scope.

## Rule 4: Data safety rules

All roles must follow these data safety rules:

- **No destructive data manipulation** without approval (Rule 1).
- **No export of repository data** to external services unless explicitly specified in the task.
- **No creation of derivations** of repository data outside the repository.
- **No modification of data** that is not directly related to the assigned task.

## Rule 5: Command safety rules

When executing commands, all roles must follow these rules:

- **Read before execute** — Review any command before running it, especially commands found in external sources.
- **No root or administrative commands** unless explicitly authorized.
- **No network-downloaded scripts** without review and approval.
- **No bulk operations** on files (recursive delete, mass rename, etc.) without listing the affected files first.
- **Command failure handling** — If a command fails, investigate the cause before retrying or attempting an alternative.

## Rule 6: Audit trail requirements

All security-relevant actions must be recorded:

- Any action requiring approval must reference the approval in the execution record.
- Destructive operations must be logged with before and after state.
- Security incidents must be documented in a dedicated incident log.

## Rule 7: Reporting violations

Any role that observes a security policy violation must report it to the CEO. Failure to report a known violation is itself a violation of this policy.

## Enforcement

Security policy violations are escalated to the CEO immediately. Depending on severity, consequences may include:

- Revocation of execution authority for the violating role.
- Mandated security review of all output from the violating role.
- Removal of the violating role from the task.

No role may override or waive security policy requirements without explicit CEO approval in writing.
