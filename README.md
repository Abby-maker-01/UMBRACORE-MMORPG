# ECLIPSE: REALMS OF RUIN — Isometric Android Prototype

This is an upgraded **offline playable prototype** focused on an isometric dark-fantasy pixel-art direction, landscape Android controls, richer HUD, generated forest terrain, ruins, enemies, minimap, quest progress, class selection, inventory, character panel, attacks and two skills.

## Repository layout

- `www/` — game frontend (HTML/CSS/JavaScript)
- `capacitor.config.json` — Capacitor Android settings
- `.github/workflows/build-apk.yml` — builds a debug APK with GitHub Actions
- `server/` — separate WebSocket starter, not connected to the game yet

## Build APK

1. Upload the contents of this project to the root of a GitHub repository.
2. Open **Actions**.
3. Choose **Build ECLIPSE Android APK** and run the workflow (or push a commit).
4. Wait for a green successful run.
5. Open the run and download artifact `ECLIPSE-ISOMETRIC-APK`.
6. Extract the artifact ZIP and install `app-debug.apk` on your Android phone.

The workflow uses Node 22, Java 21, Android SDK setup action v4, Capacitor 6, and forces landscape orientation.

## Controls

- Drag the virtual joystick to move.
- Tap **SERANG** to attack.
- Tap **ARC SLASH** to damage nearby enemies.
- Tap **PHASE** to dash.
- Use **TAS**, **KARAKTER**, and map buttons to open panels.
- On desktop preview: WASD / arrow keys, Space to attack, `1` and `2` for skills.

## Important limitations

This is still a **single-player offline prototype**, not a finished MMORPG. The game uses generated shapes and tile patterns rather than a complete hand-crafted sprite pack. The separate WebSocket server is only a starter and is not wired to the game; real multiplayer requires server deployment, authentication, authoritative movement/combat, persistence, security, and reconnect handling. FOUNDER is a demo label only and grants no real account entitlement. No online account or cloud save is included yet.

No external image assets are required. Google Fonts is an optional visual enhancement; the game falls back to system fonts when offline.
