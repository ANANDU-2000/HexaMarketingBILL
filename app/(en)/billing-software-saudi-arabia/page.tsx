import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Billing Software Saudi Arabia — Riyadh & Jeddah B2B | HexaBill",
  description:
    "VAT 15% invoicing and distribution software for Saudi B2B. Riyadh, Jeddah. Arabic version. Start with a demo login instead of a free trial.",
  keywords: ["billing software Saudi Arabia", "VAT invoice Saudi", "B2B Riyadh", "distribution software Jeddah"],
  canonicalPath: "/billing-software-saudi-arabia",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function BillingSoftwareSaudiArabiaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Billing Software for Saudi Arabia Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Riyadh and Jeddah B2B. VAT 15%. Arabic version essential. HexaBill for Gulf distributors.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re based in Kerala, India and currently support a small number of Gulf distributors. You begin with a demo login ID so you can see how HexaBill handles Saudi VAT before paying.
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
