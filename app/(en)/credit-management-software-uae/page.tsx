import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Credit Management Software UAE — Aging & Bad Debt Prevention | HexaBill",
  description:
    "Credit aging, limits, ledger, and bad debt prevention for UAE distributors. Start with a demo login, not a free trial.",
  keywords: ["credit management software UAE", "aging report", "credit limit", "bad debt"],
  canonicalPath: "/credit-management-software-uae",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function CreditManagementSoftwareUaePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Credit Management Software for UAE
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Aging report, credit limits, customer ledger. Prevent bad debt. Gulf B2B.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re a small team in Kerala, India currently working with 3 Gulf distributors. We begin by giving you a demo login so you can see aging and limits in action.
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
