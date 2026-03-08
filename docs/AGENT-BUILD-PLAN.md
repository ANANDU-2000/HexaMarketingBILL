# HexaBill Marketing — Agent / Build Plan

How the site is built and how to change it cleanly. **For agents:** Use this when adding a feature module, adding a section, or running the "clean and neat" checklist.

## Stack

- **Framework:** Next.js (App Router). Root layout: `app/layout.tsx`; home: `app/page.tsx`; other routes under `app/(en)/` or `app/ar/`.
- **Content:** Data files in `content/en/` (e.g. `hero.data.ts`, `pain.data.ts`, `features.data.ts`, `solution.data.ts`, `benefits.data.ts`, `audience.data.ts`, `pricing.data.ts`, `proof.data.ts`, `faq.data.ts`, `demo.data.ts`, `roles.data.ts`). Feature detail content: `content/en/features-detail.json` (and `features-detail.data.ts` for typing).
- **Sections:** Reusable sections in `sections/` (hero, pain, solution, features, benefits, audience, roles, proof, pricing, demo, faq). Each section often has an `index.ts` that re-exports the main component.

## Adding a new feature module

1. **Home and solution:** Add an entry to `content/en/features.data.ts` (id, number, title, context, screenshot path, bullets, slug). Add a pillar to `content/en/solution.data.ts` (id, icon, title, benefit, anchor). Use anchor `#feature-<id>`; ensure the feature block in `sections/features/FeatureBlock.tsx` uses `id={\`feature-${feature.id}\`}`.
2. **Detail page:** Add an entry to `content/en/features-detail.json` for the new slug (slug, title, heroHeading, heroSubheading, painBullets, solutionBullets, metricsOrStats, screenshot, desktopScreenshot, tabletScreenshot, mobileScreenshot, videoUrl, thumbnail). The route `app/(en)/features/[slug]/page.tsx` is dynamic and will serve the new slug.
3. **Sitemap:** `app/sitemap.ts` uses `featureDetails` (from features-detail.data.ts), so new slugs in the JSON are included automatically.
4. **Icons:** If the solution pillar uses a new icon, add it to the `iconMap` in `sections/solution/SolutionSection.tsx`.

## Adding a new section to the home page

1. **Component:** Create the section under `sections/<name>/` (e.g. `SectionName.tsx` and `index.ts`).
2. **Content:** If needed, add a data file in `content/en/<name>.data.ts`.
3. **Wire up:** In `app/page.tsx`, import the section and render it in the desired order (see `docs/FRONTEND-UX.md` for current order).
4. **Analytics (optional):** If the section has a meaningful view or CTA, add an event in `lib/analytics.ts` and call it from the section.

## Checklist for "clean and neat"

- [ ] All feature slugs in `features.data.ts` have a matching entry in `features-detail.json` so detail pages don’t 404.
- [ ] All solution pillars have an anchor that matches an existing feature block id (`#feature-<id>`).
- [ ] No broken internal links (nav, footer, in-page anchors). Test Book Demo, WhatsApp, Features, Pricing, Blog.
- [ ] New sections have a sensible id for deep-linking (e.g. `id="benefits"`) if needed.
- [ ] Metadata (title, description) is set for every route; new routes use `generateMetadata` and, if applicable, `PageSEO`.
- [ ] Screenshot paths in content point to files under `public/screenshots/` or document placeholders (see `docs/SCREENSHOTS-ASSETS.md`).

## Do not

- Remove or rename conversion CTAs (Book Demo, WhatsApp) without a product decision.
- Delete a feature slug from `features-detail.json` while it’s still linked from the features list or sitemap (or add redirects).
- Add a section without adding it to `app/page.tsx` in the right order.
