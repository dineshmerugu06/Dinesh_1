# Dinesh_1 — Merugu Dinesh Kumar

Personal website. UI unchanged from the katana mirror; only visible text was replaced with Merugu's details, and folders/files were renamed so anyone can read the repo.

Live: dineshmerugu06.github.io/Dinesh_1/
Repo: github.com/dineshmerugu06/Dinesh_1

## Pages (root)

- `index.html` — Home
- `my-projects.html` — My Projects page
- `my-skills.html` — My Skills page
- `404.html` — Fallback page for deep links (GitHub Pages serves this when a URL has no exact file)
- `.nojekyll` — Tells GitHub Pages not to run Jekyll

## Skill pages

- `my-skills/` — One folder per skill, each with its own `index.html`
  - `frontend/` — React, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP, Lenis, Three.js, Python, Java, SQL, FastAPI, Spring Boot, Node.js, PostgreSQL, Supabase
  - `website-types/` — Portfolio Websites, Business Websites
  - `method/` — AI-Assisted Development
  - `projects/` — IMPERIUM, KeyMind, Auction Space, College Bus Tracking
- `skill-data/skills/` — Code and download file for each skill, in the same section/skill folders as above. The skill page loads its code from here.

## Code

- `code/` — App code (JavaScript + CSS)
  - `app.*.js` — App entry
  - `home.*.js` / `home.*.css` — Home page
  - `my-projects.*.js` / `my-projects.*.css` — My Projects page
  - `my-skills.*.js` / `my-skills.*.css` — My Skills page
  - `skill-detail.*.js` / `skill-detail.*.css` — Single skill page
  - `shared.*.js`, `BaseVideo.*`, `CharAvatar.*`, `GridRow.*`, `IconList.*`, `MainFooter.*`, `SceneCanvas.*`, `page-link.*`, `storage.*` — Shared components
  - `skills-data.*.js` — Skill list, titles, video links (Merugu's details)

## Assets

- `images/` — All pictures
  - `characters/` — Dinesh / Kumar character images, footer image
  - `home-page/` — Home section images, bamboo, storm, masonry examples
  - `skill-demos/` — Demo images per skill, same section/skill folders as above
  - `icons/` — Small icons
  - `site-logo.png`, `site-mask.svg`, `site-mask-mobile.svg`, `share-screen.jpg` — Logo, masks, share image
- `videos/` — All videos
  - `home-container.mp4`, `home-ripple.mp4`, `slash-effect.mp4`, `my-skills-link.mp4` — Home videos
  - `skill-demos/` — Demo video per skill, by section (file name is the skill number)
  - `my-projects/` — My Projects presentation video
- `3d-models/` — 3D sword models
  - `katana.glb`, `Wakizashi.glb`, `katana-textures/`, `wakizashi-textures/`, `studio-light.exr`
  - `draco-decoder/` — Decoder needed to open the compressed 3D models
- `fonts/` — Site fonts
- `favicons/` — Browser tab icons

## Note

Some old names still appear inside code files only (for example router name `dev-guides`, element id `skill-hub`, CSS class `skill-hub-link`). Those are internal animation/router identifiers, not folders or files. Renaming them is not needed to read the repo, and changing them can break the animations, so they were left alone.

Tutorial videos and code samples on the skill pages are still the original demo content — only the site text was changed to Merugu's details. No phone number is included in the site text.
