import http.server
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path == '/' or self.path == '':
            self.path = '/preview.html'
        return super().do_GET()

print(f"==================================================")
print(f"🔥 IRON FEAST FITNESS STUDIO - PREVIEW SERVER 🔥")
print(f"Local Server URL: http://localhost:{PORT}")
print(f"Network Access URL: http://0.0.0.0:{PORT}")
print(f"==================================================")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
