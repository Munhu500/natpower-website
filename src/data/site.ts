/**
 * Natpower Group — single source of truth for all site copy and data.
 * Components must read from here; no copy is hardcoded in components.
 *
 * Anything marked `placeholder: true` or containing "TBC" needs real content
 * before launch. See README.md → "Placeholders" for the full list.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ImageRef {
  /** Image URL or imported asset path. Leave undefined to render a labelled placeholder. */
  src?: string;
  alt: string;
  /** Label shown on the stone placeholder describing the intended photograph. */
  placeholderLabel: string;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
  featured?: { title: string; href: string; image: ImageRef };
}

export interface Office {
  id: string;
  name: string;
  company: string;
  addressLines: string[];
  email?: string;
  phones: { label: string; value: string }[];
  registration?: { label: string; value: string }[];
  placeholder?: boolean;
}

export interface Company {
  id: string;
  shortName: string;
  legalName: string;
  country: string;
  role: string;
  location: string;
  href: string;
  hrefPlaceholder: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroSlide {
  lines: [string, string];
  href: string;
  linkLabel: string;
  image: ImageRef;
}

export interface Product {
  id: string;
  name: string;
  spec: string;
  summary: string;
  specs: { label: string; value: string }[];
  packaging: string[];
  handling: string;
  image: ImageRef;
}

export type DocCategory = 'permits' | 'licences' | 'tax' | 'product' | 'investor';

export interface DocumentItem {
  id: string;
  title: string;
  issuer: string;
  reference: string;
  category: DocCategory;
  /** null = no file yet; renders "Document available on request". */
  url: string | null;
}

export interface NewsItem {
  id: string;
  date: string;
  location: string;
  title: string;
  excerpt: string;
  href: string;
  image: ImageRef;
}

export interface Division {
  id: string;
  title: string;
  icon: 'zap' | 'pickaxe' | 'heart-pulse' | 'ship' | 'wrench' | 'package';
  summary: string;
  description: string;
}

export interface MapPin {
  id: number;
  name: string;
  country: string;
  /** Longitude / latitude in decimal degrees. */
  lon: number;
  lat: number;
}

export interface OperationsTab {
  id: string;
  label: string;
  intro: string;
  items: { pin: number; title: string; text: string }[];
}

export interface Leader {
  name: string;
  title: string;
  image: ImageRef;
}

export interface GalleryItem {
  caption: string;
  image: ImageRef;
}

// ---------------------------------------------------------------------------
// Group
// ---------------------------------------------------------------------------

export const group = {
  name: 'Natpower Group',
  legalName: 'Natpower Group of Companies',
  tagline: 'Industrial chemicals, logistics and mining services for southern and central Africa.',
  footerDescription:
    'Two sister companies under the Natpower Group, supplying industrial chemicals and compliant bulk logistics to mining houses across southern and central Africa.',
  email: 'info@natpower.org',
  copyright: '© 2026 Natpower Group of Companies. All rights reserved.',
  experienceClaim: '35+ years of combined leadership experience',
  quoteHref: '/contact?enquiry=sales#enquiry',
  logo: {
    alt: 'Natpower Group logo',
  },
} as const;

export const seo = {
  defaultTitle: 'Natpower Group — Industrial Chemicals for Africa’s Mines',
  titleSuffix: ' — Natpower Group',
  defaultDescription:
    'The Natpower Group supplies sulphuric acid, granular sulphur and silica sand to mining houses in Zambia, the DRC and Malawi, supported by compliant dangerous-goods logistics.',
};

// ---------------------------------------------------------------------------
// Companies & offices
// ---------------------------------------------------------------------------

export const companies: Company[] = [
  {
    id: 'nicl',
    shortName: 'NICL',
    legalName: 'Natpower Industrial Corporation Limited',
    country: 'Zambia',
    location: 'Lusaka, Zambia',
    role: 'Supply of industrial chemicals, bulk logistics and mining services to mining houses in Zambia, the DRC and Malawi.',
    href: '#',
    hrefPlaceholder: true,
  },
  {
    id: 'natpower-sa',
    shortName: 'Natpower (Pty) Ltd',
    legalName: 'Natpower (Pty) Ltd',
    country: 'South Africa',
    location: 'Kempton Park, Gauteng',
    role: 'Regional sourcing, export permitting and corridor coordination from South Africa.',
    href: '#',
    hrefPlaceholder: true,
  },
];

export const offices: Office[] = [
  {
    id: 'lusaka',
    name: 'Lusaka Office',
    company: 'Natpower Industrial Corporation Limited',
    addressLines: ['1244 York Farm Road', 'Mariandale Estates, Makeni', 'Lusaka 10101, Zambia'],
    email: 'info@natpower.org',
    phones: [
      { label: 'General enquiries', value: '+260 774 939 719' },
      { label: 'General enquiries', value: '+260 961 984 357' },
      { label: 'Sales', value: '+260 773 984 710' },
    ],
    registration: [{ label: 'ZRA TPIN', value: '2003738214' }],
  },
  {
    id: 'kempton-park',
    name: 'Kempton Park Office',
    company: 'Natpower (Pty) Ltd',
    addressLines: ['[Street address TBC]', '[Suburb TBC], Kempton Park', 'Gauteng [Postal code TBC], South Africa'],
    email: '[Email TBC]',
    phones: [
      { label: 'General enquiries', value: '[+27 phone TBC]' },
      { label: 'Sales', value: '[+27 phone TBC]' },
    ],
    placeholder: true,
  },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Natpower Group', href: '/about#group', description: 'Who we are and what we stand for' },
      { label: 'Our Companies', href: '/about#companies', description: 'Two sister companies, one group' },
      { label: 'Leadership', href: '/about#leadership', description: 'The team guiding the group' },
    ],
    featured: {
      title: 'Two companies. One group.',
      href: '/about#companies',
      image: { alt: 'Natpower team on site', placeholderLabel: 'Photo: team on site' },
    },
  },
  {
    label: 'Operations',
    href: '/operations',
    children: [
      { label: 'Products', href: '/operations#products', description: 'Sulphuric acid, sulphur and silica sand' },
      { label: 'Logistics & Dangerous Goods', href: '/operations#logistics', description: 'Specialised acid tanker fleet' },
      { label: 'Mining Services', href: '/operations#mining-services', description: 'Dewatering and plant support' },
    ],
    featured: {
      title: 'The southern African supply corridor',
      href: '/#operations',
      image: { alt: 'Acid tanker on the supply corridor', placeholderLabel: 'Photo: acid tanker on corridor' },
    },
  },
  { label: 'Diversified Interests', href: '/diversified-interests' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Investors', href: '/investors' },
  {
    label: 'News & Media',
    href: '/news-media',
    children: [
      { label: 'News', href: '/news-media#news', description: 'Announcements and milestones' },
      { label: 'Gallery', href: '/news-media#gallery', description: 'Operations in pictures' },
    ],
    featured: {
      title: 'Natpower pursues LuSE listing',
      href: '/investors',
      image: { alt: 'Lusaka Stock Exchange', placeholderLabel: 'Photo: Lusaka skyline' },
    },
  },
  { label: 'Contact', href: '/contact' },
];

