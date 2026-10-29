# Dinesh_1 Codebase Map

Reverse-engineered 2026-10-29. This is the source of truth for editing this site.
Do NOT treat it as katana — it is Dinesh's customized site.

## 0. Tech stack (definitive)

- **Nuxt 3 + Vue 3**, static export (`.nojekyll`, pre-rendered HTML).
  Proof: `.vue` in chunk names, `window.__NUXT__`, `__NUXT_DATA__` payload,
  `data-v-` scoped style attributes, `nuxt-app` markers in runtime.
- **NOT Next.js, NOT React.** No GSAP, no Lenis (zero matches in code).
- **Scroll engine: custom "string" framework** (original site author's own,
  lives in `shared.a4302ba0.js` ~295KB). Every `[string]` attribute in HTML
  becomes a managed object: `initializeObject` → `calculatePositions` →
  IntersectionObservers (`observer-progress`, `observer-inview`) drive
  scroll-linked animation. Types: `progress`, `parallax`, `cursor`,
  `impulse`, `split`, `scroller`, `lazy`, `spotlight`, `progress-part`.
  Elements can mirror others via `string-copy-from`.
- **3D: Three.js** via `SceneCanvas` component (custom GLSL shaders).
  `3d-models/dragon.glb` (14MB, Dinesh's — replaces katana). Scroll states:
  welcome / drawn / transit / storm / techniques. Old katana assets
  (`katana.glb`, `Wakizashi.glb`, textures) still in folder, unused.
- **Styling:** Vue scoped CSS (`data-v-*`) + CSS custom properties.

## 1. Architecture

- **Nuxt 3 static export** (`.nojekyll`, pre-rendered HTML). No server, no build step in repo.
- **Base URL:** `/Dinesh_1/` — every absolute path MUST start with `/Dinesh_1/`.
- **Build assets dir:** `/code/` — all home-page JS/CSS chunks live here.
- **Projects page** (`projects.html`) is a SEPARATE app: Jesper Landberg transplant, chunks in `/_nuxt/`.
- **Detail pages** live under `my-skills/<category>/<slug>/` (23 pages).

## 2. Home page chunk map (`code/`)

| Chunk | Role |
|---|---|
| `app.123f5e0e.js` | Vue 3 runtime + Nuxt app core. Entry: `<script type="module" src="code/app.123f5e0e.js">`. Boots hydration from `window.__NUXT__` + `__NUXT_DATA__`. |
| `home.mind.js` | Home page component (renamed from hashed name for cache-busting). Imports MainFooter, SceneCanvas, BaseVideo, CharAvatar, GridRow, page-link, shared. |
| `home.dragon.js` | Identical duplicate of home.mind.js (kept as backup). |
| `MainFooter.0fdd3c61.js` | Footer Vue component (~22KB). Imports shared, GridRow, CurrentYear, BaseVideo. |
| `MainFooter.c350568c.css` | Footer scoped styles (`data-v-79f9894c`). |
| `home.27da357e.css` | Home page scoped styles. |
| `default.4265b60e.js` / `.css` | Layout + design tokens (`:root` CSS vars). |
| `shared.a4302ba0.js` | Shared composables/utils. |
| `SceneCanvas.*` | 3D canvas (dragon). `BaseVideo.*`, `CharAvatar.*`, `GridRow.*`, `page-link.*`, `CurrentYear.*` | Supporting components. |
| `skill-detail.*`, `my-skills.*`, `skills-data.*` | Detail-page chunks. **Every `code/*.js` is referenced — never delete one.** |

**NEVER edit a hashed chunk in place without renaming** — it defeats cache-busting.

## 3. `index.html` structure (boot order)

1. `<head>`: meta, CSS links, `window.__NUXT__` config (`baseURL:"/Dinesh_1/"`,
   `buildAssetsDir:"/code/"`), PostHog key (katana leftover).
2. Pre-rendered `<body>`: header/nav, main sections, footer. **ALL section
   text lives here only** — not in JS chunks, not in the payload (verified
   by grep: footer strings exist solely in index.html).
3. `<script type="module" src="code/app.123f5e0e.js">` — Vue+Nuxt runtime boots.
4. `<script type="application/json" id="__NUXT_DATA__">` — hydration payload
   (tiny, ~3KB; only app state, no content).
5. Page component `home.mind.js` mounts; string engine scans `[string]`
   elements and binds scroll observers.
6. **My injected scripts** run last (before `</body>`): section labels,
   black-hole section 11 — timed runs + MutationObserver guard.

## 4. Section map (home)

| # | Element | Content |
|---|---|---|
| 1 | `.c-welcome` | Welcome / hero (dragon 3D canvas, no title text — removed) |
| 2 | `.c-transition` | Transition (own scroll) |
| 3 | `.c-storm` | Storm (own scroll) |
| 4.1 | `.back-fall` | Tree waterfall |
| 4.2 | `.composition` | Tree composition (+ `.stick-1..4` impulse) |
| 4.3 | `.bamboo` | Tree bamboo |
| 5.1 | `.master-the-sword` | Techniques sword |
| 5.2 | `.my-strengths` | Techniques "My Strengths" |
| 6 | (masonry) | Masonry |
| 7.1 | `.title` | "Who I Build For" |
| 7.2 | `.-gc` | Client cards |
| 8 | (clarity) | Clarity |
| 9 | `footer .-w` | Footer top: "Frontend / websites." + statements + Projects button |
| 10 | `footer figure.kw` | Blue strip image / character |
| 11 | `footer .bh11` | **My injected black-hole** (canvas vortex + "Mind curator"), inserted before `.polygon` |

Scroll animation system: custom `string="..."` attributes (`progress`, `impulse`, `cursor`) drive scroll-linked animations via the app JS.

## 5. Footer deep-dive (where all mistakes happened)

Pre-rendered HTML (from `index.html`):
```
footer.-dark.-home  [string="progress"]
├── span.overlay > svg (decorative)
├── svg > polygon (decorative)
├── div.-w
│   ├── span.heading.-l "Frontend" / span.heading.-r "websites."
│   ├── p.statement.-st-1..3 (Dinesh's copy)
│   └── nav: Projects button, npm/discord links
├── span.the-name (emptied — was "Merugu Dinesh Kumar")
├── svg.fidoru (hidden by my script)
├── span.sub.-su-1..4 (hidden by my script: ©, tagline, stack, '26)
├── div.bh11  ← MY INJECTED section 11
├── div.polygon (decorative)
└── figure.kw (character image)
```

**Critical CSS** (`MainFooter.c350568c.css`):
```css
footer[data-v-79f9894c]{
  display:grid; place-items:start;   /* ← THE GOTCHA */
  min-height:calc(var(--vh,1vh)*101);
  position:relative; pointer-events:none;
}
footer .-w, footer>svg { grid-area:1/1; z-index:20 }
```

**Rules for injecting into the footer:**
1. `display:grid` + `place-items:start` → children SHRINK to content. Any injected block MUST set `grid-column:1/-1; justify-self:stretch; width:100%` or it renders as a tiny corner box.
2. `pointer-events:none` → links inside injected blocks need `pointer-events:auto`.
3. Scoped styles use `data-v-79f9894c` — my selectors must not rely on it (use plain classes).
4. Canvas sizing: NEVER size a canvas synchronously right after inserting the element — layout hasn't happened. Use `requestAnimationFrame` + `ResizeObserver` + periodic re-check.

## 6. Design tokens (`:root`)

- `--c-black:#101214`, `--c-white:#fff`, `--c-red:#ff4f36`, `--c-blue:#3687ff`, `--c-yellow:#f4ff1e`, `--c-berry:#c8c2cf`, `--c-grey:#e6dfe4`, `--c-green:#4dbf9d`
- Brand accent used in my edits: `#ff4a1c` (orange)
- Type scale: `--h0`..`--h6`, `--p`, `--m`, `--mm` (modular, `--type-step:1.333`)
- Fonts: `KHTeka` (display), `KHTekaMono` (mono), `fdsi` (icons). Files in `fonts/`.

## 7. My injected scripts (inventory)

| Script | What it does | Guards |
|---|---|---|
| Section labels | Orange badges 1–8 on content, 9/10/11 on footer screens | Removes all `.sec-num` first; runs 1.2s/4s/8s; skips if badge exists |
| Black hole (`.bh11`) | Hides `.the-name`, `svg.fidoru`, `.sub.-su-1..4`; inserts canvas vortex + "Mind curator" before `.polygon` | Skips if `.bh11` exists; timed 2s/5s/9s/13s; MutationObserver rebuilds if Vue wipes it; rAF loop stops at 25s; `prefers-reduced-motion` respected |

## 8. Lessons (mistakes → rules)

1. **Grid gotcha:** footer is `display:grid; place-items:start` → injected blocks shrink. Always add `grid-column:1/-1; justify-self:stretch; width:100%`.
2. **Canvas race:** size canvas after layout (`rAF` + `ResizeObserver`), never synchronously on insert.
3. **Read the DOM, don't guess:** extract footer HTML from `index.html` before choosing selectors.
4. **Cache-busting:** never edit a hashed chunk in place without renaming.
5. **Every `code/*.js` is referenced** — deleting one breaks the site.
6. **Absolute paths** must start with `/Dinesh_1/`.
7. **When live files verify correct but test browser disagrees** → trust the files; test browser has stale cache / 1 FPS software rendering.
