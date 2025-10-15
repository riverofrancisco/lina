# SoyLina — Web App (soylina)

> Third (current) release — production Next.js site for the singer's professional portfolio
>
> Live: https://linarivero.com.ar

---

## Table of contents

- [About](#about)
- [Key features](#key-features)
- [Project structure (high level)](#project-structure-high-level)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Environment & configuration](#environment--configuration)
- [Deployment](#deployment)
- [Contributing & notes](#contributing--notes)

---

## About

`soylina` is the third and production release of the singer's portfolio website. It is built with Next.js and designed to showcase the artist's bio, media, upcoming events, galleries, and contact options while keeping performance and accessibility in mind.

The app combines server and client components and integrates with services such as Supabase and Firebase for data and media.

---

## Key features

- Modern Next.js app (App Router) with server/client components
- Fast development with Turbopack (configurable)
- Dark / light theme support (via `next-themes`)
- Material UI and Emotion for consistent styling and components
- Events management and dynamic galleries
- Integrations with Supabase and Firebase for data and media
- Ready to deploy to Vercel (zero-config) or other Node-compatible hosts

---

## Project structure (high level)

- `app/` — App routes, layouts and pages (App Router)
- `components/` — Reusable UI components (hero, header, gallery, events, forms)
- `public/` — Static assets (images, videos, icons)
- `config/` — Firebase, Supabase and theme configuration files
- `lib/`, `utils/` — Shared helpers and utilities

---

## Tech stack

- Next.js 15
- React 19
- Material UI (MUI) + Emotion
- Supabase & Firebase clients
- TypeScript

---

## Quick start

Clone the repository and run locally:

```powershell
# clone repo
git clone <repo-url>
cd soylina

# install dependencies
npm install

# run dev server (uses Turbopack by default)

```
Open http://localhost:3000 to see the app. If Turbopack causes issues, change the `dev` script in `package.json` from `next dev --turbopack` to `next dev`.

Build & run production locally:

```powershell
npm run build
npm start
```

Linting:

```powershell
npm run lint
```

---

## Environment & configuration

This project expects runtime configuration via environment variables. Check `config/supabaseconfig.ts` for the exact variables used.

Suggested placeholders for `.env.local` (do NOT commit real keys):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Create a `.env.local` for development and keep it out of version control.

---

## Contributing & notes

- Keep secrets out of the repo — use `.env.local` and your host's secret manager.
- Document new env variables inside `config/` when you add new integrations.
- Consider adding `CONTRIBUTING.md` if you expect external contributors.

---