export const sitemap: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Operations', href: '/operations' },
  { label: 'Diversified Interests', href: '/diversified-interests' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Investors', href: '/investors' },
  { label: 'News & Media', href: '/news-media' },
  { label: 'Contact', href: '/contact' },
];

export const ui = {
  getQuote: 'Get a Quote',
  learnMore: 'Learn more',
  download: 'Download',
  onRequest: 'Document available on request',
  requestDocument: 'Request document',
  seeAllNews: 'See all news',
  viewAll: 'View all',
  menu: 'Menu',
  close: 'Close',
  overview: 'Overview',
  skipToContent: 'Skip to content',
  previousSlide: 'Previous slide',
  nextSlide: 'Next slide',
  groupLabel: 'GROUP',
  footerColumns: {
    companies: 'Group Companies',
    sitemap: 'Sitemap',
  },
  visit: 'Visit website',
  pdf: 'PDF',
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const heroSlides: HeroSlide[] = [
  {
    lines: ['Industrial chemicals', 'for Africa’s mines'],
    href: '/operations#products',
    linkLabel: 'Learn more',
    image: { alt: 'Sulphuric acid storage at a mining operation', placeholderLabel: 'Hero photo: acid plant / mine site' },
  },
  {
    lines: ['Compliant. Certified.', 'Delivered.'],
    href: '/compliance',
    linkLabel: 'Learn more',
    image: { alt: 'Specialised dangerous-goods tanker on the road', placeholderLabel: 'Hero photo: acid tanker fleet' },
  },
  {
    lines: ['Two companies.', 'One group.'],
    href: '/about#companies',
    linkLabel: 'Learn more',
    image: { alt: 'Natpower offices in Lusaka and Kempton Park', placeholderLabel: 'Hero photo: Lusaka / Kempton Park' },
  },
  {
    lines: ['Shaping the future', 'of Africa'],
    href: '/about',
    linkLabel: 'Learn more',
    image: { alt: 'Copperbelt landscape at dusk', placeholderLabel: 'Hero photo: Copperbelt landscape' },
  },
];

export const whoWeAre = {
  eyebrow: 'Who We Are',
  heading: 'A group built for Africa’s mining industry',
  lead: 'We believe in the future of Africa, and we are proud to help shape it.',
  paragraphs: [
    'The Natpower Group supplies the industrial chemicals that keep southern and central Africa’s mines in production. We deliver sulphuric acid, granular sulphur and silica sand to mining houses in Zambia, the DRC and Malawi, backed by compliant bulk dangerous-goods logistics and specialist mining services.',
    'The group brings together two sister companies: Natpower Industrial Corporation Limited in Lusaka, Zambia, and Natpower (Pty) Ltd in Kempton Park, South Africa. Together they manage the full corridor from source to site, guided by 35+ years of combined leadership experience.',
  ],
  link: { label: 'About the group', href: '/about' },
  image: { alt: 'Close detail of granular sulphur', placeholderLabel: 'Textured photo: granular sulphur close-up' } as ImageRef,
};

export const stats: Stat[] = [
  { value: '98.5%', label: 'Sulphuric acid purity' },
  { value: '99.5%+', label: 'Granular sulphur purity' },
  { value: '9+', label: 'Permits & licences held' },
  { value: '35+', label: 'Years of combined leadership experience' },
];

export const statsSection = { eyebrow: 'At a Glance', heading: 'The group in numbers' };

export const mapPins: MapPin[] = [
  { id: 1, name: 'Rustenburg', country: 'South Africa', lon: 27.24, lat: -25.67 },
  { id: 2, name: 'Kempton Park', country: 'South Africa', lon: 28.23, lat: -26.1 },
  { id: 3, name: 'Walvis Bay', country: 'Namibia', lon: 14.5, lat: -22.96 },
  { id: 4, name: 'Lusaka', country: 'Zambia', lon: 28.28, lat: -15.42 },
  { id: 5, name: 'Copperbelt', country: 'Zambia', lon: 28.2, lat: -12.8 },
  { id: 6, name: 'Lubumbashi', country: 'DRC', lon: 27.48, lat: -11.66 },
  { id: 7, name: 'Lilongwe', country: 'Malawi', lon: 33.78, lat: -13.97 },
];

export const operationsSection = {
  eyebrow: 'Our Operations',
  heading: 'From source to site',
  mapLabel: 'Stylised map of southern Africa showing Natpower locations and the supply corridor',
  tabs: [
    {
      id: 'companies',
      label: 'Our Companies',
      intro: 'Two sister companies operating either end of the corridor.',
      items: [
        { pin: 4, title: 'Natpower Industrial Corporation Limited', text: 'Headquarters in Makeni, Lusaka. Sales, distribution and mining services.' },
        { pin: 2, title: 'Natpower (Pty) Ltd', text: 'Kempton Park, Gauteng. Regional sourcing and export coordination.' },
      ],
    },
    {
      id: 'corridor',
      label: 'Supply Corridor',
      intro: 'A controlled route from smelter to mine.',
      items: [
        { pin: 1, title: 'Rustenburg, South Africa', text: 'Smelter source for sulphuric acid.' },
        { pin: 3, title: 'Walvis Bay, Namibia', text: 'Sulphur receiving and packing.' },
        { pin: 4, title: 'Lusaka, Zambia', text: 'Group headquarters and distribution hub.' },
        { pin: 5, title: 'Copperbelt, Zambia', text: 'Delivery to mining houses and onward routing.' },
      ],
    },
    {
      id: 'markets',
      label: 'Markets',
      intro: 'Serving mining houses across three countries.',
      items: [
        { pin: 5, title: 'Zambia', text: 'Copperbelt and North-Western mining operations.' },
        { pin: 6, title: 'Democratic Republic of the Congo', text: 'Lubumbashi and the Katanga copper belt.' },
        { pin: 7, title: 'Malawi', text: 'Industrial and mining customers via Lilongwe.' },
      ],
    },
  ] as OperationsTab[],
  /** Pin ids joined in order to draw the corridor route. */
  corridorRoutes: [
    [1, 3, 4, 5, 6],
    [4, 7],
  ],
};

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const productsSection = {
  eyebrow: 'Products',
  heading: 'Industrial chemicals for mining',
  intro: 'Three core products, specified for hydrometallurgical and smelting operations.',
};

export const products: Product[] = [
  {
    id: 'sulphuric-acid',
    name: 'Sulphuric Acid',
    spec: '98–98.5% H₂SO₄ · Industrial grade',
    summary: 'High-purity sulphuric acid for leaching and solvent-extraction operations, sourced from smelter production.',
    specs: [
      { label: 'Concentration', value: '98–98.5% H₂SO₄' },
      { label: 'Grade', value: 'Industrial' },
      { label: 'Source', value: 'Smelter by-product, Rustenburg' },
      { label: 'Documentation', value: 'MSDS, Certificate of Analysis' },
    ],
    packaging: ['Bulk road tankers', 'Floor bins (on request)'],
    handling: 'Classified as a dangerous good (UN 1830, Class 8). Transported only in specialised acid tankers by trained crews under ZEMA licence.',
    image: { alt: 'Sulphuric acid storage tanks', placeholderLabel: 'Photo: acid storage tanks' },
  },
  {
    id: 'granular-sulphur',
    name: 'Granular Sulphur',
    spec: '99.5–99.8% elemental sulphur',
    summary: 'Granular elemental sulphur for acid production and processing, received and packed at Walvis Bay.',
    specs: [
      { label: 'Purity', value: '99.5–99.8% elemental' },
      { label: 'Form', value: 'Granular' },
      { label: 'Receiving', value: 'Walvis Bay, Namibia' },
    ],
    packaging: ['Bulk', 'One-ton bags', 'Floor bins'],
    handling: 'Stored dry and covered. Handled to minimise dust and kept away from ignition sources.',
    image: { alt: 'Granular sulphur in one-ton bags', placeholderLabel: 'Photo: granular sulphur / one-ton bags' },
  },
  {
    id: 'silica-sand',
    name: 'Silica Sand & Grit',
    spec: 'Smelter flux grade',
    summary: 'Silica sand and grit used as flux in copper smelting.',
    specs: [
      { label: 'Application', value: 'Smelter flux' },
      { label: 'Form', value: 'Sand and grit' },
      { label: 'Grading', value: '[Specification TBC]' },
    ],
    packaging: ['Bulk', 'One-ton bags'],
    handling: 'Delivered dry. Respiratory protection recommended when handling fine material.',
    image: { alt: 'Silica sand stockpile', placeholderLabel: 'Photo: silica sand stockpile' },
  },
];

// ---------------------------------------------------------------------------
// Compliance
// ---------------------------------------------------------------------------

export const complianceBand = {
  eyebrow: 'Compliance',
  heading: 'Responsible. Compliant. Trusted.',
  text: 'Every consignment is backed by current export, import and environmental permits, tax clearance and full product documentation, held and renewed in the group’s name.',
  regulators: ['ZEMA', 'ITAC', 'ZAMRA', 'ZRA'],
  cta: { label: 'View Compliance Library', href: '/compliance' },
  image: { alt: 'Dangerous-goods signage on a tanker', placeholderLabel: 'Photo: hazmat placard on tanker' } as ImageRef,
};

export const regulators: Record<string, string> = {
  ITAC: 'International Trade Administration Commission of South Africa',
  ZAMRA: 'Zambia Medicines Regulatory Authority',
  ZEMA: 'Zambia Environmental Management Agency',
  ZRA: 'Zambia Revenue Authority',
};

export const documentCategories: { id: DocCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'permits', label: 'Permits' },
  { id: 'licences', label: 'Licences' },
  { id: 'tax', label: 'Tax' },
  { id: 'product', label: 'Product Data' },
];

