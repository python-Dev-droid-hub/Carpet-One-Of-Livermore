# Carpet One of Livermore — Homepage

Production-ready single-page homepage for **Carpet One of Livermore**, built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Edit content

All marketing copy, contact details, navigation, services, and gallery images live in:

[`src/lib/content.ts`](src/lib/content.ts)

Design tokens (palette, motifs, spacing) live in:

[`src/app/globals.css`](src/app/globals.css)

## Placeholders still needed

Fill these before going live:

| Item | Where |
|------|--------|
| **Street address** | `site.address` in `src/lib/content.ts` (also JSON-LD TODO in `layout.tsx`) |
| **Business hours** | `site.hours` in `src/lib/content.ts` |
| **Real photos** | Replace Unsplash URLs in `hero`, `services`, and `galleryItems` |
| **Logo asset** | Currently a typographic wordmark; add SVG/PNG under `public/` if desired |
| **Map embed** | Contact section map placeholder (`[Add map embed]`) |
| **Form backend** | Contact form stubs with `console.log` — wire Formspree or your API (see TODO in `Contact.tsx`) |
| **Real reviews** | Replace placeholder testimonials in `testimonials.items` (`src/lib/content.ts`) |
| **Site URL** | Confirm `site.url` (`https://carpetonel.com`) for SEO / Open Graph |
| **Favicon** | Replace default `src/app/favicon.ico` |

## Project structure

```
src/
  app/           # layout, page, globals.css
  components/    # Header, Hero, Services, Showcase, Gallery, WhyUs, Process, Contact, Footer
  components/ui/ # Button, FadeIn, Motif, Section
  lib/content.ts # editable copy
```
