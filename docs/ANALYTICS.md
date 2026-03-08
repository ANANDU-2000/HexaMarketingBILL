# HexaBill Marketing — Analytics

PostHog events and what to track. **For agents:** Read this before adding or changing events in `lib/analytics.ts`; document new events here.

## Setup

- **Library:** PostHog (`posthog-js`). Initialized in `lib/analytics.ts` via `initAnalytics()` (called from `AnalyticsInit` component). Key: `NEXT_PUBLIC_POSTHOG_KEY`.
- **Config:** `capture_pageview: true`, `capture_pageleave: true`, `autocapture: false` (explicit events only).

## Current events (`lib/analytics.ts`)

| Event | When | Properties |
|-------|------|------------|
| `hero_cta_demo_clicked` | User clicks "Book Demo" / "Get Demo Login" in hero | — |
| `hero_cta_whatsapp_clicked` | User clicks "WhatsApp the Founder" in hero | — |
| `whatsapp_float_clicked` | User clicks the floating WhatsApp button | `page` |
| `section_viewed` | User clicks "See How HexaBill Fixes This" (pain → solution) | `section` |
| `pricing_plan_clicked` | User clicks a plan CTA (e.g. Start on Pro) | `plan` |
| `demo_calendly_clicked` | User clicks Calendly link (if used) | — |
| `demo_whatsapp_clicked` | User clicks WhatsApp in demo section | — |
| `faq_opened` | User expands an FAQ item | `question` |
| `blog_post_viewed` | Blog post page view (if tracked client-side) | `slug` |
| `blog_cta_clicked` | User clicks CTA in a blog post | `slug`, `position` |
| `nav_demo_clicked` | User clicks Demo in nav | — |
| `nav_pricing_clicked` | User clicks Pricing in nav | — |
| `location_page_viewed` | Location page view (if tracked client-side) | `city` |
| `features_detail_cta_clicked` | User clicks Demo or WhatsApp on a feature detail page | `slug`, `type` |
| `benefits_section_viewed` | Key Benefits section enters view (once per page) | — |
| `audience_section_viewed` | Who It's For section enters view (once per page) | — |

## What to track for new sections

- **Key Benefits:** Fires `benefits_section_viewed` when section enters view (in `sections/benefits/BenefitsSection.tsx`).
- **Who It's For:** Fires `audience_section_viewed` when section enters view (in `sections/audience/AudienceSection.tsx`).
- **New CTAs:** If you add a new CTA (e.g. "Book Demo" from Benefits), reuse `hero_cta_demo_clicked` or add a specific event (e.g. `benefits_cta_demo_clicked`) for clarity in funnels.

## Do not miss

- Every primary CTA (Book Demo, Get Demo Login) should be trackable (same event or one per placement if you need funnel breakdown).
- WhatsApp clicks (hero, demo section, float) are tracked; keep that coverage when adding new WhatsApp links.
- Pricing plan clicks are tracked; keep when changing plan labels or CTAs.

## Adding an event

1. Add a function or call in `lib/analytics.ts`, e.g. `benefitsSectionViewed: () => posthog.capture("benefits_section_viewed")`.
2. Call it from the component (e.g. in a `useEffect` with Intersection Observer, or on click).
3. Document the event name and properties in this file so the team knows what to build in PostHog (dashboards, funnels).
