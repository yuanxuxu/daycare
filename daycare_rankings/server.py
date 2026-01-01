"""
Web server module for serving the daycare rankings UI.

Provides a simple HTTP server with proper configuration and logging.
"""

from __future__ import annotations

import http.server
import logging
import os
import socketserver
import webbrowser
from pathlib import Path
from typing import Optional

from daycare_rankings.config import get_server_config, PATH_CONFIG

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


class DaycareRequestHandler(http.server.SimpleHTTPRequestHandler):
    """
    Custom HTTP request handler with CORS and caching headers.
    
    Extends SimpleHTTPRequestHandler to add development-friendly headers
    and improved logging.
    """
    
    def __init__(self, *args, directory: Optional[str] = None, **kwargs):
        """Initialize with custom directory."""
        super().__init__(*args, directory=directory, **kwargs)
    
    def end_headers(self) -> None:
        """Add custom headers before ending response."""
        # CORS for local development
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        
        # Disable caching for development
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        
        super().end_headers()
    
    def log_message(self, format: str, *args) -> None:
        """Log HTTP requests using the logging module."""
        logger.debug("%s - %s", self.address_string(), format % args)


def create_handler(directory: Path):
    """
    Create a request handler class bound to a specific directory.
    
    Args:
        directory: The directory to serve files from
        
    Returns:
        A handler class configured for the directory
    """
    class Handler(DaycareRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(directory), **kwargs)
    
    return Handler


def run_server(
    host: Optional[str] = None,
    port: Optional[int] = None,
    web_dir: Optional[Path] = None,
    open_browser: bool = True,
) -> None:
    """
    Start the HTTP server.
    
    Args:
        host: Server host address (default from config)
        port: Server port (default from config)
        web_dir: Directory to serve (default: web/ in project)
        open_browser: Whether to open a browser automatically
    """
    config = get_server_config()
    
    host = host or config.host
    port = port or config.port
    web_dir = web_dir or PATH_CONFIG.web_dir
    
    if not web_dir.exists():
        logger.error(f"Web directory not found: {web_dir}")
        raise FileNotFoundError(f"Web directory not found: {web_dir}")
    
    handler = create_handler(web_dir)
    
    # Allow socket reuse to avoid "Address already in use" errors
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer((host, port), handler) as httpd:
            url = f"http://{host}:{port}"
            
            print(f"""
╔══════════════════════════════════════════════════════════════════╗
║     Richmond BC Daycare Rankings - Web UI                        ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🌐 Server running at: {url:<38} ║
║                                                                  ║
║  Press Ctrl+C to stop the server                                 ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
""")
            
            if open_browser and config.auto_open_browser:
                try:
                    webbrowser.open(url)
                    logger.info(f"Opened browser to {url}")
                except Exception as e:
                    logger.warning(f"Could not open browser: {e}")
                    print(f"  Open {url} in your browser")
            
            logger.info(f"Server started on {url}")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n✅ Server stopped. Goodbye!")
        logger.info("Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            logger.error(f"Port {port} is already in use. Try a different port.")
        else:
            logger.error(f"Server error: {e}")
        raise


def main() -> None:
    """Main entry point for the server."""
    run_server()


if __name__ == "__main__":
    main()
