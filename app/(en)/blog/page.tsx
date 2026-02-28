import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/content/blog/posts";

export const metadata = generateMetadata({
  title: "Gulf Distributor Billing Guides & Resources | HexaBill",
  description: "Articles on billing, VAT, route sales, and credit control for Gulf B2B distributors.",
  keywords: ["billing blog UAE", "distributor guides Gulf"],
  canonicalPath: "/blog",
  locale: "en",
  pageType: "blog",
});

const topicBySlug: Record<string, string> = {
  "uae-distributor-excel-mistakes": "Credit & Excel",
  "vat-fta-mistakes-gulf": "VAT & FTA",
  "route-sales-management-guide": "Route sales",
  "credit-control-distributors-uae": "Credit control",
  "branch-route-profit-explained": "Branches & routes",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-8 leading-snug">
          Blog
        </h1>
        <p className="text-text-secondary text-base mb-12 leading-relaxed">
          For Gulf B2B distribution owners, GMs, and finance heads who want
          better control over credit, VAT, routes, and branches.
        </p>
        {blogPosts.length === 0 ? (
          <p className="text-text-muted text-base">No posts yet.</p>
        ) : (
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-xl bg-surface border border-border shadow-card hover:border-primary transition-colors"
              >
                <h2 className="font-dm font-semibold text-text-primary text-lg mb-2">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-base mb-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-text-secondary">
                    {topicBySlug[post.slug] ?? "Distribution"}
                  </span>
                  <span className="text-text-muted">
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
