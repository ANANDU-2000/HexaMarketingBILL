# HexaBill Marketing Plan

Single source of truth for structure, design, and execution order. See also [ARCHITECTURE.md](ARCHITECTURE.md) for full project architecture and 90-day execution, and [LAUNCH.md](LAUNCH.md) for launch checklist and weekly KPIs.

---

## 1. Rules

- **Section order:** Home page sections must appear in this order: Hero → Pain → Solution → Features → Roles → Proof → Pricing → Demo → FAQ. Do not reorder without updating this document.
- **Naming:** Section folders and components use kebab-case for folders (e.g. `hero`, `pain-section`), PascalCase for React components (e.g. `Hero`, `PainSection`). Export section components via `sections/<name>/index.ts`.
- **Content location:** All copy and configurable content live in `content/en/*.data.ts`. One data file per section (e.g. `hero.data.ts`, `pain.data.ts`). No hardcoded marketing copy in section components.
- **SEO:** Use `PageSEO` and `generateMetadata` from `@/lib/seo`; pass schemaType and locale. Canonical paths and OG images per page.
- **Analytics:** Use `track()` from `@/lib/analytics` for CTA clicks and key events. Event names must be consistent (e.g. `hero_cta_demo_clicked`).
- **CTA placement:** Primary CTA above the fold (Hero), repeated in Demo section and Footer. Secondary CTA (e.g. WhatsApp) in Hero, Navbar, and floating widget. Every major section may end with a soft CTA where appropriate.
- **Design tokens:** Use only CSS variables from `app/globals.css` (and Tailwind theme that extends them). Do not introduce inline hex colors for theme; use token names.

---

## 2. Target project structure

```
hexabill-marketing/
├── app/
│   ├── globals.css          # Single source of design tokens and global styles
│   ├── layout.tsx           # Root layout: fonts, Navbar, children, WhatsAppFloat, Analytics
│   ├── page.tsx             # Home: sections in order per Section flow
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── (en)/
│   │   ├── layout.tsx
│   │   ├── blog/page.tsx
│   │   ├── billing-software-dubai/page.tsx
│   │   ├── demo/page.tsx
│   │   └── pricing/page.tsx
│   ├── ar/
│   │   ├── layout.tsx       # Imports styles/rtl.css
│   │   └── page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── demo/route.ts
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── ui/                  # Button, Card, Badge, ScrollReveal, WhatsAppFloat, etc.
│   └── seo/                 # PageSEO, schemas (FAQ, LocalBusiness, Software)
├── sections/
│   ├── hero/                # Hero.tsx, index.ts
│   ├── pain/                # PainSection.tsx, PainCard.tsx, index.ts
│   ├── solution/            # SolutionSection.tsx, index.ts
│   ├── features/            # FeatureSection.tsx, FeatureBlock.tsx, index.ts
│   ├── roles/               # RoleSection.tsx, index.ts (+ roles.data.ts)
│   ├── proof/               # ProofSection, TrustBadges, TestimonialCard, StatsBar
│   ├── pricing/             # PricingSection, PlanCard, ComparisonTable
│   ├── demo/                # DemoSection (+ demo.data.ts)
│   └── faq/                 # FAQSection, FAQItem
├── content/
│   └── en/
│       ├── hero.data.ts
│       ├── pain.data.ts
│       ├── solution.data.ts
│       ├── features.data.ts
│       ├── roles.data.ts    # Add if missing
│       ├── proof.data.ts
│       ├── pricing.data.ts
│       ├── demo.data.ts     # Add if missing
│       └── faq.data.ts
├── hooks/                   # useIntersection, useCounter, useScrollReveal
├── lib/                     # seo, analytics, whatsapp
├── public/                  # screenshots, assets, og images
├── styles/
│   └── rtl.css              # RTL only; app/globals.css is the primary theme
├── docs/
│   └── HEXABILL_MARKETING_PLAN.md
└── .cursor/
    └── rules/
        └── hexabill-marketing.mdc
```

- **Primary theme:** `app/globals.css` only. No duplicate `styles/globals.css` for theme.
- **Section ↔ content:** Every section has a matching `content/en/<section>.data.ts` where applicable.

---

## 3. Section flow

| Route | Sections / content |
|-------|--------------------|
| `/` | Hero, Pain, Solution, Features, Roles, Proof, Pricing, Demo, FAQ + Footer |
| `/demo` | DemoSection + Footer |
| `/pricing` | Pricing page content + Footer |
| `/blog` | Blog page + Footer |
| `/billing-software-dubai` | Landing content + Footer |
| `/ar` | Arabic home (same section order, RTL) |

---

## 4. Design system

