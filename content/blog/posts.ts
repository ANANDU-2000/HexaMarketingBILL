export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  featureSlug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "uae-distributor-excel-mistakes",
    title: "10 Excel Billing Mistakes UAE Distributors Make",
    description: "Costly mistakes Gulf distributors make with Excel — and how to fix them.",
    date: "2026-02-01",
    featureSlug: "credit-control",
  },
  {
    slug: "vat-fta-mistakes-gulf",
    title: "VAT & FTA Mistakes That Cause Gulf Fines",
    description: "VAT errors causing FTA fines — real examples and how to avoid them.",
    date: "2026-02-15",
    featureSlug: "vat-invoicing",
  },
  {
    slug: "route-sales-management-guide",
    title: "Route Sales Management Guide for Gulf B2B",
    description: "How to run route-based distribution with clear P&L and staff isolation.",
    date: "2026-03-01",
    featureSlug: "route-branch-control",
  },
  {
    slug: "credit-control-distributors-uae",
    title: "Credit Control for Distributors in the UAE",
    description: "Aging reports, credit limits, and bad debt prevention.",
    date: "2026-03-15",
    featureSlug: "credit-control",
  },
  {
    slug: "branch-route-profit-explained",
    title: "Branch and Route Profit Explained",
    description: "Multi-branch P&L and per-route profitability for Gulf distributors.",
    date: "2026-04-01",
    featureSlug: "route-branch-control",
  },
];
