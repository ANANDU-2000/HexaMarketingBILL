export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Is my business data secure?",
    answer:
      "Your data is encrypted in transit (SSL) and at rest. Each company account is completely isolated — no other business can see your data. Daily automated backups. Stripe-secured payment processing.",
  },
  {
    question: "Does HexaBill work in Arabic?",
    answer:
      "Yes. Full Arabic interface for all users. Arabic product names, customer names, and invoices supported. RTL layout on Arabic pages. For Saudi Arabia customers: Arabic-first interface option available.",
  },
  {
    question: "Is it FTA compliant for UAE VAT?",
    answer:
      "Yes. Every invoice shows: base price, 5% VAT amount, and grand total separately — exactly as required by the UAE Federal Tax Authority. TRN number on all invoices. Monthly VAT summary report for filing.",
  },
  {
    question: "Can I export all my data if I want to leave?",
    answer:
      "Yes. Every report exports to Excel or PDF. Full data backup available as CSV + PDF invoice archive. Your data is always yours. No lock-in. Cancel anytime. Export before you go.",
  },
  {
    question: "What if internet goes down?",
    answer:
      "HexaBill is web-based. We recommend offline-capable devices for field staff (offline mode coming). For office use, a stable connection is required. We host on reliable infrastructure with 99.9% uptime.",
  },
  {
    question: "How long does setup take?",
    answer:
      "We set up your account within 24 hours. We import your product list and customer list from your Excel file. You're invoicing on day one. No technical skills needed.",
  },
  {
    question: "Can my staff use it on mobile in the field?",
    answer:
      "Yes. Fully mobile-responsive. Salesmen create invoices, check stock, and log customer visits directly on their phone during route visits. No app download — works in any mobile browser.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No contracts. Month-to-month only. Cancel anytime with one click. No setup fees. No cancellation fees. No lock-in. We start with a guided demo ID so you can see HexaBill with sample data before you decide.",
  },
  {
    question: "Can I have multiple branches and routes?",
    answer:
      "Yes. Multi-branch from day one. Each branch has its own staff, routes, expenses, and P&L. Branches can see their own data. Owner sees all branches consolidated in one dashboard.",
  },
  {
    question: "What support do you provide?",
    answer:
      "WhatsApp support during UAE business hours (9am-6pm GST). Response within 2 hours guaranteed. We also offer onboarding sessions by video call. Enterprise plans include phone support.",
  },
  {
    question: "How do I test HexaBill before buying?",
    answer:
      "We share a demo login ID and short walkthrough. You and your finance or sales head can explore screens for a day, then WhatsApp us with questions. If it feels right, we move to a full account.",
  },
];
