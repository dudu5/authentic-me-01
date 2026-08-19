# authentic.me — Architecture

## Routing

Single shell, one router. Content area renders based on URL path. Depth goes into content, not across pages.

*Why:* The old site duplicated the shell (nav, themes, background) across every HTML file. The actual user flow goes *deeper into* content (a need, a dimension), not *across* separate pages. A single shell with routed content matches how the site actually works and eliminates the duplication that made the old site fragile to change.

### Routes

- `/` — intro/landing
- `/how` — the map
- `/how/:dimension` — dimension detail
- `/needs` — donut overview
- `/needs/:parent` — parent need
- `/needs/:parent/:child` — child need
- `/program` — program page

*Why these routes:* Needs and dimensions need deep-linking because users drill into them (parent → child, map → specific dimension). Intro and program are flat — no depth, no state to preserve in the URL.

## Shell

Shared across all views. Contains:
- Sidebar nav (reflects current path/depth)
- Background canvas (image layer + color overlay)
- Theme system (CSS variables, 6 themes, localStorage persistence)
- Content area container

*Why:* These elements are identical on every page of the old site. They define the visual environment, not the content. Centralizing them means one place to change when the nav structure, themes, or visual layer evolves.

## Content modules

- **Flat content** (intro, program) — no routing, just markup
- **Routed modules** (needs, how/dimensions) — URL-driven, support depth

*Why the split:* Flat content has no state and no depth — it's just text and layout. Routed modules manage their own internal navigation and state (scores, selected dimensions). Treating them differently keeps flat content simple and avoids over-engineering pages that are just prose.

## Tech

Static HTML, no framework, no build step. One shared JS router. `donut.js` for chart rendering.

*Why no framework:* The old site worked as plain HTML/JS. The content is mostly static with pockets of interactivity (donut, score slider, theme picker). A framework would add build complexity without solving a real problem. If interactivity grows significantly, this decision should be revisited.
