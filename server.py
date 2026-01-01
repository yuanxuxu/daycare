#!/usr/bin/env python3
"""
Simple HTTP server to serve the daycare rankings web UI.
Run this and open http://localhost:8080 in your browser.
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8080
DIRECTORY = Path(__file__).parent / "web"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
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
        
        # Open browser automatically
        try:
            webbrowser.open(url)
        except Exception:
            print(f"  Open {url} in your browser")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Server stopped. Goodbye!")

if __name__ == "__main__":
    main()
