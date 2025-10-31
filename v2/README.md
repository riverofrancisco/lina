# Lina — v2 (Astro)

> Second release — Astro-based portfolio site
>
> Live: https://lina-v2.vercel.app/

---

## Table of contents

- [About](#about)
- [Key features](#key-features)
- [Project structure (v2)](#project-structure-v2)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Environment & configuration](#environment--configuration)
- [Deployment](#deployment)
- [Notes & next steps](#notes--next-steps)

---

## About

This folder contains the second release of the portfolio, built with Astro. It focuses on fast static rendering with optional interactive components using React.

The site provides the artist's media, events, gallery and basic contact flows and was deployed to Vercel.

---

## Key features

- Astro-based static site architecture with client-side React components where needed
- Tailwind integration for utility-first styling
- Supabase and other integrations available in the project config
- Optimized static assets in `public/` (media and service files)

---

## Project structure (v2)

Top-level files and folders in `v2`:

```
.vscode/
.gitignore
.prettierrc.mjs
astro.config.mjs
package.json
package-lock.json
tsconfig.json
tailwind.config.mjs
public/
src/
README.md
```

Key `src/` layout:

```
src/
├── components/
├── layouts/
├── pages/
├── utils/
└── env.d.ts
```

Key `public/` layout:

```
public/
├── favicon.ico
├── media/
└── services/
```

---

## Tech stack

- Astro (v4+)
- React for interactive components
- Tailwind CSS
- Supabase client (optional integrations)
- TypeScript

---

## Quick start

Run locally:

```powershell
cd v2
npm install
npm run dev
```

Default dev port is usually 4321. Build for production:

```powershell
npm run build
npm run preview
```

---

## Environment & configuration

- Check `astro.config.mjs`, `tailwind.config.mjs`, and any files under `src`/`config` for environment variable usage.
- Provide required variables via `.env` or platform-specific configuration when deploying.

---

## Deployment

- Live site: https://lina-v2.vercel.app/
- Recommended host: Vercel — set environment variables in the Vercel dashboard and deploy from the `v2` folder or repository root as appropriate.

---