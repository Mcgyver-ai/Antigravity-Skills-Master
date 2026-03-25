"""Shared utilities for skill-creator scripts."""

import re
from pathlib import Path
from typing import Optional

import yaml


class SkillParseError(Exception):
    """Exception raised when SKILL.md parsing fails."""
    pass


def parse_skill_md(skill_path: Path) -> tuple[str, str, str]:
    """
    Parse a SKILL.md file and extract metadata.
    
    Args:
        skill_path: Path to the skill directory (containing SKILL.md)
        
    Returns:
        Tuple of (name, description, full_content)
        
    Raises:
        SkillParseError: If the SKILL.md file cannot be parsed
    """
    skill_md_path = skill_path / "SKILL.md"
    
    try:
        content = skill_md_path.read_text(encoding='utf-8')
    except OSError as e:
        raise SkillParseError(f"Failed to read SKILL.md: {e}") from e
    
    return _parse_skill_content(content)


def _parse_skill_content(content: str) -> tuple[str, str, str]:
    """
    Parse SKILL.md content string.
    
    Args:
        content: Raw content of SKILL.md file
        
    Returns:
        Tuple of (name, description, full_content)
    """
    stripped = content.strip()
    
    # Validate frontmatter exists
    if not stripped.startswith('---'):
        raise SkillParseError("SKILL.md missing frontmatter (no opening ---)")
    
    # Find closing ---
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        raise SkillParseError("SKILL.md missing frontmatter (no closing ---)")
    
    frontmatter_text = match.group(1)
    
    # Parse YAML frontmatter
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
    except yaml.YAMLError as e:
        raise SkillParseError(f"Invalid YAML in frontmatter: {e}") from e
    
    if not isinstance(frontmatter, dict):
        raise SkillParseError("Frontmatter must be a YAML dictionary")
    
    # Extract name and description
    name = _extract_field(frontmatter, 'name', required=True)
    description = _extract_field(frontmatter, 'description', required=True)
    
    return name, description, content


def _extract_field(frontmatter: dict, field_name: str, required: bool = False) -> str:
    """
    Extract and validate a string field from frontmatter.
    
    Args:
        frontmatter: Parsed YAML frontmatter dictionary
        field_name: Name of the field to extract
        required: Whether the field is required
        
    Returns:
        The field value as a string
        
    Raises:
        SkillParseError: If required field is missing or has wrong type
    """
    value = frontmatter.get(field_name)
    
    if value is None:
        if required:
            raise SkillParseError(f"Missing required field: '{field_name}'")
        return ""
    
    if not isinstance(value, str):
        raise SkillParseError(
            f"Field '{field_name}' must be a string, got {type(value).__name__}"
        )
    
    return value.strip()


def get_skill_metadata(skill_path: Path) -> Optional[dict]:
    """
    Get complete metadata from a skill's SKILL.md.
    
    Args:
        skill_path: Path to the skill directory
        
    Returns:
        Dictionary of metadata, or None if parsing fails
    """
    try:
        name, description, content = parse_skill_md(skill_path)
        return {
            'name': name,
            'description': description,
            'content': content
        }
    except SkillParseError:
        return None
