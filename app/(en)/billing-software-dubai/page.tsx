import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Billing Software Dubai — For B2B Distributors & Wholesalers | HexaBill",
  description:
    "Auto UAE VAT, credit aging, route sales for Dubai distributors. Designed for JAFZA, DIP, and Deira-style wholesale companies. No fake free trial claims.",
  keywords: [
    "billing software Dubai",
    "invoicing software Dubai",
    "B2B billing software Dubai",
    "FMCG distribution software Dubai",
    "VAT billing software Dubai UAE",
    "wholesale billing software Dubai",
  ],
  canonicalPath: "/billing-software-dubai",
  ogImage: "/og/dubai.png",
  locale: "en",
  pageType: "location",
});

export default function BillingSoftwareDubaiPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Billing Software Built for Dubai Distributors
        </h1>
        <p className="text-text-secondary text-base mb-8 leading-relaxed">
          From JAFZA to Deira to DIP — HexaBill is designed to handle VAT, routes, credit, and
          inventory for Dubai&apos;s B2B businesses, even though we currently work with just a few distributors in the Gulf.
        </p>
        <div className="prose prose-invert prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            Dubai is the Gulf&apos;s largest B2B trading hub. From the wholesale
            markets of Deira to the manufacturing corridors of DIP and the free
            zone companies of JAFZA, Dubai distributors handle some of the
            highest-volume B2B sales in the region. They also face the strictest
            FTA VAT enforcement. HexaBill was built specifically for this
            environment.
          </p>
          <h2 className="font-dm font-semibold text-text-primary text-lg mt-10">
            Why Dubai distributors need better billing software
          </h2>
          <p>
            Whether you&apos;re in Business Bay, DEWA traders, or the Deira
            wholesale market, you need FTA-compliant invoicing, real-time
            credit control, and route-based sales visibility. HexaBill delivers
            all of this through a demo login first, then a paid account if it fits you.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Get Demo Login
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
