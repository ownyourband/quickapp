default:
    just --list

build:
    aiot build

push:
    adb push dist/*.rpk /tmp/com.ownyourband.rpk
    adb shell pm install /tmp/com.ownyourband.rpk
    adb shell sleep 1
    adb shell am start com.ownyourband

debug: build push

icon iconname:
    uv run scripts/download_icon.py {{ iconname }}
