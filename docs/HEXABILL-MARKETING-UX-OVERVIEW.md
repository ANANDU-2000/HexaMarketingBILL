# HexaBill Marketing Site — UX & Flow Overview

**Purpose:** UAE/Gulf B2B billing & distribution software (HexaBill). The site converts visitors into demo requests and WhatsApp conversations.

---

## 1. What the site does (value prop)

- **Audience:** B2B distributors in UAE/GCC (owners, GMs, admins, sales staff).
- **Offer:** Billing software with UAE VAT, credit aging, route sales, multi-branch P&L — “not generic invoicing.”
- **Conversion:** “Get Demo Login” and “WhatsApp the Founder” on every key screen.
- **Trust:** “We work with 3 distributors in the Gulf,” “Reply within 2 hours on UAE business days.”

---

## 2. Current workflow (top-level user journey)

```
Land (/) → Scroll or nav → See Pain → Solution → Features → Roles → Proof → Pricing → Demo/FAQ
           ↓
    Nav: Features | Pricing | Blog | Demo
           ↓
    From any page: Book Demo (CTA) or WhatsApp float (bottom-right)
```

- **Primary path:** Home scroll → understand product → Pricing → **Demo** or **WhatsApp**.
- **Secondary paths:** Features list → feature detail → Demo/WhatsApp; Blog → article → Demo/WhatsApp; Location pages (Dubai, Sharjah, etc.) → Demo/Home.

---

## 3. Pages and routes