export const documents: DocumentItem[] = [
  { id: 'itac-62348', title: 'Export Permit', issuer: 'ITAC', reference: 'EXP2026/62348', category: 'permits', url: 'http://natpower.org/wp-content/uploads/2026/07/62348.pdf' },
  { id: 'itac-58863', title: 'Export Permit', issuer: 'ITAC', reference: 'EXP2026/58863', category: 'permits', url: 'http://natpower.org/wp-content/uploads/2026/07/58863.pdf' },
  { id: 'itac-47633', title: 'Export Permit', issuer: 'ITAC', reference: 'EXP2025/47633', category: 'permits', url: 'http://natpower.org/wp-content/uploads/2026/07/47633.pdf' },
  { id: 'zamra', title: 'Import Permit', issuer: 'ZAMRA', reference: 'WEB26/IPER/RW/0049', category: 'permits', url: 'http://natpower.org/wp-content/uploads/2026/07/Import_Export-Permit.pdf.pdf' },
  { id: 'zema-export', title: 'Sulphuric Acid Export Permit (3-year)', issuer: 'ZEMA', reference: '[Reference TBC]', category: 'permits', url: null },
  { id: 'zema-distribution', title: 'Distribution Licence', issuer: 'ZEMA', reference: 'Distribution activity', category: 'licences', url: 'http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Distribution-Activity-license-.pdf' },
  { id: 'zema-storage', title: 'Storage Licence', issuer: 'ZEMA', reference: 'Storage activity', category: 'licences', url: 'http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Storage-Activity-License-.pdf' },
  { id: 'zema-importation', title: 'Sulphuric Acid Importation Licence', issuer: 'ZEMA', reference: 'Sulphuric acid importation', category: 'licences', url: 'http://natpower.org/wp-content/uploads/2026/07/Nat-Power-Sulphuric-Acid-Importation-.pdf' },
  { id: 'zema-pesticide', title: 'Pesticide & Toxic Substance Licence', issuer: 'ZEMA', reference: 'Pesticides and toxic substances', category: 'licences', url: 'http://natpower.org/wp-content/uploads/2026/07/ZEMA-PESTICIDE-AND-TOXIC-SUBSTANCE-LICENSE-1.pdf' },
  { id: 'zra-income-tax', title: 'Income Tax Registration Certificate', issuer: 'ZRA', reference: 'TPIN 2003738214', category: 'tax', url: 'http://natpower.org/wp-content/uploads/2026/07/NATPOWER-Income_Tax_Reg_Cert2003738214_1026100322689.pdf' },
  { id: 'zra-tcc', title: 'Tax Clearance Certificate', issuer: 'ZRA', reference: 'TCC 2026', category: 'tax', url: 'http://natpower.org/wp-content/uploads/2026/07/NATPOWER-TCC-2-2026.pdf' },
  { id: 'msds', title: 'Material Safety Data Sheet', issuer: 'Product data', reference: 'Sulphuric Acid 98%', category: 'product', url: 'http://natpower.org/wp-content/uploads/2026/07/MSDS-for-Sulphuric-Acid-98.pdf' },
  { id: 'coa', title: 'Certificate of Analysis', issuer: 'Product data', reference: '98% industrial grade', category: 'product', url: 'http://natpower.org/wp-content/uploads/2026/07/CoR15_1_A_9458310407.pdf' },
  { id: 'analytical-report', title: 'Analytical Report', issuer: 'Product data', reference: 'LIMS ID 337302', category: 'product', url: 'http://natpower.org/wp-content/uploads/2026/07/ACP-COA.pdf' },
];

