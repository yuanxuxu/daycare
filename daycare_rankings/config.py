"""
Configuration management for the daycare rankings project.

Centralizes all configuration values and environment-specific settings.
"""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class ServerConfig:
    """Configuration for the web server."""
    host: str = "127.0.0.1"
    port: int = 8080
    auto_open_browser: bool = True


@dataclass(frozen=True)
class PathConfig:
    """Path configuration for the project."""
    project_root: Path = Path(__file__).parent.parent
    web_dir: Path = project_root / "web"
    data_dir: Path = project_root / "data"
    output_dir: Path = project_root / "output"


@dataclass(frozen=True)
class AppConfig:
    """Main application configuration."""
    app_name: str = "Richmond BC Daycare Rankings"
    version: str = "1.0.0"
    generated_year: int = 2025
    max_daycares: int = 10
    
    # Subsidy information
    ccfri_max_infant: int = 900  # dollars per month
    ccfri_max_preschool: int = 545  # dollars per month
    accb_max: int = 1250  # dollars per month
    ten_dollar_day_cost: int = 200  # dollars per month


# Default configurations
SERVER_CONFIG = ServerConfig()
PATH_CONFIG = PathConfig()
APP_CONFIG = AppConfig()


def get_server_config() -> ServerConfig:
    """
    Get server configuration, with environment variable overrides.
    
    Environment variables:
        DAYCARE_HOST: Server host address
        DAYCARE_PORT: Server port number
        
    Returns:
        ServerConfig with any environment overrides applied
    """
    host = os.environ.get("DAYCARE_HOST", SERVER_CONFIG.host)
    port = int(os.environ.get("DAYCARE_PORT", SERVER_CONFIG.port))
    
    return ServerConfig(host=host, port=port)
