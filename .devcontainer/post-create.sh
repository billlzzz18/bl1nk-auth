# .devcontainer/post-create.sh
#!/bin/bash
set -euo pipefail

# --- Python tools ---
pip install --upgrade pip
pip install uv modal fastapi uvicorn

# --- Node global tools ---
npm install -g pnpm
# bun
npm install -g bun

# --- Rust tools ---
cargo install tauri-cli --version "^2"
