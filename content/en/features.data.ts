export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  context: string;
  screenshot: string;
  bullets: string[];
  slug: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: "dashboard",
    number: "01",
    title: "Real-Time Owner Dashboard",
    context: "67% of Gulf SME owners check business status on phone daily",
    screenshot: "/screenshots/owner-dashboard-desktop.png.png",
    slug: "owner-dashboard",
    bullets: [
      "Today's sales vs yesterday — cash vs credit split shown instantly",
      "Outstanding balance total — which customers haven't paid",
      "Low stock alerts — products below reorder level",
      "Top 5 customers by revenue this month",
    ],
  },
  {
    id: "credit",
    number: "02",
    title: "Credit Control & Aging Report",
    context: "Gulf distributors lose avg 8% revenue to untracked credit annually",
    screenshot: "/screenshots/credit-control-desktop.png.png",
    slug: "credit-control",
    bullets: [
      "Who owes 0-30 days / 30-60 days / 60-90+ days at a glance",
      "Auto-block customers who exceed their credit limit — no override for staff",
      "Customer credit note and refund settlement workflow",
      "Exportable aging PDF for bank or accountant review",
    ],
  },
  {
    id: "vat",
    number: "03",
    title: "FTA-Compliant VAT Invoicing",
    context: "FTA issued 2,300+ fines to UAE businesses in 2025",
    screenshot: "/screenshots/vat-invoicing-desktop.png.png",
    slug: "vat-invoicing",
    bullets: [
      "Auto 5% UAE VAT calculated on every line item — no manual entry",
      "Invoice PDF shows base price + VAT + total separately (FTA requirement)",
      "Monthly VAT summary report ready for FTA filing",
      "Per-tenant invoice templates with company logo and TRN number",
    ],
  },
  {
    id: "routes",
    number: "04",
    title: "Route-Based Sales Control",
    context: "Gulf B2B companies have average 3-8 separate sales routes",
    screenshot: "/screenshots/dashboard-owner.svg",
    slug: "route-branch-control",
    bullets: [
      "Each salesman sees ONLY customers on their assigned route — backend enforced",
      "Route P&L: sales, expenses, returns, and profit per route per period",
      "Customer visit tracking — mark visits, record notes, track collections",
      "Route expense logging: fuel, delivery, driver costs per route",
    ],
  },
  {
    id: "inventory",
    number: "05",
    title: "Inventory & Damage Tracking",
    context: "40% of Gulf distributors have 10%+ monthly stock variance",
    screenshot: "/screenshots/inventory-damage-desktop.png.png",
    slug: "inventory-damage",
    bullets: [
      "Every stock movement logged: sales, purchases, returns, manual adjustments",
      "Damage categories: affects stock, affects ledger, is resaleable — tracked separately",
      "Low stock alerts fire automatically at reorder level per product",
      "Multi-unit products: sell by box, carton, or piece with auto conversion",
    ],
  },
  {
    id: "staff",
    number: "06",
    title: "Staff Permissions & Audit Trail",
    context: "80% of Gulf distributor fraud involves unauthorized discounts",
    screenshot: "/screenshots/dashboard-owner.svg",
    slug: "staff-audit",
    bullets: [
      "Staff sees ONLY assigned pages — invoices, routes, no admin access",
      "Discount limits per staff — cannot give more than allowed percentage",
      "Every change logged: OldValue → NewValue with timestamp and staff ID",
      "Invoice locks after 8 hours — no backdating or silent edits",
    ],
  },
];
