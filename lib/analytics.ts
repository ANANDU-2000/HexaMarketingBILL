import posthog from "posthog-js";

export function initAnalytics() {
  if (typeof window === "undefined") return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (key) {
    posthog.init(key, {
      api_host: "https://app.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
    });
  }
}

export const track = {
  heroCtaDemoClicked: () => posthog.capture("hero_cta_demo_clicked"),
  heroCtaWhatsappClicked: () => posthog.capture("hero_cta_whatsapp_clicked"),
  whatsappFloatClicked: (page: string) =>
    posthog.capture("whatsapp_float_clicked", { page }),
  sectionViewed: (section: string) =>
    posthog.capture("section_viewed", { section }),
  pricingPlanClicked: (plan: string) =>
    posthog.capture("pricing_plan_clicked", { plan }),
  demoCalendlyClicked: () => posthog.capture("demo_calendly_clicked"),
  demoWhatsappClicked: () => posthog.capture("demo_whatsapp_clicked"),
  faqItemOpened: (question: string) =>
    posthog.capture("faq_opened", { question }),
  blogPostViewed: (slug: string) =>
    posthog.capture("blog_post_viewed", { slug }),
  blogCtaClicked: (slug: string, position: string) =>
    posthog.capture("blog_cta_clicked", { slug, position }),
  navDemoClicked: () => posthog.capture("nav_demo_clicked"),
  navPricingClicked: () => posthog.capture("nav_pricing_clicked"),
  locationPageViewed: (city: string) =>
    posthog.capture("location_page_viewed", { city }),
  featuresDetailCtaClicked: (slug: string, type: "demo" | "whatsapp") =>
    posthog.capture("features_detail_cta_clicked", { slug, type }),
};
