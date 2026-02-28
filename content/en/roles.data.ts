export const rolesData = [
  {
    id: "owner",
    label: "Owner",
    statement:
      "You built this business. You should be able to see everything from your phone.",
    screenshot: "/screenshots/dashboard-owner.svg",
    benefits: [
      "Today's total sales, cash vs credit — one number, right now",
      "Which customers are over credit limit and need a call today",
      "Your 3 salesmen's performance vs target — who is behind",
      "Low stock alerts — what to order before tomorrow's deliveries",
    ],
    close: "Peace of mind. From anywhere. At any time.",
    cta: "See the owner dashboard →",
    ctaHref: "#feature-dashboard",
  },
  {
    id: "admin",
    label: "Admin / Accountant",
    statement:
      "You need numbers to be right. VAT to be right. And the FTA to never come knocking.",
    screenshot: "/screenshots/dashboard-owner.svg",
    benefits: [
      "Customer ledger: every invoice, payment, return, and cheque in one view",
      "VAT summary report ready for FTA filing — no manual calculation",
      "Expense approval workflow: review, approve, or reject staff expense claims",
      "Audit log: see every change made to every record, by who, when",
    ],
    close: "Complete accuracy. FTA-ready. Always.",
    cta: "See the customer ledger →",
    ctaHref: "#feature-credit",
  },
  {
    id: "staff",
    label: "Sales Staff",
    statement:
      "You're in the field. You need to invoice fast, collect fast, and look professional.",
    screenshot: "/screenshots/dashboard-owner.svg",
    benefits: [
      "Create a full VAT invoice in under 60 seconds on your phone",
      "Your route customers are pre-loaded — no searching through hundreds of records",
      "Generate professional PDF and share via WhatsApp instantly",
      "Held invoices: pause and resume mid-sale without losing anything",
    ],
    close: "Professional. Fast. Customers are impressed.",
    cta: "Try it now →",
    ctaHref: "/demo",
  },
];
