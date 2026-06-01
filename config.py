# config.py
import os

MODELS = {
    "luna": "ollama/gemma4:26b",
    "nano": "ollama/gemma4:latest",
    "vega": "ollama/gemma4:latest",
    "sirius": "ollama/gemma4:latest",
    "stella": "ollama/gemma4:26b",
    "selene": "ollama/gemma4:latest"
}

# 🌍 Global platform targets for automated asset drops
TARGET_MARKETS = {
    "DATA_MARKET": "Hugging Face (Global AI Dataset Marketplace)",
    "ASSET_MARKET": "BOOTH (Global Digital Asset Store)"
}

# 📊 Database for knowledge accumulation and feedback loops
LOG_FILE_PATH = "sales_logs.json"

# 🎨 UI Identity Map (Ensures clean avatar renaming without double-byte bugs)
AVATAR_MAP = {
    "luna_ceo": "/public/avatars/luna.png",
    "qwen_coder": "/public/avatars/qwen.png",
    "selene_proposal": "/public/avatars/selene.png",
    "System_Voice": "/public/avatars/system.png"
}
