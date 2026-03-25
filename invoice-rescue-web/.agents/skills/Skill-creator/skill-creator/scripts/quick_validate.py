#!/usr/bin/env python3
"""
Quick validation script for skills - minimal version.

Validates SKILL.md files against the skill schema requirements including:
- Frontmatter format (YAML)
- Required fields (name, description)
- Naming conventions (kebab-case)
- Field length limits
"""

import re
import sys
from pathlib import Path
from typing import NamedTuple, Optional

import yaml


# Constants for validation rules
class ValidationConstants:
    """Validation thresholds and patterns."""
    
    MAX_NAME_LENGTH: int = 64
    MAX_DESCRIPTION_LENGTH: int = 1024
    MAX_COMPATIBILITY_LENGTH: int = 500
    
    NAME_PATTERN: re.Pattern = re.compile(r'^[a-z0-9-]+$')
    FORBIDDEN_CHARS: set[str] = {'<', '>'}


class AllowedProperties:
    """Allowed frontmatter properties in SKILL.md files."""
    
    REQUIRED: set[str] = {'name', 'description'}
    ALLOWED: set[str] = {'name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility'}


class ValidationResult(NamedTuple):
    """Result of skill validation."""
    is_valid: bool
    message: str


def _validate_frontmatter_structure(content: str) -> tuple[bool, Optional[str], Optional[dict]]:
    """
    Validate frontmatter structure and parse YAML.
    
    Returns:
        Tuple of (success, error_message, parsed_frontmatter)
    """
    stripped = content.strip()
    if not stripped.startswith('---'):
        return False, "No YAML frontmatter found (must start with ---)", None
    
    # Extract frontmatter using regex for robustness
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return False, "Invalid frontmatter format (missing closing ---)", None
    
    frontmatter_text = match.group(1)
    
    # Parse YAML safely
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
    except yaml.YAMLError as e:
        return False, f"Invalid YAML in frontmatter: {e}", None
    
    if not isinstance(frontmatter, dict):
        return False, "Frontmatter must be a YAML dictionary", None
    
    return True, None, frontmatter


def _validate_name(name: str) -> Optional[str]:
    """Validate the skill name field."""
    if not isinstance(name, str):
        return f"Name must be a string, got {type(name).__name__}"
    
    name = name.strip()
    if not name:
        return "Name cannot be empty"
    
    # Check naming convention (kebab-case: lowercase with hyphens)
    if not ValidationConstants.NAME_PATTERN.match(name):
        return f"Name '{name}' should be kebab-case (lowercase letters, digits, and hyphens only)"
    
    # Check for invalid hyphen patterns
    if name.startswith('-') or name.endswith('-') or '--' in name:
        return f"Name '{name}' cannot start/end with hyphen or contain consecutive hyphens"
    
    # Check length
    if len(name) > ValidationConstants.MAX_NAME_LENGTH:
        return f"Name is too long ({len(name)} chars). Maximum is {ValidationConstants.MAX_NAME_LENGTH} chars."
    
    return None


def _validate_description(description: str) -> Optional[str]:
    """Validate the description field."""
    if not isinstance(description, str):
        return f"Description must be a string, got {type(description).__name__}"
    
    description = description.strip()
    
    # Check for forbidden characters
    for char in ValidationConstants.FORBIDDEN_CHARS:
        if char in description:
            return f"Description cannot contain angle brackets ({char})"
    
    # Check length
    if len(description) > ValidationConstants.MAX_DESCRIPTION_LENGTH:
        return f"Description is too long ({len(description)} chars). Maximum is {ValidationConstants.MAX_DESCRIPTION_LENGTH} chars."
    
    return None


def _validate_optional_field(field_name: str, value: str, max_length: int) -> Optional[str]:
    """Validate an optional string field."""
    if not value:  # Allow empty optional fields
        return None
    
    if not isinstance(value, str):
        return f"{field_name} must be a string, got {type(value).__name__}"
    
    if len(value) > max_length:
        return f"{field_name} is too long ({len(value)} chars). Maximum is {max_length} chars."
    
    return None


def validate_skill(skill_path: str | Path) -> ValidationResult:
    """
    Validate a skill directory and its SKILL.md file.
    
    Args:
        skill_path: Path to the skill directory
        
    Returns:
        ValidationResult with is_valid status and message
    """
    skill_path = Path(skill_path)
    
    # Check SKILL.md exists
    skill_md = skill_path / 'SKILL.md'
    if not skill_md.exists():
        return ValidationResult(False, f"SKILL.md not found at {skill_md}")
    
    # Read and validate frontmatter
    try:
        content = skill_md.read_text(encoding='utf-8')
    except OSError as e:
        return ValidationResult(False, f"Failed to read SKILL.md: {e}")
    
    # Validate frontmatter structure
    success, error_msg, frontmatter = _validate_frontmatter_structure(content)
    if not success:
        return ValidationResult(False, error_msg)
    
    # Check for unexpected properties
    unexpected_keys = set(frontmatter.keys()) - AllowedProperties.ALLOWED
    if unexpected_keys:
        return ValidationResult(False, 
            f"Unexpected key(s): {', '.join(sorted(unexpected_keys))}. "
            f"Allowed: {', '.join(sorted(AllowedProperties.ALLOWED))}")
    
    # Check required fields
    for field in AllowedProperties.REQUIRED:
        if field not in frontmatter:
            return ValidationResult(False, f"Missing required field: '{field}'")
    
    # Validate name
    name = frontmatter.get('name', '')
    name_error = _validate_name(name)
    if name_error:
        return ValidationResult(False, name_error)
    
    # Validate description
    description = frontmatter.get('description', '')
    desc_error = _validate_description(description)
    if desc_error:
        return ValidationResult(False, desc_error)
    
    # Validate optional compatibility field
    compatibility = frontmatter.get('compatibility', '')
    comp_error = _validate_optional_field('Compatibility', compatibility, ValidationConstants.MAX_COMPATIBILITY_LENGTH)
    if comp_error:
        return ValidationResult(False, comp_error)
    
    return ValidationResult(True, "Skill is valid!")


def main() -> None:
    """CLI entry point."""
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <skill_directory>")
        sys.exit(1)
    
    valid, message = validate_skill(sys.argv[1])
    print(message)
    sys.exit(0 if valid else 1)


if __name__ == "__main__":
    main()