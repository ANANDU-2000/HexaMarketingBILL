# Scaling Marketing Without Breaking Product

Assumptions: single DB, no Redis, heavy BalanceService, no SSO. This doc is advisory; actual capacity and thresholds need product/backend input.

---

## When to Slow Marketing

Slow or pause paid and aggressive outbound when:

- **Demo or signup spike** — You can’t respond to WhatsApp within 2 hours or can’t deliver demo logins same day. Pipeline is full; quality of follow-up drops.
- **Onboarding backlog** — New clients are waiting more than a few days for go-live or training. Adding more leads will worsen wait times and satisfaction.
- **Support overload** — Existing clients aren’t getting answers or fixes in a reasonable time. New clients will get the same experience.
- **Product stability** — Payment flows, BalanceService, or other critical paths show higher error rates or latency. Pushing more traffic will stress the system and hurt reputation.
- **Single DB / no Redis** — If the product team reports DB load or connection limits approaching capacity, slow acquisition until infra is upgraded or optimised.

**Criteria:** Use support capacity and system reliability (error/latency thresholds), not vanity metrics (website visits, ad impressions). When in doubt, prioritise existing clients and demo delivery over new leads.

---

## When to Push Ads

Push paid or aggressive outbound when:

- **Pipeline is thin** — Few demos in the next 2 weeks; you have capacity to respond and run demos within 2 hours.
- **Product is stable** — No known critical bugs or performance issues; BalanceService and payment flows are healthy.
- **Onboarding is current** — No backlog; new signups can be onboarded within the promised window.
- **You have a clear offer** — Demo login, same-day reply, and (if you use it) a limited-time offer are clearly communicated so ads convert to demos, not bounces.

**Avoid:** Pushing paid traffic if demo delivery or onboarding is already backlogged. You’ll pay for leads you can’t serve and damage trust.

---

## How Many Customers Infra Can Realistically Handle Now

This requires product/backend input. The marketing repo does not have access to BalanceService or DB metrics.

**Recommendation for product team:** Define and document:

- Max concurrent users the current stack can support without degradation.
- Max tenants (or equivalent) the single DB can handle.
- Target p95 latency for critical paths (e.g. invoice creation, balance calculation, login).
- Any known bottlenecks (BalanceService, DB connections, etc.).

**Until that’s done:** Assume a conservative ramp. For example: 1–2 new paying clients per month, or a cap on total active tenants, so you don’t overload the system. Use “slow marketing” triggers above if you see stability or support issues before formal limits are set.

---

## When to Invest in Infra vs Marketing

**Invest in infra/process first when:**

- Growth is blocked by **stability** — Errors, downtime, or slow performance are hurting retention or demos.
- Growth is blocked by **support or onboarding** — You can’t deliver demos or onboard new clients on time; adding more leads will make it worse.
- Product team or monitoring shows the current stack is near its limits (DB, BalanceService, etc.).

**Invest in marketing first when:**

- **Pipeline is the bottleneck** — Product is stable, support and onboarding are current, but you don’t have enough demos or leads to hit your targets.
- You have capacity to respond to WhatsApp and run demos within 2 hours and no backlog.

**Decision frame:** If the constraint is “we can’t serve more customers well,” fix infra and process first. If the constraint is “we don’t have enough leads,” invest in marketing. Don’t assume “always do both” — prioritise the binding constraint.

---

*End of Scaling and Infra. Revisit when product team shares capacity or latency targets.*
