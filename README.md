# Codoodle — Web Studio Site

A premium, fully responsive marketing site for **Codoodle** (Code + Doodle),
built with **React + Vite**. Pure-black canvas, hand-drawn doodle marks, a
"sketched browser" hero that types itself out, and a professional motion system
throughout.

## Design idea
**Code meets Doodle.** The precise (monospace, coloured code syntax) sits next
to the playful (hand-drawn SVG squiggles, circles, arrows). Two-marker palette —
coral `#FF6A3D` + periwinkle `#7C8CFF` — on solid `#000`.

- Display: Space Grotesk · Body: Inter · Code: JetBrains Mono · Doodle: Caveat

## Motion system (adapts to all devices, respects reduced-motion)
- **Route transitions** — each page fades/blurs in on navigation.
- **Scroll-progress bar** — thin coral→periwinkle line at the top.
- **Scroll reveals** — fade + rise + soft blur, with staggered variants.
- **Title wipe** — hero headings mask-reveal on load.
- **Self-drawing doodles** — SVG marks draw themselves in.
- **3D tilt** — the Work banner tilts to the pointer (desktop only).
- **FAQ accordion**, **button sheen + press**, **animated marquee**, hover states.
- Everything is disabled/instant under `prefers-reduced-motion`.

## Run it
```bash
npm install
npm run dev        # local dev server
npm run build      # production build → /dist
npm run preview    # preview the build
```
A pre-built `/dist` is included. To preview it: `npx serve dist`.

## Deploy to Vercel
1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel: **New Project → import the repo**.
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
4. Deploy. `vercel.json` is included so client-side routes (e.g. `/work`) resolve
   correctly on refresh.

No domain needed to go live — Vercel gives you a free `*.vercel.app` URL. Add
`codoodle.in` later in the project's **Domains** settings whenever you buy it.

## Contact form (Web3Forms)
The contact form posts to **Web3Forms**, so submissions arrive straight in the
inbox tied to the access key — the visitor's email client never opens.
- The access key lives in `src/pages/Contact.jsx` (`WEB3FORMS_KEY`).
- It's currently set to the key you provided. To route mail elsewhere, create a
  key at web3forms.com and replace that string.

## Contact details (edit in ONE place)
All contact info lives in the `BRAND` object in `src/data/site.js`:
- Email `codoodle.studio@gmail.com`
- Phone / WhatsApp `+91 99528 06660`
- Instagram — placeholder (shows "Coming soon"); add the real handle later.

Update that object and the footer, contact page, WhatsApp and tel links all follow.

## Structure
```
src/
  main.jsx            Entry + global style imports
  App.jsx             Router, scroll progress, route transitions
  data/site.js        All content: brand, nav, services, process, values, projects
  hooks/
    useReveal.js       Scroll-into-view hook
    useTilt.js         Pointer 3D tilt (desktop only)
  components/
    Navbar.jsx  Footer.jsx  Logo.jsx
    Doodle.jsx         Self-drawing SVG doodle marks
    Reveal.jsx  Stagger.jsx   Scroll-reveal wrappers
    HeroBrowser.jsx    The self-typing hero browser
    ScrollProgress.jsx  Marquee.jsx  ScrollToTop.jsx
  pages/
    Home.jsx  Services.jsx  Work.jsx  About.jsx  Contact.jsx  NotFound.jsx
  styles/             ← every CSS file lives here (one per component/page)
```

## Content notes
- Each page carries **unique** content — no section is repeated across pages.
  Process lives on Home, technical inclusions + FAQ on Services, the project on
  Work, the values on About.
- **No pricing** anywhere, by design.
- **Shri Harsha Associates** appears only on the **Work** page — the full banner
  is shown (edges intact) with 5 description points. Add more projects by pushing
  to `PROJECTS` in `src/data/site.js`; swap/add images under `public/projects/`.

Built where code meets doodle.
