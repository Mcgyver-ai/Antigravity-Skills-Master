---
name: Code Review and Quality Improvement
description: Performs high-quality, non-destructive code review and applies safe improvements prioritizing maintainability and correctness over stylistic noise.
---
# Code Review and Quality Improvement

**Purpose**: Inspects existing code to identify, prioritize, and safely resolve meaningful quality issues without causing unnecessary structural rewrites or cosmetic noise.

## When to use this skill

- When reviewing a Pull Request (PR), a recent diff, or changed files.
- When asked to "clean up", "refactor", or "review" a specific file or component.
- When searching for potential bugs, dead code, logic flaws, or security issues in newly written code.

## When NOT to use this skill

- When requested to do a major architectural rewrite or framework migration.
- When the user specifically asks for new feature implementation rather than review.
- When making purely stylistic changes that should be governed by an automated linter or formatter.

## Required Inputs / Context

- The absolute paths of the target file(s), the diff, or the specific component to be reviewed.
- An understanding of the original intent of the code.

## Optional Inputs

- Specific focus areas from the user (e.g., "focus on performance" or "check for memory leaks").
- Associated test files or CI/CD reports.

## Review Priorities (High to Low)

1. **Correctness & Safety**: Bugs, unhandled edge-cases, missing null checks, swallowed exceptions, resource leaks.
2. **Maintainability**: Excessive complexity (high cyclomatic complexity), tight coupling, poor separation of concerns, heavily duplicated logic.
3. **Clarity & Readability**: Misleading variable naming, dead or deeply commented-out code, missing documentation for opaque logic.
4. **Style (Avoid)**: formatting rules, bracket placement, quote types. Do not report these unless they severely impede readability.

## Execution Steps

1. **Inspect and Gather Context**: Read the target code and intimately understand related dependencies. DO NOT make blind judgments based on isolated snippets if the context is missing.
2. **Analyze**: Trace the execution path. Look for missing data validation and weak error handling.
3. **Prioritize Findings**: Filter out cosmetic issues. Focus strictly on problems that impact the end-user or the future maintainer.
4. **Propose Improvements**: Formulate clear, concise suggestions. You must explicitly explain *why* the suggestion matters.
5. **Apply Safe Edits**: If tasked with applying the fixes, create small, safe, reversible diffs rather than monolithic rewrites.
6. **Consider Test Impact**: Ensure existing tests do not break, or suggest adding missing coverage for the new logic.

## Constraints & Safety Rules

- **Do not invent**: Never fabricate APIs, abstractions, or conventions that do not natively exist in the repo.
- **Do not rewrite broadly**: Reject the urge to perform massive refactors when a targeted cleanup constitutes a better solution.
- **Preserve architecture**: Maintain existing structural decisions unless a rewrite is explicitly authorized.
- **Explicit uncertainty**: If you lack repository context to confidently review a piece of code, loudly flag your uncertainty to the user rather than guessing.

## Output Expectations

Output must be structured, actionable, and beginner-friendly. Group feedback by priority tier. Provide concrete code snippets (Before/After) and reference specific line numbers or functions when highlighting issues.

## Validation / Self-Check

- Before finalizing the review, confirm:
- Did I focus on correctness over cosmetic formatting?
- Are my suggested edits non-destructive and highly targeted?
- Did I clearly explain the *why* alongside the *what*?
