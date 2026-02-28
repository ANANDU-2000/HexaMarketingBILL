import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/content/blog/posts";
import { generateMetadata as makeMetadata } from "@/lib/seo";
import { buildWhatsAppUrl, WHATSAPP_MESSAGE_EN } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | HexaBill" };
  return makeMetadata({
    title: `${post.title} | HexaBill Blog`,
    description: post.description,
    keywords: ["billing software UAE", "Gulf distributors", "HexaBill"],
    canonicalPath: `/blog/${post.slug}`,
    ogImage: "/og/home.png",
    locale: "en",
    pageType: "blog",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const whatsappUrl = buildWhatsAppUrl(
    `${WHATSAPP_MESSAGE_EN}\n\nBlog article: ${post.title}\nSource: /blog/${slug}`,
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365",
  );

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article>
          <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mb-4 leading-snug">
            {post.title}
          </h1>
          <p className="text-text-muted text-sm mb-1">{post.date}</p>
          <p className="text-text-secondary text-sm mb-6">
            By the HexaBill founders · for Gulf distribution owners and finance heads
          </p>
          <p className="text-text-secondary text-base mb-8 leading-relaxed">{post.description}</p>
          <p className="text-text-secondary text-base mb-12 leading-relaxed">
            Full article content (MDX) can be loaded here. See how HexaBill fixes these issues — book a demo.
          </p>
          {post.featureSlug && (
            <p className="text-text-secondary text-sm mb-10 leading-relaxed">
              Want to see how HexaBill handles this in the product?{" "}
              <Link href={`/features/${post.featureSlug}`} className="text-primary hover:underline">
                View the matching feature →
              </Link>
            </p>
          )}
        </article>
        <div className="flex flex-wrap gap-4">
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Get Demo Login
            </Button>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              WhatsApp the Founder
            </Button>
          </a>
          <Link href="/blog">
            <Button variant="secondary" size="lg">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
