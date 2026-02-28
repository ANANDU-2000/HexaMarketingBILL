import { generateMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/sections/pricing";

export const metadata = generateMetadata({
  title: "Pricing | HexaBill — UAE Billing Software",
  description:
    "Simple pricing for Gulf distributors. We currently work with 3 B2B distributors in the Gulf and onboard each one personally.",
  keywords: ["HexaBill pricing", "billing software pricing UAE"],
  canonicalPath: "/pricing",
  locale: "en",
  pageType: "product",
});

export default function PricingPage() {
  return (
    <main>
      <div className="pt-24">
        <PricingSection />
      </div>
      <Footer />
    </main>
  );
}
