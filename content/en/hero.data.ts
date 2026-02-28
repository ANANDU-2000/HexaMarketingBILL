export const heroData = {
  headlines: [
    {
      id: "A",
      line1: "Billing Software for Gulf Distributors.",
      line2: "VAT, Credit, Routes —",
      line3: "One Dashboard.",
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
    "HexaBill is built for UAE and GCC distributors — not generic invoicing. Route sales, branch P&L, FTA VAT, and credit aging from day one. We give you a demo login so you can see it; we work with 3 distributors in the Gulf and reply within 2 hours on WhatsApp.",
  cta: {
    primary: {
      label: "Get Demo Login",
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
    { icon: "branch", label: "Credit Aging & Limits" },
    { icon: "lock", label: "Stripe Secured" },
  ],
  screenshot: {
    src: "/screenshots/dashboard-owner.svg",
    alt: "HexaBill owner dashboard showing real-time sales, credit, and inventory data",
    width: 1280,
    height: 720,
    /** Optional video URL (mp4/webm). When set, hero shows VideoPlaceholder with play. */
    videoSrc: undefined as string | undefined,
  },
} as const;

export type HeroData = typeof heroData;
