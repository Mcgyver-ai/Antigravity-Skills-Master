---
trigger: always_on
globs: Safe AI-Assisted Code Generation
---

# Safe AI-Assisted Code Generation

**Purpose**: Ensures all AI-generated code is robust, safe, and meets project standards.

## Rules

1. **No Destructive Operations**: Never generate code that deletes files, drops databases, or modifies existing system configuration without explicit user consent.
2. **Handle Edge Cases**: All generated functions must gracefully handle null, undefined, or unexpected inputs. Error handling must be explicit and informative.
3. **No Hardcoded Secrets**: Ensure AI-generated code never includes API keys, passwords, or any sensitive credentials. Always use environment variables or a configuration manager.
4. **Minimal Scope**: Keep code changes as isolated as possible to reduce side effects. Do not attempt large-scale refactoring unless specifically instructed.
5. **Self-Documenting Code**: Choose descriptive variable and function names. Add brief inline comments only for complex logic.
