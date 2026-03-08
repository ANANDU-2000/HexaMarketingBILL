export const heroData = {
  headlines: [
    {
      id: "A",
      line1: "Billing & Inventory Software",
      line2: "for UAE Distributors.",
      line3: "One System.",
    },
    {
      id: "B",
      line1: "You Have 80 Customers on Credit.",
      line2: "Do You Know Exactly Who Owes What",
      line3: "Today?",
    },
  ],
  /** Version C (Arabic) placeholder — use in ar/hero.data.ts */
  headlineAr: "هل تعرف مَن مِن عملائك لم يدفع حتى الآن؟",
  activeHeadline: 0,
  subheadline:
    "Manage sales, inventory, customers, and payments in one system. HexaBill automates your billing, inventory, and reports so you stay in control. We give you a demo login to see it; we work with distributors in the Gulf and reply within 2 hours on WhatsApp.",
  cta: {
    primary: {
      label: "Book Demo",
      href: "/demo",
      tracking: "hero_cta_demo_clicked",
    },
    secondary: {
      label: "WhatsApp the Founder",
      message:
        "Hi, I run a distribution or wholesale business and want to see a HexaBill demo.",
      tracking: "hero_cta_whatsapp_clicked",
    },
  },
  trustStrip: [
    { icon: "shield", label: "Built for Distributors" },
    { icon: "route", label: "Route & Branch Control" },
    { icon: "dashboard", label: "5% UAE VAT FTA-Compliant" },
    { icon: "branch", label: "Credit & Customer Ledger" },
    { icon: "lock", label: "Stripe Secured" },
  ],
  screenshot: {
    src: "/screenshots/dashboard-owner.svg",
    alt: "HexaBill dashboard showing billing, inventory, and reports",
    width: 1280,
    height: 720,
    /** Optional video URL (mp4/webm). When set, hero shows VideoPlaceholder with play. */
    videoSrc: undefined as string | undefined,
  },
} as const;

export type HeroData = typeof heroData;
