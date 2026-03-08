# HexaBill Marketing — SEO Skills

Reference for meta, canonicals, schema, and keyword usage. **For agents:** Read this before changing page metadata, `lib/seo.ts`, or sitemap.

## Meta titles and descriptions

- **Where:** Each page uses `generateMetadata()` from `lib/seo.ts` with a `PageSEOData` object (title, description, keywords, canonicalPath, ogImage, locale, pageType).
- **Rules:** Title ≤ 60 chars (truncated with "…"); description ≤ 155 chars. Keep titles unique and descriptive (e.g. "UAE Billing Software for B2B Distributors | HexaBill").
- **Home:** Reflect "Billing & Inventory" and UAE/Gulf distributors. No generic "Welcome" titles.

## Canonicals and OG

- **Canonical:** Built as `SITE_URL + canonicalPath`. Set `canonicalPath` for every page (e.g. `/`, `/demo`, `/features`, `/features/pos-billing`).
- **OG image:** Optional `ogImage` (e.g. `/og/home.png`, `/og/dubai.png`). Resolved to full URL in metadata. Use 1200×630 for social sharing.
- **Locale:** `locale: "en" | "ar"` drives Open Graph locale (en_AE / ar_AE) and alternates.

## Schema (structured data)

- **Component:** `PageSEO` in `components/seo/PageSEO.tsx` injects JSON-LD.
- **Types:** `all` (home: org + product + local business), `software` (features pages), `faq` (FAQ section). Pass `faqData` when using `schemaType="faq"`.
- **Keep:** Schema accurate and non-misleading; update when product/offers change.

## Sitemap and hreflang

- **Sitemap:** `app/sitemap.ts` returns URLs for home, `/ar`, `/demo`, `/pricing`, `/features`, location paths, blog slugs, feature slugs, privacy/terms. Add new feature slugs to the source (e.g. featureDetails) so they appear automatically.
- **Hreflang:** In `lib/seo.ts`, `alternates.languages` sets en-AE and ar-AE. Link EN to `/` and AR to `/ar` (or the page’s path). Do not add hreflang for pages that don’t have an AR version unless you add that version.

## Keyword usage

- **Data:** `keywords` in `PageSEOData` are joined and output in meta keywords (low impact but useful for internal reference).
- **Target terms:** UAE billing software, VAT invoice software UAE, B2B distribution software UAE, billing software Dubai, credit management software Gulf, distribution software UAE features, route sales software Gulf. Use in title/description/body where natural; avoid stuffing.
