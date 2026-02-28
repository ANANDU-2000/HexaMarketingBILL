import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export const metadata = generateMetadata({
  title: "Privacy Policy | HexaBill",
  description: "HexaBill privacy policy and data handling for Gulf B2B distributors.",
  keywords: ["HexaBill privacy", "data protection UAE"],
  canonicalPath: "/privacy",
  locale: "en",
  pageType: "product",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-6 leading-snug">
          Privacy Policy
        </h1>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          We respect your privacy. This page will be updated with our full privacy policy. For questions, contact us via{" "}
          <Link href="/#demo" className="text-primary font-medium hover:underline">the contact section</Link> or WhatsApp.
        </p>
        <Link href="/" className="text-primary font-medium hover:underline">
          ← Back to home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