export const investorDocuments: DocumentItem[] = [
  { id: 'luse-listing', title: 'LuSE Listing Prospectus', issuer: 'Natpower Zambia', reference: 'Lusaka Stock Exchange', category: 'investor', url: 'http://natpower.org/wp-content/uploads/2026/07/Natpower-Zambia-LuSE-Listing-Prospectus.pdf' },
  { id: 'luse-ipo', title: 'LuSE IPO Investor Prospectus', issuer: 'Natpower Zambia', reference: 'Initial public offering', category: 'investor', url: 'http://natpower.org/wp-content/uploads/2026/07/Natpower_Zambia_LuSE_IPO_Investor_Prospectus.pdf' },
  { id: 'regional-office', title: 'Regional Corporate Office Concept', issuer: 'Natpower Group', reference: 'South Africa', category: 'investor', url: 'http://natpower.org/wp-content/uploads/2026/07/Natpower-Regional-Corporate-Office-Concept.pdf' },
];

export const partnershipDocument = {
  title: 'Natpower & Foskor Partnership Agreement',
  url: 'http://natpower.org/wp-content/uploads/2026/10/Natpower-Foskor-Partnership-Agreement.pdf',
};

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export const trustedBy = {
  eyebrow: 'Trusted By',
  heading: 'Supplying Africa’s leading mining houses',
  clients: [
    { name: 'Konkola Copper Mines', owner: 'Vedanta Resources', placeholderLabel: 'KCM logo' },
    { name: 'Mimbula Minerals', owner: 'Moxico Resources', placeholderLabel: 'Mimbula Minerals logo' },
  ],
};

