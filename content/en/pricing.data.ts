export interface PlanItem {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
}

export const plansData: PlanItem[] = [
  {
    id: "basic",
    name: "Basic",
    price: "AED 250",
    period: "/month",
    description: "For small distributors testing HexaBill on a single branch.",
    features: [
      "All HexaBill features",
      "1 branch",
      "1 route / van",
      "2 staff users",
      "Limited document storage",
    ],
    cta: "Start on Basic",
    href: "/demo",
  },
  {
    id: "pro",
    name: "Pro",
    price: "AED 350",
    period: "/month",
    description: "For growing Gulf distributors with multiple branches.",
    features: [
      "All Basic features",
      "2 branches",
      "3 routes / vans",
      "5 staff users",
      "More storage for invoices & documents",
    ],
    cta: "Start on Pro",
    href: "/demo",
    highlighted: true,
    badge: "Most distributors choose this",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For fleets, 5+ branches, or complex credit/route setups.",
    features: [
      "Unlimited branches",
      "Unlimited routes / vans",
      "Unlimited staff users",
      "Larger storage quotas",
      "Custom reports + onboarding",
    ],
    cta: "WhatsApp the Founder",
    href: "/demo", // actual WhatsApp link is handled in PlanCard for this plan
  },
];

export const comparisonRows = [
  { feature: "Route-based staff isolation", excel: false, busy: false, hexabill: true },
  { feature: "Credit aging report", excel: false, busy: "Partial", hexabill: "Yes" },
  { feature: "FTA VAT compliance", excel: "Manual", busy: "Partial", hexabill: "Auto" },
  { feature: "Field-level audit trail", excel: false, busy: false, hexabill: true },
  { feature: "Invoice version history", excel: false, busy: false, hexabill: true },
  { feature: "Multi-branch P&L", excel: false, busy: "Partial", hexabill: "Full" },
  { feature: "Damage return categories", excel: false, busy: false, hexabill: true },
  { feature: "Real-time owner dashboard", excel: false, busy: false, hexabill: true },
  { feature: "Gulf-specific support", excel: false, busy: false, hexabill: true },
];
