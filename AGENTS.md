# HexaBill Marketing — Agent & Skills Index

Use this file and the docs below when editing the marketing site. Read the relevant doc **before** making changes in that area.

## Skill docs (when to use)

| Doc | Use when |
|-----|----------|
| [docs/AGENT-BUILD-PLAN.md](docs/AGENT-BUILD-PLAN.md) | Adding a feature, adding a section, or checking "clean and neat" (links, slugs, metadata, sitemap). |
| [docs/FRONTEND-UX.md](docs/FRONTEND-UX.md) | Changing home page section order, CTAs, copy, or conversion flow. |
| [docs/SEO.md](docs/SEO.md) | Changing meta titles/descriptions, canonicals, OG images, schema, sitemap, or keywords. |
| [docs/PRODUCT-MARKETING.md](docs/PRODUCT-MARKETING.md) | Writing or editing positioning, messaging, feature copy, or competitor positioning. |
| [docs/PAIN-RESEARCH-VALIDATION.md](docs/PAIN-RESEARCH-VALIDATION.md) | Editing the Problem section (pain cards, stats, sources). |
| [docs/COMPETITOR.md](docs/COMPETITOR.md) | Editing the comparison table or competitor messaging. |
| [docs/RANKING-CONTENT.md](docs/RANKING-CONTENT.md) | Adding location/topic pages, blog posts, or target keywords. |
| [docs/ANALYTICS.md](docs/ANALYTICS.md) | Adding or changing PostHog events or tracking. |
| [docs/SCREENSHOTS-ASSETS.md](docs/SCREENSHOTS-ASSETS.md) | Adding or renaming screenshot/OG asset paths. |

## Stack (quick ref)

- **App:** Next.js 14 (App Router). Home: `app/page.tsx`. Content: `content/en/*.data.ts` and `content/en/features-detail.json`. Sections: `sections/*/`.
- **8 feature modules:** POS Billing, Inventory, Supplier, Customer Ledger, Route Sales, Reports & Profit, VAT Compliance, Invoice PDF & Email. Each has an entry in `features.data.ts`, `solution.data.ts`, and `features-detail.json`.
- **Home section order:** Hero → Pain → Solution → Features → Key Benefits → Who It's For → Roles → Proof → Pricing → Demo → FAQ.
- **CTAs:** Primary = Book Demo / Get Demo Login → `/demo`. Secondary = WhatsApp the Founder. Do not remove or rename without product decision.

## Checklist before shipping

- [ ] New feature? Add to `features.data.ts`, `solution.data.ts`, and `features-detail.json`; add icon to SolutionSection if new.
- [ ] New section? Add component, optional data file, and render in `app/page.tsx` in correct order; add analytics event if needed.
- [ ] All feature slugs in `features.data.ts` have a matching entry in `features-detail.json`.
- [ ] Run `npm run build` and fix any errors.
