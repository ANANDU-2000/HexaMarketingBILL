# Launch Checklist

## 216. Submit sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property for your domain (e.g. `https://hexamarketing.com`).
3. In **Sitemaps**, submit: `https://hexamarketing.com/sitemap.xml`.
4. Confirm no errors; allow a few days for indexing.

---

## 217. Verify hreflang and canonical

Check these 5 sample pages in production (view source or use SEO crawler):

| Page | Canonical | Hreflang en-AE | Hreflang ar-AE |
|------|-----------|----------------|----------------|
| Home (/) | https://hexamarketing.com/ | Yes | https://hexamarketing.com/ar |
| /demo | https://hexamarketing.com/demo | Yes | /ar |
| /pricing | https://hexamarketing.com/pricing | Yes | /ar |
| /billing-software-dubai | .../billing-software-dubai | Yes | /ar |
| /blog | .../blog | Yes | /ar |

Canonical and alternates are set via `generateMetadata` in [lib/seo.ts](../lib/seo.ts) (`alternates.canonical` and `alternates.languages`).

---

## 218. Weekly KPIs checklist (run every Monday)

| Metric | Target | Where to check |
|--------|--------|----------------|
| WhatsApp conversations started/week | 10+ → 25+ | WhatsApp Business |
| Demo bookings/week | 3+ → 8+ | Calendly |
| Google impressions (target keywords) | 500+ → 5,000+ | GSC |
| Lighthouse performance | 90+ | Chrome DevTools |
| Demo → trial conversion | 40%+ → 50%+ | Manual count |
| Trial → paid conversion | 25%+ → 35%+ | Stripe |
| MRR | AED 2,000 → 8,000+ | Stripe |
| Bounce rate (homepage) | <65% → <55% | Posthog / GA4 |
| WhatsApp button click rate | 8%+ → 12%+ | Posthog |
| Blog organic traffic | 100+ → 500+ /mo | GSC |

---

## 219–220. Docs and handoff

- **Plan:** [HEXABILL_MARKETING_PLAN.md](HEXABILL_MARKETING_PLAN.md) — rules, structure, design, section flow.
- **Architecture:** [ARCHITECTURE.md](ARCHITECTURE.md) — philosophy, stack, section ownership, SEO, conversion, KPIs, **90-day execution order (H)**.
- **Tasks:** [BUILD_TASKS.md](BUILD_TASKS.md) — ordered task list 1–200.

90-day order: Days 1–3 repo → Day 7 Hero+Pain → Day 14 full sections → Day 28 location pages → Day 35 launch → Day 60 first client → Day 90 three clients.