// ---------------------------------------------------------------------------
// News & gallery
// ---------------------------------------------------------------------------

export const newsSection = { eyebrow: 'News & Media', heading: 'Latest from the group' };

/** Dates and locations are placeholders inferred from document upload dates. Confirm before launch. */
export const news: NewsItem[] = [
  {
    id: 'foskor',
    date: 'October 2026',
    location: 'South Africa',
    title: 'Natpower & Foskor Partnership Agreement',
    excerpt: 'The group has signed a partnership agreement with Foskor, strengthening long-term supply into the corridor.',
    href: partnershipDocument.url,
    image: { alt: 'Partnership signing', placeholderLabel: 'Photo: partnership signing' },
  },
  {
    id: 'luse',
    date: 'July 2026',
    location: 'Lusaka, Zambia',
    title: 'Natpower pursues Lusaka Stock Exchange listing',
    excerpt: 'Natpower Zambia has published its LuSE listing and IPO investor prospectuses.',
    href: '/investors',
    image: { alt: 'Lusaka city centre', placeholderLabel: 'Photo: Lusaka / LuSE' },
  },
  {
    id: 'itac',
    date: 'July 2026',
    location: 'Pretoria, South Africa',
    title: 'ITAC export permit EXP2026/62348 renewed',
    excerpt: 'The International Trade Administration Commission has renewed the group’s sulphuric acid export permit.',
    href: '/compliance',
    image: { alt: 'Export documentation', placeholderLabel: 'Photo: tanker at border post' },
  },
];

