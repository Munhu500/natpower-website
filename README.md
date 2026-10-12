# Natpower Group website

Marketing website for the Natpower Group of Companies. Built with Astro, Tailwind CSS v4 and TypeScript, and output as a static site deployable to Vercel or any static host.

**Status:** layout only. Pages are static, links are placeholders where noted, and the enquiry form is not connected.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Type-check Astro and TypeScript |

On Vercel, use the Astro framework preset: build command `npm run build`, output directory `dist`.

## Preview deployment (Apache / Hostinger)

| Command | Action |
|---|---|
| `npm run build:preview` | Build with `PUBLIC_NOINDEX=true` |
| `npm run package:preview` | Preview build + zip the contents of `dist/` to `deploy/natpower-preview.zip` |

- Upload the zip to the web root of the preview host and extract it there. `index.html`, `.htaccess` and `robots.txt` sit at the zip root.
- `site` in `astro.config.mjs` defaults to `https://preview.yourdomain.com` (used for canonical and og:image URLs). Override with `SITE_URL=https://… npm run package:preview`.
- `PUBLIC_NOINDEX=true` adds `<meta name="robots" content="noindex, nofollow">` to every page and outputs a `robots.txt` with `Disallow: /`. Unset (the launch build) is indexable.
- `public/.htaccess`: custom 404, HTTPS redirect, gzip, 1-year immutable caching for images, `no-cache` for HTML. `public/_astro/.htaccess` gives hashed build assets 1-year immutable caching.
- For the real launch: `SITE_URL=https://natpower.org npm run build` (no `PUBLIC_NOINDEX`).

## Structure

```
src/
  data/site.ts        All copy, contacts, nav, stats, products, documents, news (typed)
  data/map.ts         Simplified country outlines for the Operations map
  styles/global.css   Design tokens (@theme) and shared component classes
  layouts/BaseLayout.astro
  components/         One component per section or element
  pages/              index, about, operations, diversified-interests,
                      compliance, investors, news-media, contact, 404
  scripts/reveal.ts   Scroll-reveal observer
  assets/             Approved logo (natpower-logo.png) and images
```

## Logo

The approved logo is `src/assets/natpower-logo.png` (transparent PNG). It is final: use it as-is and never redraw, recolour or add effects to it.

- `Logo.astro` renders it with Astro `<Picture>` (AVIF and WebP, 1x and 2x, explicit width and height).
- Sizes: header 56px (48px when scrolled and on mobile), mobile menu 48px, footer 64px, company cards and 404 72px.
- `public/favicon-32.png` and `public/apple-touch-icon.png` (180px, on ivory because iOS renders transparency as black) are generated from it.
- The default Open Graph / Twitter image is the share card `public/og/natpower-og.jpg` (1200×630 JPG, under 150KB), rendered from `scripts/og/og-card.html`.

## Placeholders that need real content

Search for `TBC`, `TODO` and `placeholderLabel` in `src/`.

### Kempton Park office (Natpower Industrial Corporation (Pty) Ltd, South Africa)
- Street address, suburb and postal code
- Email
- General and sales phone numbers

### Company links
- "Visit website" links for both companies (currently `#`)

### Photography (every image is a labelled placeholder)
- Home hero: 4 slides (acid plant / mine site, tanker fleet, Lusaka / Kempton Park, Copperbelt landscape)
- Who We Are: textured granular sulphur close-up
- Products: acid storage tanks, sulphur in one-ton bags, silica sand stockpile
- Compliance band: hazmat placard on tanker
- CTA band: mine site at dusk
- News: 3 card images
- Mega-menu featured images: 3
- Inner page heroes: About, Operations, Diversified Interests, Compliance, Investors, News & Media, Contact
- Operations page: tanker fleet, pit dewatering
- Gallery: 6 images

### Leadership
- 6 leaders: names, job titles and portrait photos

### Clients
- Konkola Copper Mines and Mimbula Minerals logos (Trusted By strip)

### Content to confirm
- **Gallery captions:** written as stand-ins because the old site's gallery could not be reached. Replace them with the old captions, typos fixed.
- **News dates and locations:** inferred from document upload paths (Oct 2026 / Jul 2026). Confirm before launch.
- **News excerpts:** short stand-in summaries.
- **Silica sand grading specification**
- **ZEMA 3-year export permit:** reference number and file (currently shows "Document available on request")
- **Division descriptions** (Diversified Interests): short stand-in copy

### Not yet built
- Enquiry form backend
- Embedded map on Contact
- Gallery lightbox behaviour (layout exists in `news-media.astro`, hidden)
