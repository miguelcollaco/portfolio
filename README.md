# miguelcollaco.com

My personal site and portfolio — [miguelcollaco.com](https://miguelcollaco.com)

Built with the Next.js App Router and deployed on Vercel. Fully static: every
route is prerendered at build time, and there is no server runtime beyond
Vercel's CDN and the OG image generator.

## Stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | React 19, [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) |
| Icons | [lucide-react](https://lucide.dev) |
| Command palette | [cmdk](https://cmdk.paco.me) |
| Forms | react-hook-form + [Web3Forms](https://web3forms.com) + hCaptcha |
| Analytics | Vercel Analytics & Speed Insights |

## Routes

| Route | Description |
|---|---|
| `/` | Portfolio — hero, about, experience, expertise, contact |
| `/links` | Link-in-bio page |
| `/opengraph-image` | Generated 1200×630 social card |
| `/sitemap.xml`, `/robots.txt` | Generated from `app/sitemap.ts` and `app/robots.ts` |

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```

## Project layout

```
app/
  _components/      Page sections (Hero, About, Experience, …)
  links/            /links route
  layout.tsx        Root layout, metadata, JSON-LD, theme bootstrap
  globals.css       Tailwind theme tokens + reveal animations
  opengraph-image.tsx
  robots.ts
  sitemap.ts
components/
  ui/               shadcn/ui primitives
  icons.tsx         Hand-rolled GitHub / LinkedIn SVGs
lib/utils.ts        cn() helper
public/             Photo and CV
```

## Notes on a couple of decisions

**Animations are CSS, not JavaScript.** Entry animations run as CSS keyframes
so above-the-fold content paints on the first frame rather than waiting on
hydration. Scroll-triggered reveals use a small `IntersectionObserver` wrapper
(`app/_components/Reveal.tsx`) that takes its children as a prop, which keeps
the sections it wraps as Server Components. All of it respects
`prefers-reduced-motion`.

**No flash of the wrong theme.** A tiny inline script in `<head>` applies the
stored theme before first paint. The same script adds a `js` class to
`<html>`, which is what gates the scroll-reveal styles — without JavaScript
every section renders fully visible instead of staying stuck at `opacity: 0`.

**hCaptcha loads on demand.** The widget injects a third-party script on
mount, so it is only mounted once someone actually interacts with the contact
form.

## License

Code is free to reference. Content, photo, CV, and branding are not.
