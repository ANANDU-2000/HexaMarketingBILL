/**
 * Arabic hero content. Mirror of en with ar-AE copy.
 * Use headlineAr from doc: "هل تعرف مَن مِن عملائك لم يدفع حتى الآن؟"
 */
export const heroData = {
  headlines: [
    {
      id: "A",
      line1: "توقف عن خسارة الأموال",
      line2: "في مبيعات الآجلة.",
      line3: "تحكم في أعمال التوزيع — الآن.",
    },
    {
      id: "B",
      line1: "لديك 80 عميلاً بالآجل.",
      line2: "هل تعرف مَن مِن عملائك لم يدفع",
      line3: "حتى الآن؟",
    },
  ],
  activeHeadline: 0,
  subheadline:
    "هيكسابيل يعطي موزعي B2B في الخليج تحكماً كاملاً في الفواتير والآجل والضريبة والمخزون والطرق والموظفين — من لوحة واحدة. من جوالك.",
  cta: {
    primary: { label: "احجز عرضاً مجانياً", href: "/demo", tracking: "hero_cta_demo_clicked" as const },
    secondary: {
      label: "واتساب الآن",
      message: "مرحباً، أريد رؤية هيكسابيل لأعمال التوزيع في الإمارات.",
      tracking: "hero_cta_whatsapp_clicked" as const,
    },
  },
  trustStrip: [
    { icon: "shield", label: "ضريبة 5٪ إماراتية متوافقة مع FTA" },
    { icon: "route", label: "تحكم مبيعات بالطرق" },
    { icon: "dashboard", label: "لوحة مالك مباشرة" },
    { icon: "branch", label: "فروع متعددة" },
    { icon: "lock", label: "دفع آمن Stripe" },
  ],
  screenshot: {
    src: "/screenshots/dashboard-owner.svg",
    alt: "لوحة هيكسابيل",
    width: 1280,
    height: 720,
    videoSrc: undefined as string | undefined,
  },
};