/** TODO: replace with captions from the old natpower.org gallery (site unreachable during build). */
export const gallery: GalleryItem[] = [
  { caption: 'Acid tanker fleet loading at the Rustenburg source', image: { alt: 'Acid tankers loading', placeholderLabel: 'Gallery: tankers loading' } },
  { caption: 'Granular sulphur packed into one-ton bags at Walvis Bay', image: { alt: 'Sulphur bagging', placeholderLabel: 'Gallery: sulphur bagging' } },
  { caption: 'Sulphuric acid delivery to a Copperbelt mining house', image: { alt: 'Acid delivery at a mine', placeholderLabel: 'Gallery: delivery on site' } },
  { caption: 'Pit dewatering pumps in operation', image: { alt: 'Dewatering pumps', placeholderLabel: 'Gallery: dewatering pumps' } },
  { caption: 'Acid converting plant support team', image: { alt: 'Plant support team', placeholderLabel: 'Gallery: plant support team' } },
  { caption: 'Natpower head office, Makeni, Lusaka', image: { alt: 'Lusaka head office', placeholderLabel: 'Gallery: Lusaka office' } },
];

export const galleryCaptionsArePlaceholders = true;

// ---------------------------------------------------------------------------
// Diversified interests
// ---------------------------------------------------------------------------

export const divisionsSection = {
  eyebrow: 'Diversified Interests',
  heading: 'Beyond industrial chemicals',
  intro: 'Alongside its core business, the group holds interests in six divisions serving Africa’s growth.',
  link: { label: 'Explore our divisions', href: '/diversified-interests' },
};

