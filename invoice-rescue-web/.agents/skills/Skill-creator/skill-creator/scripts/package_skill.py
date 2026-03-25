#!/usr/bin/env python3
"""
Skill Packager - Creates a distributable .skill file from a skill folder.

Usage:
    python package_skill.py <path/to/skill-folder> [output-directory]

Example:
    python package_skill.py skills/public/my-skill
    python package_skill.py skills/public/my-skill ./dist
"""

import fnmatch
import logging
import sys
import zipfile
from pathlib import Path
from typing import Optional

from quick_validate import validate_skill


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)


# Constants for packaging configuration
class PackageConstants:
    """Configuration for skill packaging."""
    
    # Directories to exclude entirely from packaging
    EXCLUDE_DIRS: set[str] = {"__pycache__", "node_modules", ".git"}
    
    # File patterns to exclude using glob matching
    EXCLUDE_GLOBS: set[str] = {"*.pyc", "*.pyo", "*.swp", "*.bak"}
    
    # Specific files to exclude
    EXCLUDE_FILES: set[str] = {".DS_Store", "Thumbs.db", ".gitignore"}
    
    # Directories excluded only at the skill root level (not nested)
    ROOT_EXCLUDE_DIRS: set[str] = {"evals", ".venv", "venv"}
    
    # Output file extension
    OUTPUT_EXTENSION: str = ".skill"


def should_exclude(rel_path: Path) -> bool:
    """
    Determine if a path should be excluded from the package.
    
    Args:
        rel_path: Path relative to the skill directory
        
    Returns:
        True if the path should be excluded, False otherwise
    """
    parts = rel_path.parts
    
    # Check if any part of the path is in excluded directories
    if any(part in PackageConstants.EXCLUDE_DIRS for part in parts):
        return True
    
    # Check root-level exclusions (parts[1] is first subdirectory after skill name)
    if len(parts) > 1 and parts[1] in PackageConstants.ROOT_EXCLUDE_DIRS:
        return True
    
    # Check specific file exclusions
    if rel_path.name in PackageConstants.EXCLUDE_FILES:
        return True
    
    # Check glob pattern matching
    return any(fnmatch.fnmatch(rel_path.name, pattern) 
               for pattern in PackageConstants.EXCLUDE_GLOBS)


def _validate_skill_directory(skill_path: Path) -> tuple[bool, Optional[str]]:
    """
    Validate that the skill directory exists and contains required files.
    
    Args:
        skill_path: Path to the skill folder
        
    Returns:
        Tuple of (is_valid, error_message)
    """
    if not skill_path.exists():
        return False, f"Skill folder not found: {skill_path}"
    
    if not skill_path.is_dir():
        return False, f"Path is not a directory: {skill_path}"
    
    skill_md = skill_path / "SKILL.md"
    if not skill_md.exists():
        return False, f"SKILL.md not found in {skill_path}"
    
    return True, None


def _run_validation(skill_path: Path) -> tuple[bool, Optional[str]]:
    """
    Run validation on the skill directory.
    
    Args:
        skill_path: Path to the skill folder
        
    Returns:
        Tuple of (is_valid, message)
    """
    logger.info("Validating skill...")
    result = validate_skill(skill_path)
    
    if not result.is_valid:
        logger.error(f"Validation failed: {result.message}")
        return False, result.message
    
    logger.info(f"Validation passed: {result.message}")
    return True, result.message


def _determine_output_path(skill_name: str, output_dir: Optional[str]) -> Path:
    """
    Determine the output path for the .skill file.
    
    Args:
        skill_name: Name of the skill (used for filename)
        output_dir: Optional output directory path
        
    Returns:
        Path where the .skill file should be created
    """
    if output_dir:
        output_path = Path(output_dir).resolve()
        output_path.mkdir(parents=True, exist_ok=True)
    else:
        output_path = Path.cwd()
    
    return output_path / f"{skill_name}{PackageConstants.OUTPUT_EXTENSION}"


def _create_package(skill_path: Path, output_filename: Path) -> tuple[bool, Optional[str]]:
    """
    Create the .skill package (ZIP file).
    
    Args:
        skill_path: Path to the source skill directory
        output_filename: Path for the output .skill file
        
    Returns:
        Tuple of (success, error_message)
    """
    files_added = []
    files_skipped = []
    
    try:
        with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Walk through all files in the skill directory
            for file_path in skill_path.rglob('*'):
                if not file_path.is_file():
                    continue
                    
                # Calculate relative path for archive
                arcname = file_path.relative_to(skill_path.parent)
                
                # Check if should be excluded
                if should_exclude(arcname):
                    files_skipped.append(str(arcname))
                    logger.debug(f"Skipped: {arcname}")
                    continue
                
                # Add to archive
                zipf.write(file_path, arcname)
                files_added.append(str(arcname))
                logger.debug(f"Added: {arcname}")
        
        # Log summary
        logger.info(f"Packaged {len(files_added)} files")
        if files_skipped:
            logger.info(f"Skipped {len(files_skipped)} files")
        
        return True, None
        
    except OSError as e:
        return False, f"Failed to create package: {e}"
    except zipfile.BadZipFile as e:
        return False, f"Invalid zip file: {e}"


def package_skill(skill_path: str | Path, output_dir: Optional[str] = None) -> Optional[Path]:
    """
    Package a skill folder into a .skill file.
    
    Args:
        skill_path: Path to the skill folder
        output_dir: Optional output directory for the .skill file
        
    Returns:
        Path to the created .skill file, or None if error
    """
    skill_path = Path(skill_path).resolve()
    
    # Validate directory structure
    is_valid, error_msg = _validate_skill_directory(skill_path)
    if not is_valid:
        logger.error(f"Error: {error_msg}")
        return None
    
    # Run validation
    is_valid, _ = _run_validation(skill_path)
    if not is_valid:
        logger.error("Please fix validation errors before packaging")
        return None
    
    # Determine output location
    skill_name = skill_path.name
    output_filename = _determine_output_path(skill_name, output_dir)
    
    logger.info(f"Packaging skill: {skill_name}")
    if output_dir:
        logger.info(f"Output directory: {output_dir}")
    
    # Create the package
    success, error_msg = _create_package(skill_path, output_filename)
    
    if success:
        logger.info(f"Successfully packaged to: {output_filename}")
        return output_filename
    else:
        logger.error(f"Error creating .skill file: {error_msg}")
        return None


def main() -> None:
    """CLI entry point."""
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <path/to/skill-folder> [output-directory]")
        print("\nExamples:")
        print(f"  {sys.argv[0]} skills/public/my-skill")
        print(f"  {sys.argv[0]} skills/public/my-skill ./dist")
        sys.exit(1)
    
    skill_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    
    result = package_skill(skill_path, output_dir)
    
    sys.exit(0 if result is not None else 1)


if __name__ == "__main__":
    main()