- **Background and palette:** White/blue base. White or off-white (`#FAFBFC`, `#FFFFFF`) for section backgrounds; primary blue for headers and key UI (e.g. `#1a73e8`, `#0d47a1`). Accent for CTAs: blue or cyan (`#00C2CB` or primary blue). Define in `app/globals.css` as `--color-bg`, `--color-bg-alt`, `--color-primary`, `--color-primary-dark`, `--color-accent`, `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`, `--color-border`, and surface variants.
- **Typography:** One heading font, one body font. Recommended: Syne (headings) and DM Sans (body) with a clear type scale. Headings: h1 2.25rem–3.75rem, h2 2rem–3rem, h3 1.5rem–1.875rem, h4 1.25rem, h5 1.125rem, h6 1rem. Body: 1rem base, 1.125rem for lead, 0.875rem for small. Apply via `app/layout.tsx` and section classes; no arbitrary font mixing.
- **Spacing:** Section padding vertical: `py-16` to `py-24` (md: `py-20` to `py-28`). Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Components:** Buttons use design tokens (primary, secondary, ghost). Cards use `--color-surface` or white, border from `--color-border`, shadow from `--shadow-card`. Badges and tags use accent or primary.
- **Transitions:** Use CSS keyframes for section entrance (fade-in, slide-up) and optional subtle pulse for CTAs. Framer Motion may be used for complex sequences; align with keyframe names where possible.

---

## 5. UI/UX requirements

- **Desktop vs mobile:** Breakpoints: default (mobile-first), `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. Hero: two-column on lg, stacked on smaller. Sections stack vertically on mobile; grids become 1 column. Feature and pricing tabs: horizontal on desktop, accordion or stacked on mobile if needed.
- **Video:** Video blocks (hero, features, or proof) must have a responsive container (aspect ratio preserved), optional keyframe for load/play state, and placeholder or poster for performance. Desktop and mobile layouts both supported.
- **Keyframes:** Define in `globals.css`: `fadeIn`, `slideUp`, `pulseSoft`. Use for section reveal and CTA emphasis. Keep animation duration 0.3s–0.6s for UI.
- **Tabs:** Use a single tab pattern (e.g. Radix UI Tabs or a minimal custom tab component) for Features and Pricing where applicable. Document tab IDs and aria labels for a11y.
- **Conversion:** CTAs above the fold (Hero), in Navbar, end of Demo, Footer. Sticky/fixed: Navbar and WhatsApp float. Ensure contrast and size meet accessibility; track all primary CTA clicks.

---

## 6. Task list (ordered)

Execute in this order. Each bullet may be split into smaller tasks for tracking.

### Phase 1 – Plan and docs
1. Create `docs/` folder.
2. Create `docs/HEXABILL_MARKETING_PLAN.md` with Rules, Structure, Section flow, Design system, UI/UX, Task list.
3. Add `.cursor/rules/hexabill-marketing.mdc` referencing this plan.

### Phase 2 – Project structure
4. Ensure `docs/` exists and plan MD is in place.
5. Add `content/en/roles.data.ts`; migrate roles copy from RoleSection into it.
6. Add `content/en/demo.data.ts`; migrate demo copy from DemoSection into it.
7. Update RoleSection to import from `roles.data.ts`.
8. Update DemoSection to import from `demo.data.ts`.
9. Verify all sections have matching content files; fix any missing imports.
10. Confirm only `app/globals.css` is used for theme; remove or alias any `styles/globals.css` theme usage in layout.
11. Verify `app/page.tsx` section order matches Section flow.

### Phase 3 – Design system
12. Add white/blue design tokens to `app/globals.css` (--color-bg, --color-primary, --color-accent, etc.).
13. Extend `tailwind.config.ts` with new color and font tokens.
14. Update `app/layout.tsx` body and default classes for new theme.
15. Add type scale utilities or classes in globals.css if needed.
16. Add keyframes: fadeIn, slideUp, pulseSoft in globals.css.
17. Update Tailwind theme for animation/keyframes if used via Tailwind.

### Phase 4 – Transitions and UI
18. Apply section entrance animations (fade-in/slide-up) to each section.
19. Ensure responsive behavior (desktop/mobile) for Hero, Features, Pricing, Roles.
20. Add video placeholder component and use in one section (e.g. Hero or Features) with responsive container.
21. Add or wire tab component for Features or Pricing; ensure mobile behavior (tabs or accordion).
22. CTA placement pass: Hero, Navbar, Demo, Footer; ensure tracking and contrast.

### Phase 5 – Section-by-section UI pass
23. Hero: theme, typography, video placeholder if applicable.
24. Pain: theme, typography.
25. Solution: theme, typography.
26. Features: theme, typography, tabs.
27. Roles: theme, typography, data from roles.data.ts.
28. Proof: theme, typography.
29. Pricing: theme, typography, tabs/table.
30. Demo: theme, typography, data from demo.data.ts.
31. FAQ: theme, typography.
32. Navbar and Footer: theme, typography, CTAs.

### Phase 6 – Content and SEO
33. Ensure all copy in content files; no hardcoded strings in sections.
34. Verify PageSEO and generateMetadata on all routes.
35. Verify analytics events on CTAs.

### Phase 7 – E2E and polish
36. Run `npm run build`; fix any errors.
37. Run `npm run lint`; fix any errors.
38. Smoke test: /, /demo, /pricing, /ar.
39. Verify CTAs and analytics wiring.
40. Final conversion and accessibility check.

---

*End of plan. Update this document when structure or rules change.*
