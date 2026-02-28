import { Hero } from "@/sections/hero";
import { PainSection } from "@/sections/pain";
import { SolutionSection } from "@/sections/solution";
import { FeatureSection } from "@/sections/features";
import { RoleSection } from "@/sections/roles";
import { ProofSection } from "@/sections/proof";
import { PricingSection } from "@/sections/pricing";
import { DemoSection } from "@/sections/demo";
import { FAQSection } from "@/sections/faq";
import { Footer } from "@/components/layout/Footer";
import { PageSEO } from "@/components/seo/PageSEO";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "UAE Billing Software for B2B Distributors | HexaBill",
  description:
    "Auto UAE VAT, credit aging, route sales, multi-branch P&L. HexaBill is built for Gulf distributors by a small team in Kerala, India.",
  keywords: [
    "UAE billing software",
    "VAT invoice software UAE",
    "B2B distribution software UAE",
    "billing software Dubai",
    "credit management software Gulf",
  ],
  canonicalPath: "/",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "home",
});

export default function HomePage() {
  return (
    <>
      <PageSEO schemaType="all" />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <PainSection />
        <SolutionSection />
        <FeatureSection />
        <RoleSection />
        <ProofSection />
        <PricingSection />
        <DemoSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