export const divisions: Division[] = [
  { id: 'power', title: 'Power', icon: 'zap', summary: 'Energy generation and supply.', description: 'Developing power solutions, including solar, for industrial sites and communities.' },
  { id: 'mining', title: 'Mining', icon: 'pickaxe', summary: 'Mining services and supply.', description: 'Supporting mine operations with dewatering, plant support and consumables.' },
  { id: 'health', title: 'Health', icon: 'heart-pulse', summary: 'Healthcare supply.', description: 'Sourcing and supplying medical equipment and consumables to healthcare providers.' },
  { id: 'shipping', title: 'Shipping', icon: 'ship', summary: 'Freight and port services.', description: 'Coordinating sea freight and port handling through Walvis Bay and regional ports.' },
  { id: 'equipment', title: 'Equipment', icon: 'wrench', summary: 'Specialist equipment supply.', description: 'Supplying equipment across seven sectors, from mining and solar to airports.' },
  { id: 'general-supplies', title: 'General Supplies', icon: 'package', summary: 'Procurement and supply.', description: 'Procurement of general goods and materials for corporate and public-sector clients.' },
];

export const equipmentRange = {
  heading: 'Equipment range',
  intro: 'The Equipment division supplies across seven categories.',
  categories: ['Mining', 'Solar', 'Marine', 'Healthcare', 'Agricultural', 'Airport', 'Transportation'],
};

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

