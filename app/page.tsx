import { Hero } from "@/sections/hero";
import { PainSection } from "@/sections/pain";
import { SolutionSection } from "@/sections/solution";
import { FeatureSection } from "@/sections/features";
import { BenefitsSection } from "@/sections/benefits";
import { AudienceSection } from "@/sections/audience";
import { RoleSection } from "@/sections/roles";
import { ProofSection } from "@/sections/proof";
import { PricingSection } from "@/sections/pricing";
import { DemoSection } from "@/sections/demo";
import { FAQSection } from "@/sections/faq";
import { Footer } from "@/components/layout/Footer";
import { PageSEO } from "@/components/seo/PageSEO";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Billing & Inventory Software for UAE Distributors | HexaBill",
  description:
    "Manage sales, inventory, customers, and payments in one system. HexaBill automates billing, inventory, and reports for Gulf distributors. Book a demo.",
  keywords: [
    "UAE billing software",
    "billing and inventory software UAE",
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
        <BenefitsSection />
        <AudienceSection />
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
