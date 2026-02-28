# Contributing to HexaBill Marketing

## Branch strategy

- **a/** — Anandu's branches (e.g. `a/hero`, `a/solution`, `a/pricing`, `a/footer`).
- **s/** — Surag's branches (e.g. `s/pain`, `s/features`, `s/proof`, `s/demo`, `s/faq`).

Create a branch from `main` (or `master`) with your prefix and section name. Open PRs into the main branch. This keeps section ownership clear and minimizes merge conflicts.

## Section ownership

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for which sections are owned by whom. Edit only your section's folder under `sections/` and the corresponding `content/en/*.data.ts` (or `content/ar/`) that you own. Do not edit another owner's section without coordination.

## Content vs code

All marketing copy lives in `content/en/` (and `content/ar/`). Section components import from these files only. Do not hardcode copy in TSX.

## Commits

Use clear messages: e.g. `Hero: add dark navy background and trust strip`, `Pain: align 8 cards to doc`.
