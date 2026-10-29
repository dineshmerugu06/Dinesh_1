# Dinesh_1 — Merugu Dinesh Kumar

Personal website. 3D home page kept as is. Only visible text was replaced with Merugu's details.

Live: dineshmerugu06.github.io/Dinesh_1/
Repo: github.com/dineshmerugu06/Dinesh_1

## Pages — how this repo is arranged

- Landing page: `index.html` — 3D home page. Code in `code/home.*`.
- Projects page: `projects.html` — shown as "Projects" in the menu. Code in `code/my-skills.*` (code file name unchanged, internal only).
- `404.html` — Fallback page for deep links (GitHub Pages serves this when a URL has no exact file)
- `.nojekyll` — Tells GitHub Pages not to run Jekyll

Dev Guides page is deleted. Start a Project links are removed. There is no separate My Skills page anymore — the Projects page holds the skills and projects lists. Projects links are plain links to `projects.html`, not app-router links, so clicking Projects opens the page directly with no landing-page flash and no refresh needed.

## Detail pages

All under `my-skills/`, one folder per page, each with its own `index.html` (detail folder name unchanged, so detail page URLs stay working):

- `my-skills/projects/` — Project details: IMPERIUM, KeyMind, Auction Space, College Bus Tracking
- `my-skills/frontend/` — React, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP, Lenis, Three.js, Python, Java, SQL, FastAPI, Spring Boot, Node.js, PostgreSQL, Supabase
- `my-skills/website-types/` — Portfolio Websites, Business Websites
- `my-skills/method/` — AI-Assisted Development

The Projects list also shows Sreeka Interiors and Photography. Those two have no detail page yet.

- `skill-data/skills/` — Code and download file for each detail page, in the same section folders as above. The detail page loads its code from here.

## Code

- `code/` — App code (JavaScript + CSS). Every file here is used, so do not delete a code file to "clean" the repo — the site will break.
  - `app.*.js` — App entry and routes (home, Projects, detail pages)
  - `home.*.js` / `home.*.css` — Landing page
  - `my-skills.*.js` / `my-skills.*.css` — Projects page
  - `skill-detail.*.js` / `skill-detail.*.css` — Single detail page
  - `shared.*.js`, `BaseVideo.*`, `CharAvatar.*`, `GridRow.*`, `IconList.*`, `MainFooter.*`, `SceneCanvas.*`, `page-link.*`, `storage.*` — Shared components
  - `skills-data.*.js` — Lists, titles, video links (Merugu's details)

## Assets

- `images/` — All pictures
  - `characters/` — Merugu photo and character images
  - `home-page/` — Home section images, bamboo, storm, masonry examples
  - `skill-demos/` — Demo images per detail page, same section folders as above
  - `icons/` — Small icons
  - `site-logo.png`, `site-mask.svg`, `site-mask-mobile.svg`, `share-screen.jpg` — Logo, masks, share image
- `videos/` — All videos
  - `home-container.mp4`, `home-ripple.mp4`, `slash-effect.mp4`, `my-skills-link.mp4` — Home videos
  - `skill-demos/` — Demo video per detail page, by section (file name is the page number)
- `3d-models/` — 3D sword models used by the home page
  - `katana.glb`, `Wakizashi.glb`, `katana-textures/`, `wakizashi-textures/`, `studio-light.exr`
  - `draco-decoder/` — Decoder needed to open the compressed 3D models
- `fonts/` — Site fonts
- `favicons/` — Browser tab icons

## Note

Some old names still appear inside code files only (for example element id `skill-hub`, CSS class `skill-hub-link`). Those are internal animation/router identifiers, not folders or files. Renaming them is not needed to read the repo, and changing them can break the animations, so they were left alone.

Tutorial videos and code samples on the detail pages are still the original demo content — only the site text was changed to Merugu's details. No phone number is included in the site text.
