import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "VAT Invoice Software UAE — FTA Compliant Invoicing | HexaBill",
  description:
    "FTA-compliant VAT invoice software for UAE. 5% VAT per line, TRN, summary reports. Start with a demo login ID instead of a free trial.",
  keywords: ["VAT invoice software UAE", "FTA compliant invoicing", "UAE VAT software"],
  canonicalPath: "/vat-invoice-software-uae",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function VatInvoiceSoftwareUaePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          VAT Invoice Software for UAE
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          FTA-compliant 5% VAT, TRN on every invoice, monthly VAT summary. Built for Gulf B2B.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re a small Kerala-based product team currently serving 3 Gulf distributors. We start with a demo login so you can check VAT layouts and reports before moving to a paid account.
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
