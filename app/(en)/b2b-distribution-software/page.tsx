import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "B2B Distribution Software — Credit, Routes, Multi-Branch | HexaBill",
  description:
    "B2B distribution software: credit control, route sales, multi-branch P&L. Built for Gulf distributors by a small team in Kerala, India.",
  keywords: ["B2B distribution software", "wholesale billing", "distribution management"],
  canonicalPath: "/b2b-distribution-software",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function B2bDistributionSoftwarePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          B2B Distribution Software
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          What makes B2B different from retail. Credit, routes, multi-branch. Built for Gulf distributors.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We don&apos;t offer a big marketing free trial. Instead, we share a demo login ID, let you explore for a day, and then move forward only if it feels right for your distribution business.
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
