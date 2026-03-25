---
description: How to review changes before committing
---

# Review Changes

Follow these steps to safely review your changes before committing to the repository:

1. **Check Status**: Run `git status` to see a list of modified, added, and deleted files.
Verify that only intended files are staged.
// turbo
2. **Review Diffs**: Run `git diff` to inspect line-by-line changes for unstaged files, and `git diff --staged` for staged files. Look for unintended modifications, debugging code, or secrets.

3. **Run Tests**: Execute the project's test suite to ensure no existing functionality is broken by the new changes.

4. **Lint and Format**: Run the project linter or formatter (e.g., `npm run lint`, `flake8`) to maintain consistent code style.

5. **Self-Review**: Do a final read-through of the changes from the perspective of a team member. Ensure the code is clear and adheres to the `.agents/rules/001-safe-ai-generation.md` rule.
