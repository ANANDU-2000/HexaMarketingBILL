import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = generateMetadata({
  title: "Route Sales Software Gulf — Staff Isolation & Route P&L | HexaBill",
  description:
    "Route-based distribution software. Each salesman sees only their route. Full route P&L. Gulf B2B.",
  keywords: ["route sales software Gulf", "distribution routes", "salesman route management"],
  canonicalPath: "/route-sales-software-gulf",
  ogImage: "/og/home.png",
  locale: "en",
  pageType: "location",
});

export default function RouteSalesSoftwareGulfPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Route Sales Software for Gulf Distributors
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Staff isolation, route P&L, customer visits. Built for route-based B2B distribution.
        </p>
        <div className="prose prose-base max-w-none text-text-secondary space-y-6 mb-12">
          <p>
            We&apos;re not a big SaaS with thousands of customers. We currently work with 3 Gulf distributors and start every engagement with a demo login so you can see route control in action first.
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