| Route | Purpose | Main CTA / exit |
|-------|--------|------------------|
| `/` | Home (full funnel) | Demo, WhatsApp, scroll to #demo |
| `/features` | Feature pillars + cards | Per feature → `/features/[slug]`, Demo, WhatsApp |
| `/features/[slug]` | Single feature deep-dive | “Book Demo”, WhatsApp, back to Features |
| `/#pricing` | Pricing on home (section) | “Get Demo Login” |
| `/pricing` | Standalone pricing page | Same as above |
| `/demo` | Demo request + WhatsApp | Form → WhatsApp, or direct WhatsApp |
| `/blog` | Blog list | Post → `/blog/[slug]` |
| `/blog/[slug]` | Blog post | Demo, WhatsApp, back to Blog / feature |
| `/billing-software-dubai` (etc.) | Location/SEO pages | Demo, Home |
| `/terms`, `/privacy` | Legal | Home, Contact (#demo) |
| `/ar` | Arabic landing | Link back to EN home |

---

## 4. Home page sections (order and UX role)

| Section | ID | What it does (UX) |
|--------|----|--------------------|
| **Hero** | — | Headline + subhead, **screenshot/video**, “Get Demo Login” + “WhatsApp the Founder”, trust strip. Scroll hint: `#pain`. |
| **Pain** | `#pain` | “Your Business Is Growing. But Your Control Is Slipping.” Pain cards; CTA “See how we fix this” → `#solution`. |
| **Solution** | `#solution` | “Complete Distribution Control.” Six pillars (Credit, VAT, Dashboard, Routes, Inventory, Staff). Each links to **on-page anchor** `#feature-credit`, `#feature-vat`, etc. |
| **Features** | `#features` | Six feature blocks (same six). Each block: **screenshot**, bullets, “See full feature →” to `/features/[slug]`. Anchors: `#feature-dashboard`, `#feature-credit`, `#feature-vat`, `#feature-routes`, `#feature-inventory`, `#feature-staff`. |
| **Key Benefits** | `#benefits` | Four benefits: Faster invoicing, Automatic stock updates, Real-time profit tracking, VAT-ready reports. |
| **Who It's For** | `#who-its-for` | Frozen food distributors, FMCG wholesalers, Restaurant suppliers, Warehouse trading companies. |
| **Roles** | `#roles` | Tabs: Owner / Admin / Sales. Per role: statement, **screenshot**, benefits, CTA → `#feature-reports`, `#feature-credit`, or `/demo`. |
| **Proof** | `#proof` | Stats bar + “What Gulf Distributors Say” (testimonials) + trust badges. |
| **Pricing** | `#pricing` | “Simple plans for Gulf distributors.” Three plan cards (Basic, Pro, Enterprise) + comparison table + “Get Demo Login” → `/demo`. |
| **Demo** | `#demo` | Headline, form (then opens WhatsApp), or “WhatsApp the Founder” directly. Team initials + names. |
| **FAQ** | — | FAQ section (schema for SEO). |

---

## 5. User flows and main clicks (from → to)

| From | Click / action | To |
|------|----------------|----|
| **Navbar** | Features | `/features` |
| | Pricing | `/#pricing` |
| | Blog | `/blog` |
| | Book Demo | `/demo` |
| **Hero** | Get Demo Login | `/demo` |
| | WhatsApp the Founder | WhatsApp (new tab) |
| | Scroll hint | `#pain` |
| **Pain** | See how we fix this | `#solution` |
| **Solution** | Each pillar “Open section →” | `#feature-credit` / `#feature-vat` / … (same-page anchor) |
| **Feature block (home)** | See full feature → | `/features/owner-dashboard` … `/features/staff-audit` |
| **Roles** | See reports & profit → | `#feature-reports` |
| | See the customer ledger → | `#feature-credit` |
| | Try it now → | `/demo` |
| **Pricing** | Get Demo Login (section CTA) | `/demo` |
| | Plan “Start on Basic/Pro” or “WhatsApp” | `/demo` or WhatsApp (Enterprise) |
| **Demo section** | Form submit | WhatsApp with prefill |
| | WhatsApp the Founder | WhatsApp |
| **Footer** | Product: Features, Pricing, Demo, Blog | Respective pages |
| | Locations: Dubai, Sharjah, Abu Dhabi, Qatar, Saudi | `/billing-software-dubai` etc. |
| | Company: About, Privacy, Terms, Contact | `/#`, `/privacy`, `/terms`, `/#demo` |
| | EN / عربي | `/` / `/ar` |
| **Features page** | Each pillar card | `/features/[slug]` |
| | Book Demo / WhatsApp | `/demo` / WhatsApp |
| **Feature detail** | Back to Features | `/features` |
| | Book Demo / WhatsApp | `/demo` / WhatsApp |
| **Location pages** | Book Demo / Back to home | `/demo` / `/` |
| **Blog** | Post title | `/blog/[slug]` |
| **Blog post** | Feature link, Book Demo, WhatsApp, Back to Blog | `/features/[slug]`, `/demo`, WhatsApp, `/blog` |
| **WhatsApp float** | (always visible) | WhatsApp |

---

## 6. Features (showcase and content)

**Eight feature pillars (same on home, solution, and features page):**

| # | Slug | Title | Home section anchor | Screenshot (content ref) |
|---|------|--------|----------------------|---------------------------|
| 01 | pos-billing | POS Billing | `#feature-pos` | `/screenshots/pos-billing.png` |
| 02 | inventory-damage | Inventory Management | `#feature-inventory` | `/screenshots/inventory-products.png` |
| 03 | supplier-management | Supplier Management | `#feature-supplier` | `/screenshots/supplier-ledger.png` |
| 04 | credit-control | Customer Ledger | `#feature-credit` | `/screenshots/customer-ledger.png` |
| 05 | route-branch-control | Route Sales System | `#feature-routes` | `/screenshots/route-performance.png` |
| 06 | reports-profit | Reports & Profit | `#feature-reports` | `/screenshots/reports-dashboard.png` |
| 07 | vat-invoicing | VAT Compliance (UAE) | `#feature-vat` | `/screenshots/vat-invoicing-desktop.png.png` |
| 08 | invoice-pdf-email | Invoice PDF & Email | `#feature-invoice` | `/screenshots/invoice-pdf-email.png` |

**Feature detail pages (`/features/[slug]`):**  
Hero heading/subheading, pain bullets, solution bullets, metrics, **desktop/tablet/mobile screenshots**, optional video, “Book Demo” + WhatsApp.

---

## 7. Screenshots and images (current references)

**Hero:**  
- `hero.data.ts`: `screenshot.src` = `/screenshots/dashboard-owner.svg`, `videoSrc` = undefined.

**Features (home) – `features.data.ts`:**  
- owner-dashboard: `owner-dashboard-desktop.png.png`  
- credit-control: `credit-control-desktop.png.png`  
- vat-invoicing: `vat-invoicing-desktop.png.png`  
- route-branch: `dashboard-owner.svg`  
- inventory-damage: `inventory-damage-desktop.png.png`  
- staff-audit: `dashboard-owner.svg`  

**Feature details – `features-detail.json`:**  
- Each slug has `screenshot`, `desktopScreenshot`, `tabletScreenshot`, `mobileScreenshot`, optional `videoUrl`, `thumbnail`.  
- staff-audit has `videoUrl`: `/screenshots/staff-audit-desktop.mp4`.

**Roles:**  
- All three roles use `/screenshots/dashboard-owner.svg` in `roles.data.ts`.

**Public folder (actual assets):**  
- Only `public/screenshots/dashboard-owner.svg` and `public/og/.gitkeep` are present.  
- **Missing from repo:** All `*.png.png` and `staff-audit-desktop.mp4` (either add assets or point to placeholders).

**OG images (SEO/social):**  
- Home: `/og/home.png`  
- Dubai: `/og/dubai.png`  
- Others: `/og/home.png`  
- `public/og/` is effectively empty (only `.gitkeep`); add real OG images for sharing.

---

## 8. Pricing and plans

**Three plans (from `pricing.data.ts`):**

| Plan | Price | Main limits | CTA |
|------|--------|-------------|-----|
| Basic | AED 250/month | 1 branch, 1 route, 2 staff | “Start on Basic” → `/demo` |
| Pro | AED 350/month | 2 branches, 3 routes, 5 staff | “Start on Pro” → `/demo` (highlighted) |
| Enterprise | Custom | Unlimited branches/routes/staff | “WhatsApp the Founder” → WhatsApp |

Comparison table: Excel / Busy vs HexaBill (route isolation, credit aging, VAT, audit, multi-branch P&L, etc.).  
Messaging: no “free trial”; they get a **demo login** to explore before deciding.

---

## 9. SEO and marketing (current setup)

- **Metadata:** `lib/seo.ts` – `generateMetadata()` for title, description, keywords, canonical, Open Graph, Twitter, `alternates.languages` (en-AE / ar-AE), robots index/follow.
- **Per-page:** Each main page sets title, description, keywords, `canonicalPath`, `ogImage`, `locale`, `pageType` (home | location | blog | product).
- **Structured data:** `PageSEO` component – schema types used: `all` (home), `software` (features, feature detail), `faq` (FAQ section).
- **Sitemap:** `app/sitemap.ts` – home, `/ar`, `/demo`, `/pricing`, `/features`, `/blog`, location paths, blog slugs, feature slugs, privacy/terms.
- **Locales:** EN default; `/ar` for Arabic (single page, link back to `/`).

**Gaps from UX/marketing POV:**  
- OG images under `/og/` are not in repo (home.png, dubai.png, etc.).  
- Many feature/location pages share `/og/home.png`; per-page OG images would improve sharing.

---

## 10. Summary: UX at a glance

- **One main flow:** Land → Pain → Solution → Features (on-page + detail) → Roles → Proof → Pricing → **Demo / WhatsApp**.
- **Global:** Sticky nav (Features, Pricing, Blog, Book Demo) + footer (Product, Locations, Company) + **WhatsApp float** on every page.
- **Showcase:** Hero screenshot; six feature blocks with screenshots; role tabs with screenshot; feature detail with desktop/tablet/mobile (and optional video).
- **Conversion:** Every section and most pages drive to **Demo** or **WhatsApp**; pricing and demo section reinforce “demo login, no fake free trial.”
- **SEO:** Canonical, OG, schema, sitemap, location and topic pages; **assets to add:** real OG images and missing screenshot files (or replace refs with placeholders).

If you want, next step can be: (1) a short “click map” diagram (mermaid), or (2) a checklist of missing assets (screenshots + OG images) with exact paths and suggested sizes.
