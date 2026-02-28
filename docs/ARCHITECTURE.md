# HexaBill Marketing Site — Complete Project Architecture

hexamarketing.com · Next.js 14 · Gulf-First · High Conversion

---

## A. Marketing Site Philosophy

- **Pain first:** Show the problem before the solution. Owner must feel understood before he will listen.
- **Real screenshots only:** No mockups. Every feature image = actual running app.
- **WhatsApp is primary CTA:** WhatsApp float button visible on every pixel of every page.
- **Arabic is equal:** Arabic version is a separate page written for Arabic-reading Gulf owners. ar-AE hreflang on every page.
- **Speed over beauty:** Lighthouse 90+. LCP under 2.5s. No heavy hero videos. CSS animations only.
- **Section = folder = owner:** Each section owned by one developer. Content data separated from UI code.

---

## B. Technology Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS 3.4 |
| Hosting | Vercel |
| Analytics | Posthog + GSC |
| Forms | Native + Webhook |
| Blog | MDX in /content/blog |
| Images | next/image + WebP |
| Fonts | Syne + DM Sans (Google Fonts) |
| i18n | next-intl or lib/i18n (en + ar) |
| Animations | Framer Motion |

---

## C. Repository Structure

- **Two repos:** hexabill-app (SaaS) and hexamarketing (this repo). Never mix.
- **app/:** layout.tsx, page.tsx, (en)/, ar/, blog/, demo/, pricing/, api/
- **sections/:** hero, pain, solution, features, roles, proof, pricing, demo, faq, footer (optional)
- **content/:** en/*.data.ts, ar/*.data.ts, blog/*.mdx
- **components/:** ui/, seo/, layout/
- **public/:** screenshots/ (WebP), videos/, og/, fonts/
- **lib/:** seo.ts, analytics.ts, whatsapp.ts, i18n.ts

---

## D. Section Ownership and Specs

| # | Section | Owner | Key deliverables |
|---|---------|-------|------------------|
| 01 | hero | ANANDU | Hero.tsx; dark navy #0D1B2A; two CTAs; trust strip; scroll arrow |
| 02 | pain | SURAG | PainSection, PainCard; 8 cards; content from pain.data.ts |
| 03 | solution | ANANDU | SolutionSection; 6 pillars; anchor links to features |
| 04 | features | SURAG | FeatureSection, FeatureBlock; real screenshots; 6 deep-dives |
| 05 | roles | ANANDU | RoleSection, RoleTab; 3 tabs Owner/Admin/Staff |
| 06 | proof | SURAG | ProofSection, StatsBar, TestimonialCard, TrustBadges |
| 07 | pricing | ANANDU | PricingSection, PlanCard, ComparisonTable |
| 08 | demo | SURAG | DemoSection, CalendlyEmbed, DemoForm; founder humanization |
| 09 | faq | SURAG | FAQSection, FAQItem; 10 items; accordion; FAQPage schema |
| 10 | footer | ANANDU | Footer; Product/Location/Company links; language toggle |

---

## E. SEO Pages

- Home, /demo, /pricing, /blog, /ar.
- Location pages: billing-software-dubai, sharjah, abu-dhabi, qatar, saudi-arabia, vat-invoice-software-uae, route-sales-software-gulf, credit-management-software-uae, b2b-distribution-software, inventory-software-dubai.
- Title ≤60 chars; meta desc ≤150; H1 primary keyword; H2s ≥4; WebP <100KB; Schema (SoftwareApplication, FAQPage, LocalBusiness); hreflang en-AE, ar-AE; sitemap.xml; OG 1200x630.

---

## F. Conversion Flows

1. **Primary (mobile):** Land → Pain → Features → WhatsApp float → Demo → Trial → Paid.
2. **Blog:** Search → Article → Demo CTA → Demo booked.
3. **WhatsApp direct:** Referral → WhatsApp → Qualify → Demo/Reel → Trial.
4. **Retargeting:** Return → Pricing / exit-intent → Email or demo.

---

## G. Weekly KPIs

- WhatsApp conversations started/week
- Demo bookings/week
- GSC impressions
- Lighthouse 90+
- Demo→trial and trial→paid conversion
- MRR, bounce rate, blog organic traffic

---

## H. 90-Day Execution Order

- Days 1–3: Repo setup; branch strategy.
- Day 7: Hero + Pain live; WhatsApp live.
- Day 14: Full sections; real screenshots.
- Day 28: All location pages; sitemap.
- Day 35: Launch; Posthog; first blog posts.
- Day 60: First paying client.
- Day 90: 3 paying clients; MRR target.

---

## Design: Hero and Pain (Dark)

- Hero background: **#0D1B2A** (dark navy). Pain section: **#0A1520**. Rest of site may use light theme (solution onward) for relief. See [HEXABILL_MARKETING_PLAN.md](HEXABILL_MARKETING_PLAN.md) for tokens.

---

## Lighthouse Baseline

- Target: **90+** overall; **LCP &lt; 2.5s**; CLS &lt; 0.1; INP &lt; 200ms. Run monthly; document in GSC.
