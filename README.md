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
  assets/             Logo and images (see below)
```

## Placeholders that need real content

Search for `TBC`, `TODO` and `placeholderLabel` in `src/`.

### Brand
- **Logo mark:** a flat SVG mark is needed. `Logo.astro` currently draws a neutral "N" square (`TODO: replace with flat SVG mark`).
- **Temporary raster logo:** natpower.org was unreachable during the build. To use the raster meanwhile, run:
  `curl -o src/assets/logo-original.png https://natpower.org/wp-content/uploads/2025/07/ChatGPT-Image-Jul-9-2025-12_16_37-PM.png`
  `Logo.astro` picks it up automatically.

### Kempton Park office (Natpower (Pty) Ltd)
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
