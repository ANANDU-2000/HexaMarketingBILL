import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Inventory Software Dubai — Stock, Damage, Warehouse | HexaBill",
  description:
    "Inventory and stock management for Dubai distributors. Low stock alerts, damage tracking. Start with a demo login instead of a free trial.",
  keywords: ["inventory software Dubai", "stock management Dubai", "warehouse software UAE"],
  canonicalPath: "/inventory-software-dubai",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function InventorySoftwareDubaiPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Inventory Software for Dubai Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Stock management, damage categories, low stock alerts. Gulf B2B.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re a small Kerala-based team currently serving 3 distributors in the Gulf. We begin with a demo login ID so you can explore inventory and damage flows yourself.
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
