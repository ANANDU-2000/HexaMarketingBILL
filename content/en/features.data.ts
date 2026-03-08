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
    id: "pos",
    number: "01",
    title: "POS Billing",
    context: "Create and print invoices in seconds so your team spends less time on paperwork.",
    screenshot: "/screenshots/pos-billing.png",
    slug: "pos-billing",
    bullets: [
      "Create invoices in seconds with cart and checkout",
      "Print invoice on the spot for route sales",
      "Route sales: invoice from the field and sync to head office",
    ],
  },
  {
    id: "inventory",
    number: "02",
    title: "Inventory Management",
    context: "Track stock automatically so you never oversell or run out without warning.",
    screenshot: "/screenshots/inventory-products.png",
    slug: "inventory-damage",
    bullets: [
      "Track stock automatically on every sale and purchase",
      "Low stock alerts before you run out",
      "Purchase tracking and stock movement history",
    ],
  },
  {
    id: "supplier",
    number: "03",
    title: "Supplier Management",
    context: "Know what you owe suppliers and what they delivered – one ledger per supplier.",
    screenshot: "/screenshots/supplier-ledger.png",
    slug: "supplier-management",
    bullets: [
      "Track purchases and supplier credit in one place",
      "Credit and payment history per supplier",
      "Supplier ledger: what you owe, what you paid, and when",
    ],
  },
  {
    id: "credit",
    number: "04",
    title: "Customer Ledger",
    context: "See outstanding invoices and payment history so you know exactly who owes you.",
    screenshot: "/screenshots/customer-ledger.png",
    slug: "credit-control",
    bullets: [
      "Track customer credit and outstanding invoices at a glance",
      "Payment history and ageing: 0–30, 30–60, 60–90+ days",
      "Exportable ledger and statements for banks and auditors",
    ],
  },
  {
    id: "routes",
    number: "05",
    title: "Route Sales System",
    context: "Branch, route, and staff under control – performance and P&L per route.",
    screenshot: "/screenshots/route-performance.png",
    slug: "route-branch-control",
    bullets: [
      "Assign staff to branches and routes – they see only their customers",
      "Route performance: sales, collections, and expenses per route",
      "Track visits, notes, and collections from the field",
    ],
  },
  {
    id: "reports",
    number: "06",
    title: "Reports & Profit",
    context: "Owners love this: sales report, profit, and outstanding payments in one place.",
    screenshot: "/screenshots/reports-dashboard.png",
    slug: "reports-profit",
    bullets: [
      "Sales report by period, branch, or route",
      "Profit view: revenue, cost, and margin at a glance",
      "Outstanding payments and ageing summary for quick decisions",
    ],
  },
  {
    id: "vat",
    number: "07",
    title: "VAT Compliance (UAE)",
    context: "Stay FTA-ready with automatic VAT and tax reports – no manual errors.",
    screenshot: "/screenshots/vat-invoicing-desktop.png.png",
    slug: "vat-invoicing",
    bullets: [
      "VAT return and tax report ready for your accountant",
      "Auto 5% UAE VAT on every line – FTA-compliant invoices",
      "Monthly VAT summary for filing and audits",
    ],
  },
  {
    id: "invoice",
    number: "08",
    title: "Invoice PDF & Email",
    context: "Print professional invoices and send them by email or WhatsApp in one click.",
    screenshot: "/screenshots/invoice-pdf-email.png",
    slug: "invoice-pdf-email",
    bullets: [
      "Invoice print: professional PDF with your logo and TRN",
      "Email sending: send invoice to customer from the same screen",
      "Share via WhatsApp for fast delivery on route",
    ],
  },
];
