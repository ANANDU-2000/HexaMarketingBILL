# HexaBill Marketing — Build Tasks (1–200)

Ordered task list derived from [HEXABILL_MARKETING_PLAN.md](HEXABILL_MARKETING_PLAN.md) and [ARCHITECTURE.md](ARCHITECTURE.md). Execute in order.

## Phase 1 — Repo and config (1–12) ✅

1. Add docs/ARCHITECTURE.md  
2. Branch strategy in CONTRIBUTING.md  
3. next.config images/i18n  
4. .env.example  
5. lib/i18n.ts  
6. layout: fonts, analytics, WhatsApp float  
7. ProgressBar.tsx  
8. Hreflang.tsx  
9. globals.css dark section overrides (hero/pain)  
10. sitemap all routes  
11. robots allow /  
12. Lighthouse baseline doc  

## Phase 2 — Sections and content (13–95) ✅

Hero (13–24), Pain (25–39), Solution (40–49), Features (50–67), Roles (68–79), Proof (80–94), Pricing (95–109), Demo (110–121), FAQ (122–131), Footer (132–135).  
RoleTab, CalendlyEmbed, DemoForm added. Dark hero/pain/solution/demo applied.

## Phase 3 — SEO and location pages (136–170) ✅

136–140. SEO metadata, schema, hreflang, internal links  
141. Location page template  
142–150. Add 9 location pages (sharjah, abu-dhabi, qatar, saudi-arabia, vat-invoice-software-uae, route-sales-software-gulf, credit-management-software-uae, b2b-distribution-software, inventory-software-dubai)  
151. Verify billing-software-dubai  
152–153. Sitemap, GSC doc  
154–170. Per-location SEO, OG images, Core Web Vitals  

## Phase 4 — Blog and Arabic (171–195) ✅

171–177. Blog [slug], content/blog posts, first posts, index  
178–185. content/ar (hero.data.ts), app/ar, i18n, hreflang  
186–195. Lighthouse doc, a11y, sitemap includes blog + location + ar  

## Phase 5 — Assets and conversion (196–215) ✅

196–199. public/og/.gitkeep; screenshots/videos placeholders  
200–205. API contact/demo, Posthog events, WhatsApp float, CTAs  
206–215. DemoForm, CalendlyEmbed; CTAs tracked  

## Phase 6 — Launch and KPIs (216–220) ✅

216. Submit sitemap GSC — see [LAUNCH.md](LAUNCH.md).  
217. Verify hreflang/canonical — checklist in LAUNCH.md; set via lib/seo.ts.  
218. KPIs weekly checklist — in LAUNCH.md and ARCHITECTURE.md (G).  
219. HEXABILL_MARKETING_PLAN updated with links to ARCHITECTURE and LAUNCH.  
220. 90-day handoff — ARCHITECTURE.md section H.  
