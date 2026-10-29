# Dinesh_1 — Merugu Dinesh Kumar

Personal website. 3D home page kept as is. Only visible text was replaced with Merugu's details.

Live: dineshmerugu06.github.io/Dinesh_1/
Repo: github.com/dineshmerugu06/Dinesh_1

## Pages — how this repo is arranged

- Landing page: `index.html` — 3D home page (dragon). Code in `code/home.*`.
- Projects page: `projects.html` — 3D card gallery showing Merugu's 6 projects. Built on the Jesper Landberg portfolio layout (used with the mirror as training reference), with all content replaced: Merugu's name, bio, socials, and his 6 projects (IMPERIUM, KeyMind, Auction Space, College Bus Tracking, Sreeka Interiors, Photography). Code in `_nuxt/` (Nuxt 3 build output).
  - Clicking the Sreeka Interiors card opens an explanation popup (image + video + Visit Website button). Other cards navigate to detail pages.
  - Project data served locally via `dato-local.json` (no external CMS calls).
- `404.html` — Fallback page for deep links (GitHub Pages serves this when a URL has no exact file)
- `.nojekyll` — Tells GitHub Pages not to run Jekyll

## Detail pages

All under `my-skills/`, one folder per page, each with its own `index.html`:

- `my-skills/projects/` — Project details: IMPERIUM, KeyMind, Auction Space, College Bus Tracking
- `my-skills/frontend/` — React, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP, Lenis, Three.js, Python, Java, SQL, FastAPI, Spring Boot, Node.js, PostgreSQL, Supabase
- `my-skills/website-types/` — Portfolio Websites, Business Websites
- `my-skills/method/` — AI-Assisted Development

Sreeka Interiors and Photography have no detail page yet — Sreeka uses the popup instead.

- `skill-data/skills/` — Code and download file for each detail page, in the same section folders as above.

## Code

- `code/` — Home page app code (JavaScript + CSS). Every file here is used, so do not delete a code file to "clean" the repo — the site will break.
- `_nuxt/` — Projects page app code (Nuxt 3 build output). Do not edit hashed files in place — rename to bust cache.
- `_payload.json` — Projects page data (Merugu's 6 projects, name, bio, socials)
- `dato-local.json` — Local project data served instead of the original CMS

## Assets

- `images/` — All pictures
  - `characters/` — Merugu photo and character images
  - `home-page/` — Home section images
  - `projects/` — Merugu's 6 project posters
  - `skill-demos/` — Demo images per detail page
  - `icons/` — Small icons
- `videos/` — All videos
  - `skill-demos/projects/` — Merugu's 6 project demo videos
- `3d-models/` — 3D models: `dragon.glb` (home page), katana/wakizashi (legacy)
- `models/` — `award.glb`, `llama.glb` — abstract 3D decor for the projects page gallery (from the reference layout; has graceful fallback if removed)
- `fonts/` — Site fonts
- `favicons/` — Browser tab icons

## Note

Some old names still appear inside code files only (for example element id `skill-hub`, CSS class `skill-hub-link`). Those are internal animation/router identifiers, not folders or files. Renaming them is not needed to read the repo, and changing them can break the animations, so they were left alone.
