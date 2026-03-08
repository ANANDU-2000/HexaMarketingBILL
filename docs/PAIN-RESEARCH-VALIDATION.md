# HexaBill Marketing — Pain Points Research & Validation

How pains are sourced, used, and updated. **For agents:** Read this before editing `content/en/pain.data.ts` or the Problem section.

## Current pain set (Problem section)

The home page "Problem" section uses **3 pain cards** from `content/en/pain.data.ts`:

1. **Managing invoices in Excel?** — Manual entry, wrong formulas, version chaos.
2. **Losing track of payments?** — Who has paid, who hasn’t; outstanding piles up.
3. **Stock mismatches?** — Warehouse vs system; shortages and overselling.

Each card has: title, description, stat, statSource, hexabillFix. Stats are used to add credibility.

## Sources for stats

- **Gulf Business Report 2024** — Credit and revenue loss (e.g. 8% to untracked credit).
- **FTA Annual Report 2025** — VAT fines (e.g. 2,300+ fines to UAE businesses).
- **Gulf Credit Management Survey 2025** — Bad debt write-offs (e.g. AED 180,000/year).
- **Logistics ME Survey 2024** — Stock variance (e.g. 40% with 10%+ monthly variance).

These are referenced in `pain.data.ts` and in feature detail copy. When updating stats, keep a short note of source and year so they can be refreshed or replaced.

## Validation

- **Internal:** Align with what sales/support hear (WhatsApp, demos). If "Excel" or "payments" or "stock" stop being top themes, consider rotating or rewording pains.
- **External:** Prefer Gulf/UAE-specific sources. If a stat is generic or old, replace with a newer or regional source, or drop the stat and keep the pain narrative.
- **Tone:** Pains should feel real to an owner (stress, lost money, lost time), not technical.

## How to update

1. **Edit** `content/en/pain.data.ts`: add/remove/reorder cards; update title, description, stat, statSource, hexabillFix.
2. **Icons:** Each card has an `icon` (e.g. FileSpreadsheet, Receipt, Package). Add the icon name to the `iconMap` in `sections/pain/PainCard.tsx` if you introduce a new one.
3. **Grid:** Pain section uses a responsive grid (e.g. 1 col mobile, 2 sm, 4 lg). With 3 cards, layout remains fine; with 4+ consider keeping 2–4 so the section doesn’t feel long.
4. **CTA:** "See How HexaBill Fixes This" links to `#solution`. Do not change that without updating the solution section id.
