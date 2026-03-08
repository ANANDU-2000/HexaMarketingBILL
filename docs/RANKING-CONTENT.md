# HexaBill Marketing — Ranking & Content

Target keywords, location/topic pages, and content guidelines. **For agents:** Read this before adding location/topic pages, blog posts, or changing target keywords.

## Target keywords

- **Primary:** UAE billing software, Billing & inventory software UAE, VAT invoice software UAE, B2B distribution software UAE, billing software Dubai.
- **Secondary:** Credit management software Gulf, distribution software UAE features, route sales software Gulf, inventory software Dubai, billing software Sharjah / Abu Dhabi / Qatar / Saudi Arabia.
- **Long-tail:** Billing software for UAE distributors, FTA-compliant invoicing UAE, customer ledger software Gulf.

Use these in page titles, meta descriptions, and H1s where natural. Avoid stuffing; prefer one primary keyword per page and natural variation in body copy.

## Location and topic pages

- **Location pages:** `app/(en)/billing-software-dubai/page.tsx`, billing-software-sharjah, billing-software-abu-dhabi, billing-software-qatar, billing-software-saudi-arabia. Each has unique title, description, and body focused on that city/region. Listed in `app/sitemap.ts` via `locationPaths`.
- **Topic pages:** vat-invoice-software-uae, route-sales-software-gulf, credit-management-software-uae, b2b-distribution-software, inventory-software-dubai. Same pattern: unique meta and content; internal links to /demo and /.
- **Feature pages:** `/features/[slug]` for each feature (pos-billing, inventory-damage, supplier-management, credit-control, route-branch-control, reports-profit, vat-invoicing, invoice-pdf-email, plus legacy owner-dashboard, staff-audit if kept). Each should have unique title/description and useful body (pain, solution, CTA).

## Content guidelines

- **Unique content:** Every location and topic page should have at least one substantive paragraph that is not copied from another page. Avoid thin or duplicate content.
- **Length:** No minimum length mandate; prefer clear, benefit-led copy over padding. Feature detail pages should cover pain, solution, and screenshot/description.
- **Internal links:** Link to /demo and / from location/topic/feature pages. Use "Book Demo" or "WhatsApp" in CTAs.
- **Blog:** Posts in `content/blog/posts.ts`; slugs under `/blog/[slug]`. Use for guides and SEO (e.g. credit control, VAT, route sales). Link to related feature pages and /demo.

## What to avoid

- **Thin content:** Pages that only repeat the same headline and a single sentence. Add at least one paragraph of unique, useful content per URL.
- **Keyword stuffing:** Repeating the same phrase many times in title or body. Use synonyms and natural language.
- **Broken or orphan URLs:** Every URL in the sitemap should be linked from somewhere (nav, footer, or internal links). Don’t leave old location/topic URLs in sitemap after removing links.
