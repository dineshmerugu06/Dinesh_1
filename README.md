# Dinesh_1-clean

Clean, simple static rewrite of the Dinesh_1 site. Plain HTML, CSS and JS only.
No build step. Open `index.html` in a browser, or serve this folder.

No Vue, no Nuxt, no Three.js, no 3D models. Each section on a page is
independent HTML, so changing one section cannot break another.

## Map

- `index.html` — Home. Sections in order:
  Hero, Websites With Clarity Not Complications, My Strengths,
  My Projects (summary), My Skills (summary), Who I Build For,
  Websites Built Right, Footer / Start a Project.
- `my-projects/index.html` — My Projects. Full list:
  IMPERIUM, KeyMind, Auction Space, College Bus Tracking System.
- `my-skills/index.html` — My Skills. Full skill list, Website Types,
  My Method, Education.
- `assets/images/merugu.jpg` — Hero photo (Merugu Dinesh Kumar).
- `assets/images/dinesh-poster.jpg` — His own poster photo.
- `assets/images/projects/` — His own project screenshots:
  imperium, keymind, auction, bus-tracking, sreeka-interior.
- `assets/images/free/` — Free stock from Pexels, no account, no payment:
  frontend-code (Mikhail Nilov), web-design (Tranmautritam),
  motion-3d (Jake Heinemann), backend-server (Brett Sayles),
  database (panumas nikhomkhai), coding.mp4 video (João Adão, 9 sec).
- `assets/css/style.css` — All styling.
- `assets/js/main.js` — Only sets the footer year. Pages work without it.

## Links

- Navigation: Home, My Projects, My Skills. All links are relative
  and work locally from any page in this folder.
- Contact: GitHub dineshmerugu06, LinkedIn m-dinesh-23210b3a3,
  email dinesh.merugu.kumar@gmail.com. No phone number is listed.

## Note on the old site

The old site was a minified Vue/Nuxt site tied to a 3D sword system.
That system was removed in this rewrite, not patched. No old 3D,
sword, or demo assets are used here.
