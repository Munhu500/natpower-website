# CLAUDE.md — Natpower Group website

Astro + Tailwind CSS v4 + TypeScript static site. **Layout only for now**: static pages, placeholder links, no working forms or backend. Quality bar: ergafrica.com (restrained, photography-led, institutional).

## Working in this repo

- `npm run dev` / `npm run build` / `npm run check` (astro check must stay at 0 errors).
- ALL copy and data live in `src/data/site.ts`. Never hardcode copy in components.
- Design tokens live in `src/styles/global.css` (`@theme`). The default Tailwind palette is removed on purpose: only brand tokens exist.
- `gold-700` (`#86682B`) is an implementation-only, text-only token for small gold labels on light backgrounds. `gold-500` on ivory is 3.17:1 and fails WCAG AA for 12px text. Rules, underlines and icons still use `gold-500`.
- Images: `Media.astro` renders a photo when `src` is set, otherwise a labelled stone placeholder.
- Logo: the approved, final logo is `src/assets/natpower-logo.png`. Use it as-is; never redraw, recolour or add effects to it. `Logo.astro` renders it via Astro `<Picture>` (AVIF/WebP). Sizes: header 56px (48px scrolled and on mobile), footer 64px, company cards 72px. Favicons in `public/` are generated from it. The default Open Graph image is the share card `public/og/natpower-og.jpg` (1200×630, under 150KB; template `scripts/og/og-card.html`).

## Project context

The Natpower Group of Companies has two **sister** companies. They are not parent and subsidiary.

**Legal names:**
1. Natpower Industrial Corporation Limited (Zambia)
2. Natpower Industrial Corporation (Pty) Ltd (South Africa)

**Always pair each company with its country.** The two legal names are nearly identical, so the country must accompany the company name wherever it appears (company cards, footer, office cards, mega-menu, map lists, running copy):
- On cards and office blocks, put an eyebrow label above the name: "ZAMBIA" or "SOUTH AFRICA" (gold-700 for small text on light backgrounds, gold-300 on dark).
- In running text, after the first full mention, use "our Zambian company" / "our South African company".
- The approved logo represents both companies.

1. **Natpower Industrial Corporation Limited (NICL), Zambia**
   - HQ: 1244 York Farm Road, Mariandale Estates, Makeni, Lusaka 10101, Zambia
   - Email: info@natpower.org
   - General enquiries: +260 774 939 719 / +260 961 984 357
   - Sales: +260 773 984 710
   - ZRA TPIN: 2003738214
2. **Natpower Industrial Corporation (Pty) Ltd, South Africa**
   - Based in Kempton Park, Gauteng. The full address and contacts are TBC; use clearly marked placeholders.

**Core business:** Supply of sulphuric acid (98–98.5%), granular sulphur (99.5–99.8% elemental) and silica sand/grit (smelter flux) to mining houses in Zambia, the DRC and Malawi. The group also runs compliant bulk dangerous-goods logistics (specialised acid tankers) and provides mining services (e.g. pit dewatering, acid converting plant support).

**Supply corridor:** Rustenburg smelter source (South Africa) → Walvis Bay, Namibia (sulphur receiving and packing) → Lusaka / Copperbelt, Zambia → DRC and Malawi.

**Clients:** Konkola Copper Mines (Vedanta Resources) and Mimbula Minerals (Moxico Resources).

**Diversified interests (secondary):** Power, Mining, Health, Shipping, Equipment and General Supplies divisions. Equipment range: Mining, Solar, Marine, Healthcare, Agricultural, Airport, Transportation.

**Compliance:**
- ITAC export permits: EXP2026/62348, EXP2026/58863, EXP2025/47633
- ZAMRA import permit WEB26/IPER/RW/0049
- ZEMA 3-year sulphuric acid export permit
- ZEMA Distribution, Storage, Sulphuric Acid Importation, and Pesticide & Toxic Substance licences
- ZRA Income Tax Registration and Tax Clearance Certificate
- MSDS (Sulphuric Acid 98%), Certificate of Analysis (98% industrial grade), Analytical Report (LIMS ID 337302)

