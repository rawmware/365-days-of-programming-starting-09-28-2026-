# Day 1 — Virtual iPhone Studio

Date: 2026-09-28  
Status: Published — first interactive milestone  
Kind: Website / 3D experiment

## What I set out to make

Roman wanted a virtual iPhone concept that people can rotate, inspect, and actually use. Day 1 focuses on the hardware model and screen interactions. Connecting an AI provider is a later milestone.

## What changed today

- Built a procedural Three.js silver phone with rounded chassis, quad rear optics, side buttons, antenna seams, speaker slots, and a charging port.
- Attached a real interactive HTML screen to the 3D camera space. Apps accept taps and typed input while the screen stays aligned to the model.
- Added orbit/zoom, front/back presets, inspect/use modes, clickable side buttons, and a larger screen-only mode.
- Implemented arithmetic, local notes, wallpaper selection, lock/unlock, a home gesture, live local time, volume, silent mode, and a synthesized audio demo.
- Added clearly labeled previews for weather, camera, messages and phone. Safari opens real websites in a new browser tab.
- Left the AI screen explicitly disconnected. No API key is collected or needed.

## AI involvement

Roman supplied the project direction and specification, chose the initial interaction milestone, and asked for publication as Day 1. Codex generated and refined the implementation, ran browser checks, corrected rotation and mobile layout issues, and prepared the public documentation.

## Run or view it

**[Open the playable project](https://rawmware.com/365-days/projects/day-001)** · [Optional daily notes page](https://rawmware.com/365-days/day?day=1&view=notes)

The 365-day archive opens the project directly when Day 1 is clicked. The same project-first behavior applies to future published days with demo or artifact URLs.

From this directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5180. For a production bundle, run `npm run build`; deploy the `dist/` directory as a static Vite site. Three.js is bundled locally. The optional Google Fonts stylesheet falls back to system fonts.

For the RawmWare deployment path, use `npm run build:rawmware`. Its generated index is hosted at `/365-days/projects/day-001` and assets under `/365-days/projects/day-001/assets/`. The public project source stays here; the website repository receives only the reviewed build for hosting.

Keyboard controls: **1** front, **2** back, **L** lock/wake, **H** home, **Escape** exit screen-only view or return home. Notes and wallpaper are stored in the current browser only.

## Verification

- Production build passed.
- Dependency audit reported zero known vulnerabilities.
- Automated Chrome checks passed for calculator multiplication and divide-by-zero handling, note persistence after reload, lock/unlock, wallpaper selection, display dimming, screen-only interaction and return to 3D, back/front screen visibility, the disconnected AI state, mobile overflow, and mobile calculator input.
- Desktop, rear-model, and 390-pixel mobile screenshots were visually inspected.
- No JavaScript page errors were reported by the browser checks.

Run the same interaction checks with `node verify.mjs` while the development server is running. Google Chrome must be installed. Set `DEMO_URL` to test a deployed copy. These checks use an isolated browser and do not change your personal notes.

## Limitations and next steps

This is an independent concept study, not an Apple product, an accurate released-hardware model, or a real iOS emulator. Weather is sample data; camera, calls, and messaging are not connected. Music plays a synthesized demonstration chord. Live AI responses are deferred until Roman provides the integration details. Future API credentials should stay in a server-side endpoint, never in the public browser bundle.

The first production bundle has a build size advisory because Three.js is included. Rendering is updated only when the 3D view changes; older hardware may still need screen-only mode.
