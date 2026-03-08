# HexaBill Marketing — Frontend / UX

Section order, CTAs, clarity, and conversion points. **For agents:** Read this before changing home page structure, section order, or CTAs.

## Section order (home page)

1. **Hero** — Headline, subhead, primary CTA (Book Demo), secondary CTA (WhatsApp), trust strip, hero screenshot.
2. **Problem** — Pain section: 3 pains (Excel, payments, stock). CTA: "See How HexaBill Fixes This" → #solution.
3. **Solution** — "HexaBill automates your billing, inventory, and reports." Eight pillars linking to #feature-* anchors.
4. **Product Screenshots** — Feature blocks (8): POS, Inventory, Supplier, Customer Ledger, Routes, Reports & Profit, VAT, Invoice PDF & Email. Each: screenshot, bullets, "See full feature →" to `/features/[slug]`.
5. **Key Benefits** — Four benefits: Faster invoicing, Automatic stock updates, Real-time profit tracking, VAT-ready reports.
6. **Who It's For** — Frozen food distributors, FMCG wholesalers, Restaurant suppliers, Warehouse trading companies.
7. **Roles** — Owner / Admin / Sales tabs; CTAs to #feature-reports, #feature-credit, /demo.
8. **Proof** — Stats bar, testimonials, trust badges.
9. **Pricing** — Plans + comparison table + "Get Demo Login".
10. **Demo** — Form + WhatsApp CTA.
11. **FAQ** — Accordion; schema for SEO.

## CTAs

- **Primary:** "Book Demo" or "Get Demo Login" → `/demo`.
- **Secondary:** "WhatsApp the Founder" → WhatsApp (prefilled message). Present on hero, demo section, footer, and often in feature/pricing blocks.
- **WhatsApp float:** Sticky bottom-right on all pages; do not remove.
- **Nav:** Features, Pricing, Blog, Book Demo. Keep Book Demo prominent.

## Clarity and mobile

- **Headings:** Short, benefit-led. No jargon in H1/H2.
- **Body:** Short paragraphs; bullets for lists. Owner language (money, time, control).
- **Mobile:** Sections stack; CTAs full-width on small screens where appropriate. Touch targets ≥ 44px. Nav collapses to hamburger.

## Accessibility

- **Focus:** Visible focus styles on links and buttons.
- **Landmarks:** One main, sections with ids for in-page links (#pain, #solution, #features, #benefits, #who-its-for, #pricing, #demo).
- **Images:** Meaningful alt text for all screenshots (e.g. feature title or context).

## Conversion

- Every major section should support the journey to Demo or WhatsApp. Do not add dead-end sections without a CTA.
- Track key events (hero CTAs, demo form, pricing plan click, section viewed) via `lib/analytics.ts`.
