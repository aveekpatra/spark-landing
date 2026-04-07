# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build (static export)
- `npm run lint` — run eslint

## Architecture

Next.js 16 (App Router) + React 19 marketing/landing site for "Spark Service" (Slovenian — see routes `pogoji-uporabe`, `zasebnost`).

- **Static export**: `next.config.ts` sets `output: 'export'` with `images.unoptimized: true`. Build output goes to `out/`. Do not use server-only Next features (API routes, SSR, dynamic route handlers, `next/image` optimization).
- **App Router**: `app/layout.tsx` is the root layout; `app/page.tsx` composes the landing page from section components in `components/` (hero, services, features, testimonials, faqs, contact, footer, etc.).
- **UI**: shadcn/ui-style primitives in `components/ui/` (configured via `components.json`), Radix primitives, Tailwind CSS v4 (`@tailwindcss/postcss`), `tailwindcss-animate`, motion (Framer Motion successor) for animations. `lib/utils.ts` exports `cn()` (clsx + tailwind-merge).
- **Contact form**: uses `@emailjs/browser` (client-side EmailJS), consistent with the static-export constraint.