export const ctaBand = {
  eyebrow: 'Work With Us',
  heading: 'Partner with Natpower',
  text: 'Talk to our sales team about supply, logistics or mining services.',
  image: { alt: 'Mine site at dusk', placeholderLabel: 'Photo: mine site at dusk' } as ImageRef,
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const aboutPage = {
  hero: {
    eyebrow: 'About',
    title: 'The Natpower Group',
    image: { alt: 'Natpower operations', placeholderLabel: 'Page hero: group operations' } as ImageRef,
  },
  overview: {
    eyebrow: 'Natpower Group',
    heading: 'Supplying the industries that build Africa',
    lead: 'Two sister companies under the Natpower Group, working as one across the southern African corridor.',
    paragraphs: [
      'The Natpower Group supplies sulphuric acid, granular sulphur and silica sand to mining houses in Zambia, the DRC and Malawi. Our clients include Konkola Copper Mines (Vedanta Resources) and Mimbula Minerals (Moxico Resources).',
      'We control each stage of supply, from smelter source in South Africa to delivery on site, through compliant bulk dangerous-goods logistics. The group also provides mining services, including pit dewatering and acid converting plant support.',
    ],
  },
  companies: {
    eyebrow: 'Our Companies',
    heading: 'Two sister companies',
    intro: 'Natpower Industrial Corporation Limited and Natpower (Pty) Ltd are sister companies under the Natpower Group.',
  },
  principles: {
    eyebrow: 'What Guides Us',
    heading: 'Vision, mission and values',
    items: [
      { title: 'Vision', text: 'We believe in the future of Africa and are proud to help shape it.' },
      { title: 'Mission', text: 'Shaping the future of Africa by creating unique value and opportunity for our customers, employees and local economies.' },
      { title: 'Values', text: 'We build deep, long-term relationships. Our customers depend on us for their most critical projects, and we succeed only when they succeed.' },
    ],
  },
  leadership: {
    eyebrow: 'Leadership',
    heading: 'Leadership team',
    intro: '35+ years of combined leadership experience across mining supply, logistics and finance.',
  },
};

export const leaders: Leader[] = Array.from({ length: 6 }, (_, i) => ({
  name: `[Leader name ${i + 1}]`,
  title: '[Job title]',
  image: { alt: `Portrait of leader ${i + 1}`, placeholderLabel: 'Portrait photo' },
}));

// ---------------------------------------------------------------------------
// Operations page
// ---------------------------------------------------------------------------

export const operationsPage = {
  hero: {
    eyebrow: 'Operations',
    title: 'Products, logistics and mining services',
    image: { alt: 'Acid tanker on the corridor', placeholderLabel: 'Page hero: tanker on corridor' } as ImageRef,
  },
  products: { eyebrow: 'Products', heading: 'Our products', specsLabel: 'Specifications', packagingLabel: 'Packaging', handlingLabel: 'Handling' },
  logistics: {
    eyebrow: 'Logistics & Dangerous Goods',
    heading: 'Compliant bulk logistics',
    lead: 'Sulphuric acid is a Class 8 dangerous good. We move it with the care it demands.',
    blocks: [
      { title: 'Specialised tankers', text: 'A fleet of acid-rated road tankers built for corrosive bulk liquids, crewed by drivers trained in dangerous-goods handling.' },
      { title: 'Full compliance', text: 'Every load travels under current ITAC export permits, ZAMRA import permits and ZEMA licences, with MSDS documentation on board.' },
      { title: 'Delivery to PLC mining houses', text: 'Scheduled deliveries to publicly listed mining houses across Zambia, the DRC and Malawi, with border clearance managed end to end.' },
    ],
    image: { alt: 'Acid tanker fleet', placeholderLabel: 'Photo: tanker fleet' } as ImageRef,
  },
  miningServices: {
    eyebrow: 'Mining Services',
    heading: 'Mining services',
    lead: 'On-site support that keeps operations running.',
    blocks: [
      { title: 'Pit dewatering', text: 'Pumping solutions that keep open pits and underground workings dry and productive.' },
      { title: 'Acid converting plant support', text: 'Technical and operational support for acid converting plants, from commissioning to routine maintenance.' },
    ],
    image: { alt: 'Dewatering pumps at an open pit', placeholderLabel: 'Photo: pit dewatering' } as ImageRef,
  },
};

// ---------------------------------------------------------------------------
// Other pages
// ---------------------------------------------------------------------------

export const diversifiedPage = {
  hero: {
    eyebrow: 'Diversified Interests',
    title: 'Six divisions, one group',
    image: { alt: 'Solar installation', placeholderLabel: 'Page hero: solar / equipment' } as ImageRef,
  },
};

export const compliancePage = {
  hero: {
    eyebrow: 'Compliance',
    title: 'Compliance library',
    image: { alt: 'Dangerous-goods tanker', placeholderLabel: 'Page hero: hazmat tanker' } as ImageRef,
  },
  intro: {
    eyebrow: 'Permits & Licences',
    heading: 'Responsible, compliant, trusted',
    text: 'The group holds current permits and licences across South Africa, Namibia and Zambia. Download the documents below, or contact us for anything not listed.',
  },
  filterLabel: 'Filter documents',
};

export const investorsPage = {
  hero: {
    eyebrow: 'Investors',
    title: 'Lusaka Stock Exchange listing',
    image: { alt: 'Lusaka skyline', placeholderLabel: 'Page hero: Lusaka skyline' } as ImageRef,
  },
  overview: {
    eyebrow: 'LuSE Listing',
    heading: 'Investing in the corridor',
    lead: 'Natpower Zambia is pursuing a listing on the Lusaka Stock Exchange.',
    paragraphs: [
      'The listing will give investors access to a growing supplier of essential industrial chemicals to the Zambian, Congolese and Malawian mining sectors.',
      'The prospectuses below set out the offer, the group’s operations and its growth strategy, including the proposed regional corporate office in South Africa.',
    ],
  },
  documents: { eyebrow: 'Documents', heading: 'Investor documents' },
  contact: { label: 'Investor enquiries', href: '/contact?enquiry=investor#enquiry' },
};

export const newsPage = {
  hero: {
    eyebrow: 'News & Media',
    title: 'News & media',
    image: { alt: 'Natpower operations', placeholderLabel: 'Page hero: operations' } as ImageRef,
  },
  news: { eyebrow: 'News', heading: 'Announcements' },
  gallery: { eyebrow: 'Gallery', heading: 'Operations in pictures' },
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    image: { alt: 'Lusaka office', placeholderLabel: 'Page hero: Lusaka office' } as ImageRef,
  },
  offices: { eyebrow: 'Our Offices', heading: 'Offices' },
  form: {
    eyebrow: 'Enquiries',
    heading: 'Send an enquiry',
    note: 'This form is not yet connected. Please email info@natpower.org in the meantime.',
    submit: 'Send enquiry',
    fields: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      country: 'Country',
      enquiryType: 'Enquiry type',
      message: 'Message',
    },
    enquiryTypes: [
      { value: 'general', label: 'General' },
      { value: 'sales', label: 'Sales' },
      { value: 'investor', label: 'Investor' },
    ],
    countries: ['Zambia', 'Democratic Republic of the Congo', 'Malawi', 'South Africa', 'Namibia', 'Other'],
  },
  map: { label: 'Map placeholder: 1244 York Farm Road, Makeni, Lusaka' },
};

export const notFoundPage = {
  eyebrow: 'Error 404',
  heading: 'Page not found',
  text: 'The page you are looking for has moved or does not exist.',
  link: { label: 'Back to home', href: '/' },
};
