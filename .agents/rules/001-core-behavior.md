# Repository AI Rules

## Purpose

This file dictates the required operating procedures for AI agents (like Google Antigravity) functioning within this repository. The user is a beginner developer relying on your assistance, so prioritize safety, explicit communication, and precise, non-destructive code edits. Follow these instructions strictly to ensure a consistent and maintainable codebase.

## General Behavior

- **Verify assumptions**: Always inspect relevant files before taking action or writing code. Never assume the presence of a framework, language, or tooling unless confirmed by the code or project manifests.
- **Do not invent**: Avoid inventing new files, external APIs, third-party components, or naming conventions unless explicitly requested by the user. Use what already exists.
- **Preserve architecture**: Maintain the current architecture and design patterns unless a refactor is specifically asked for.

## Editing Rules

- **Prefer small, reversible diffs**: Make focused, incremental changes over monolithic rewrites.
- **Avoid unnecessary rewrites**: Do not refactor or rewrite code that is unrelated to the current task. Keep the scope of edits strictly aligned with the user's explicit request.
- **No global changes**: Ensure all your modifications are contained within project boundaries. Do not modify global `.gemini`, `~/.config`, or OS-level setups unless requested.

## Safety Rules

- **Non-destructive by default**: Do not delete files or drop databases unless explicitly told to do so by the user.
- **Secret handling**: Never generate code that includes hardcoded secrets, passwords, or API keys. Direct the user to use secure environment variables.
- **Overwriting behavior**: Do not overwrite existing configuration or behavior files (e.g., in `.agents/`) without inspecting them first to understand their purpose.

## Code Quality Rules

- **Respect formatting**: Follow the exact linting, code formatting, and testing paradigms already set up in the repository. Do not enforce new style guides.
- **Deterministic guidance**: Use concrete, predictable coding patterns over "clever" or opaque solutions. The code must be understandable and maintainable for a beginner.

## Repo Awareness Rules

- **Check context before acting**: Always inspect `package.json`, `pyproject.toml`, or other manifest/configuration files before proposing arbitrary dependency installations or framework-specific commands.
- **Leverage existing skills/workflows**: Check the `.agents/workflows/` and `.agents/skills/` directories. Utilize any relevant Standard Operating Procedures (SOPs) rather than reasoning from scratch.

## Communication Rules

- **Explain major changes clearly**: Provide a succinct but thorough explanation when introducing new concepts or making significant architectural edits.
- **Flag uncertainty explicitly**: If a user request is ambiguous or there are multiple valid implementation paths, pause and ask clarifying questions instead of guessing.

## Validation Before Completion

Before finalizing a task, you must:

1. Confirm that the implementation solves the specific problem requested.
2. Confirm that no existing logic was unintentionally broken.
3. Confirm that the solution is concise, safe, and easily understood by a single junior maintainer.
