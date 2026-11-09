# KEMET EG website

The original design and page content are kept, with the site organized as a
small Vite project. Images and the hero video are served as static files;
project data, presentation, and behavior live in separate source files.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm test
npm run build
npm run preview
```

The deployable static site is generated in `dist/`. Deploy that directory to
any static hosting provider.

## Quote requests

The quote form sends requests to `info@kemeteg-group.com` through FormSubmit.
Confirm the recipient address using the activation email from FormSubmit before
relying on live delivery. If automatic delivery fails, the visitor keeps their
form entries and can open a prefilled email as a fallback.

## Project layout

- `index.html` — page structure and metadata
- `src/styles.css` — original design styles
- `src/main.js` — page interactions
- `src/data/projects.js` — portfolio content and testable filtering helpers
- `src/data/media.js` — image and video paths
- `public/assets/projects/<project>/` — images grouped into one folder per project
- `public/assets/` — shared brand images and media
- `public/assets/Hero/` — hero carousel videos (`5.mp4`, `6.mp4`) and their
  matching poster images; replace these files to update the video slides
- `public/assets/kemet-share.jpg` — 1200×630 social preview image used by
  Open Graph and Twitter cards

The canonical and social URLs currently use the deployed Vercel address. After
connecting `kemeteg-group.com`, update the canonical, Open Graph, and
structured-data URLs in `index.html` to the custom domain.

Sections without content (case studies, testimonials, certifications, and team)
are hidden automatically until entries are added in `src/main.js`.
