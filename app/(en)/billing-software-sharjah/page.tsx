import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Billing Software Sharjah — For FMCG & Industrial Distributors | HexaBill",
  description:
    "VAT invoicing, credit control, and route sales for Sharjah distributors. Hamriyah Free Zone, industrial areas. Honest demo login instead of free trial claims.",
  keywords: ["billing software Sharjah", "invoicing Sharjah", "FMCG distribution Sharjah"],
  canonicalPath: "/billing-software-sharjah",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function BillingSoftwareSharjahPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Billing Software for Sharjah Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Sharjah industrial area and Hamriyah Free Zone — HexaBill handles VAT, routes, and credit for Sharjah B2B.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            Built for Gulf distributors by a small team in Kerala, India. We currently work with 3 distributors in the Gulf and start each one with a demo login, not a fake 14-day free trial.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/demo">
            <Button variant="primary" size="lg">Get Demo Login</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
