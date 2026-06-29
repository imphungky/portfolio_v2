# Portfolio

A personal portfolio website — a single-page React app with Hero, About, Projects, and Contact sections.

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) primitives on [Base UI](https://base-ui.com)
- [lucide-react](https://lucide.dev) icons, [Geist](https://vercel.com/font) font

## Getting Started

```bash
npm install
npm run dev      # start the dev server with HMR
```

Open the URL Vite prints (default http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR   |
| `npm run build`   | Build for production to `dist/`      |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
  main.jsx          # React entry point
  App.jsx           # composes the page sections
  index.css         # Tailwind import + theme tokens
  components/        # Navigation, Hero, About, Projects, Contact
  components/ui/     # shadcn primitives (button, card, badge)
  lib/utils.js       # cn() class-merge helper
public/             # static assets (favicon, icons, resume.pdf)
```

## Editing Content

Page content is defined as plain data arrays at the top of each section component —
edit the `projects` array in `src/components/Projects.jsx`, the `links` array in
`src/components/Navigation.jsx`, and so on. The résumé lives at `public/resume.pdf`
and is linked from the nav's Resume button — replace that file to update it.

Imports use the `@/` alias for `src/` (e.g. `@/components/ui/button`).
