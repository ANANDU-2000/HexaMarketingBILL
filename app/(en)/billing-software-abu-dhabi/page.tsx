import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Billing Software Abu Dhabi — For Contractors & Supply Chain | HexaBill",
  description:
    "VAT invoicing and credit control for Abu Dhabi B2B. Contractors, ADNOC supply chain. Start with an honest demo login, not a free trial claim.",
  keywords: ["billing software Abu Dhabi", "invoicing Abu Dhabi", "B2B billing UAE"],
  canonicalPath: "/billing-software-abu-dhabi",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function BillingSoftwareAbuDhabiPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Billing Software for Abu Dhabi Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Abu Dhabi contractors and supply chain — HexaBill for VAT, credit, and route sales.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re a small product team in Kerala, India working with a few Gulf distributors. We begin every engagement with a demo login ID so you can see if HexaBill fits your Abu Dhabi workflows.
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
