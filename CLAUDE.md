# Valheim Mead & Feast Planner

Single-file React app (`index.html`) plus PWA files (`manifest.webmanifest`, `sw.js`, icons).

## Versioning (required on every change)
- The page shows `APP_VERSION` (three decimals, started at `0.500`).
- Every change, however small, raises it by 0.001 (0.500 → 0.501 → 0.502 …).
- Each change also gets a new entry at the end of `UPDATES` with `v` (next integer) and `ver` set to the new version, so the What's new popup and Update Notes page show it.
- Set `CACHE` in `sw.js` to the same version so installed apps refresh.