**Investors:** The group is pursuing a Lusaka Stock Exchange (LuSE) listing. It has a LuSE Listing Prospectus, a LuSE IPO Investor Prospectus, and a Regional Corporate Office (South Africa) concept document.

**Vision:** We believe in the future of Africa and are proud to help shape it.
**Mission:** Shaping the future of Africa by creating unique value and opportunity for our customers, employees and local economies.
**Values:** Deep, long-term relationships; customers depend on us for their most critical projects; we succeed only when our customers succeed.

**Existing document URLs** (use as Download link targets):
- Foskor Partnership Agreement: http://natpower.org/wp-content/uploads/2026/10/Natpower-Foskor-Partnership-Agreement.pdf
- ITAC EXP2026/62348: http://natpower.org/wp-content/uploads/2026/07/62348.pdf
- ITAC EXP2026/58863: http://natpower.org/wp-content/uploads/2026/07/58863.pdf
- ITAC EXP2025/47633: http://natpower.org/wp-content/uploads/2026/07/47633.pdf
- ZAMRA permit: http://natpower.org/wp-content/uploads/2026/07/Import_Export-Permit.pdf.pdf
- ZEMA Distribution: http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Distribution-Activity-license-.pdf
- ZEMA Storage: http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Storage-Activity-License-.pdf
- ZEMA Importation: http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Sulphuric-Acid-Importation-.pdf
- ZEMA Pesticide & Toxic: http://natpower.org/wp-content/uploads/2026/07/ZEMA-PESTICIDE-AND-TOXIC-SUBSTANCE-LICENSE-1.pdf
- ZRA Income Tax: http://natpower.org/wp-content/uploads/2026/07/NATPOWER-Income_Tax_Reg_Cert2003738214_1026100322689.pdf
- ZRA Tax Clearance: http://natpower.org/wp-content/uploads/2026/07/NATPOWER-TCC-2-2026.pdf
- MSDS: http://natpower.org/wp-content/uploads/2026/07/MSDS-for-Sulphuric-Acid-98.pdf
- Certificate of Analysis: http://natpower.org/wp-content/uploads/2026/07/CoR15_1_A_9458310407.pdf
- Analytical Report: http://natpower.org/wp-content/uploads/2026/07/ACP-COA.pdf
- LuSE Listing Prospectus: http://natpower.org/wp-content/uploads/2026/07/Natpower-Zambia-LuSE-Listing-Prospectus.pdf
- LuSE IPO Investor Prospectus: http://natpower.org/wp-content/uploads/2026/07/Natpower_Zambia_LuSE_IPO_Investor_Prospectus.pdf
- Regional Office Concept: http://natpower.org/wp-content/uploads/2026/07/Natpower-Regional-Corporate-Office-Concept.pdf
- ZEMA 3-year export permit: no file yet. Show a "Document available on request" state.

---

## Design system

### Logo colour reference (never use these directly in the UI)
These values were sampled from the live logo:
- Logo green `#004F11`
- Logo gold mid `#B48400`, highlight `#E4C030`

### Colour tokens (Tailwind theme + CSS variables)
| Token | Hex | Role |
|---|---|---|
| green-950 | `#0A2213` | Primary dark surfaces: scrolled header, stats band, footer |
| green-800 | `#123A20` | Secondary dark surfaces, hover states on dark |
| green-600 | `#145A28` | Brand green: primary buttons, links, active states |
| gold-500 | `#A8843A` | Antique gold accents on light backgrounds |
| gold-300 | `#D6BD7F` | Soft gold accents on dark backgrounds |
| ivory | `#F7F4EC` | Page background |
| white | `#FFFFFF` | Cards, alternating sections |
| stone | `#E4DED0` | Borders and dividers on light backgrounds |
| ink | `#1B1F1C` | Body text |
| muted | `#6A6F68` | Secondary text |

All text must meet WCAG AA contrast. Gold is never used for body text.

