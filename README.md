# Valheim Mead & Feast Planner

Single-file React app for planning three-food Valheim meals and browsing foods and meads by biome, Meadows through the Deep North.

- **Run it:** open `index.html` in a browser. There is no build step: React, Tailwind, Framer Motion and Babel load from pinned CDN versions.
- **Hosting:** Cloudflare Workers. The expected address is `valheim-food-and-drink.toejahm.workers.dev` (not yet confirmed). All paths in the code are relative, so any host works.
- **Editing:** `index.html` is the only source of truth. Follow the versioning rule in `CLAUDE.md` on every change.
- **Install:** it is a PWA (`manifest.webmanifest`, `sw.js`, icons) and works offline after the first visit.

Stats follow community sources and may lag behind patches. See the notes at the bottom of the page for the least certain data.
