import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Billing Software Qatar — B2B Distribution & VAT | HexaBill",
  description:
    "Billing and VAT invoicing for Qatar B2B distributors. Doha. Arabic-first. Honest demo login instead of free trial claims.",
  keywords: ["billing software Qatar", "VAT invoice Qatar", "B2B distribution Qatar"],
  canonicalPath: "/billing-software-qatar",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function BillingSoftwareQatarPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Billing Software for Qatar B2B Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Doha B2B, VAT 2023, Arabic-first. HexaBill for Gulf distributors.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re a small Kerala-based team working with a handful of Gulf distributors. You start with a demo login, explore for a day, then decide if you want a full account.
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
