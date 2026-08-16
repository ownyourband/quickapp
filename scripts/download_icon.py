#!/usr/bin/env uv run
# scripts/download_icon.py
#
# A script to make it less painful to download icons.

import sys
import urllib.request
from pathlib import Path

ICONS_URL = (
    "https://raw.githubusercontent.com/lucide-icons/lucide/refs/heads/main/icons"
)
ICONS_OUTPUT_DIR = Path("src/common/icons")


def download_icon(icon_name: str):
    url = f"{ICONS_URL}/{icon_name}.svg"
    output_path = ICONS_OUTPUT_DIR / f"{icon_name}.svg"
    output_path.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {icon_name}.svg...")
    urllib.request.urlretrieve(url, output_path)
    print(f"Saved to {output_path}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python download_icon.py <icon-name>")
        print("Example: python download_icon.py chart-spline")
        sys.exit(1)

    icon_name = sys.argv[1]
    download_icon(icon_name)