### Colour usage rules (strict)
- **Proportion:** ivory and white about 60%, green about 30%, gold 5% or less.
- **Gold is allowed ONLY for:**
  - the 40px × 1px rule above section headings
  - eyebrow labels (11–12px, uppercase, 0.18em tracking)
  - stat numerals
  - 1px link and hover underlines
  - outline buttons on dark backgrounds
  - thin icon strokes
  - the active slider indicator
- **NEVER use:** gold fills on large areas, green→gold gradients, gold body text, drop shadows, glows, bevels, metallic textures, saturated logo green in large blocks, or the sampled logo hexes.
- **No red anywhere in the UI.** There is no "Trending" ticker; recent items live in the News & Media section only.
- **Image overlays:** a linear gradient from green-950 at 75% opacity (bottom or left) to transparent. Never flat black.
- **Buttons:**
  - Primary: green-600 fill, ivory text, 2px max radius, uppercase 13px with 0.12em tracking.
  - On dark backgrounds: 1px gold-300 outline with ivory text; fills green-800 on hover.
  - All hover transitions: 250ms ease.

### Typography (Google Fonts, with system fallbacks)
- **Display and headings:** "Archivo" 600, uppercase, 0.02em letter-spacing, line-height 1.05.
  - Hero: clamp 64–88px
  - H2: 40–48px
  - H3: 22–26px
- **Body:** "Inter" 400/500, 17px, line-height 1.65, ink colour, max-width 65ch.
- **Editorial accent:** "Newsreader" italic. Use it ONLY for the Who We Are lead sentence and pull quotes.
- **Section eyebrows:** every section H2 gets a gold rule and a gold uppercase label above it (e.g. "WHO WE ARE", "OUR OPERATIONS").

### Layout and spacing
- **Container:** 1320px max, 12-column grid, 24px gutters. Side padding is 32px on desktop and 20px on mobile.
- **Section vertical padding:** 128px desktop, 96px tablet, 72px mobile.
- **Section rhythm:** alternate ivory, white and green-950 sections. Never place two dark sections next to each other.
- **Whitespace:** be generous. When unsure, add space rather than content.
- **Images:**
  - Consistent aspect ratios: hero is full-viewport; cards are 4:5 or 3:2.
  - Use object-fit cover, with no rounded corners.
  - On card hover, scale the image to 1.04 over 600ms.
- **Imagery sources:** use existing images from https://natpower.org/wp-content/uploads/ as placeholders where available. Otherwise use neutral stone-coloured placeholders labelled with the intended content.
- **Icons:** Lucide, 1.5px stroke, 24px; gold-500 on light backgrounds, gold-300 on dark.

### Logo
- The approved, final logo is `src/assets/natpower-logo.png` (transparent PNG). Use it as-is in full colour everywhere; do not redraw, recolour or add effects to it. (This supersedes the original brief's temporary raster and SVG-mark instructions.)
- **Header and footer lockup:**
  - The mark at 56px in the header (48px when scrolled and on mobile) and 64px in the footer, with no added effects.
  - Beside it, a text wordmark: "NATPOWER" in Archivo 700 with 0.14em tracking.
  - Beneath that, "GROUP" in Inter 500, 10px, 0.3em tracking: gold-300 on dark backgrounds, gold-500 on light.
- Provide a light-on-dark variant for the transparent header and the footer.

### Motion
- **Scroll reveal:** 24px fade-up over 700ms, easing cubic-bezier(0.22,1,0.36,1), staggered 80ms in grids.
- Disable all motion under `prefers-reduced-motion`.

---

## Copy rules

- Always describe the companies as "sister companies under the Natpower Group". Never use "parent", "subsidiary" or "holding company".
- For experience claims, write "35+ years of combined leadership experience". Never attribute years of experience to the companies themselves.
- Tone: confident, institutional and concise. Use British/South African spelling.
- Fix all typos from the old site ("Mision", "Eelemental", "bu product", "complaince", "insure"). Remove duplicated copy; Vision and Values must not repeat the About text.
