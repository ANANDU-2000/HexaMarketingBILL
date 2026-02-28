import { generateMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { PageSEO } from "@/components/seo/PageSEO";
import { featureDetails } from "@/content/en/features-detail.data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = generateMetadata({
  title: "HexaBill Features for Gulf Distributors",
  description:
    "See how HexaBill handles credit control, VAT invoicing, routes & branches, inventory, and staff audit for Gulf B2B distributors.",
  keywords: [
    "distribution software UAE features",
    "credit aging software Gulf",
    "VAT invoice software UAE",
    "route sales software Gulf",
  ],
  canonicalPath: "/features",
  locale: "en",
  pageType: "product",
});

export default function FeaturesPage() {
  const pillars = Object.values(featureDetails);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I want a HexaBill demo login ID to see these features for my distribution business.",
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365",
  );

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageSEO schemaType="software" />
        <header className="max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wide">
            Features
          </p>
          <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mt-2 leading-snug">
            What problems HexaBill actually solves for Gulf distributors.
          </h1>
          <p className="text-text-secondary text-base mt-4 leading-relaxed">
            HexaBill is built for B2B distributors who run routes, give credit,
            manage VAT, and control multiple branches. Explore each pillar
            below, then talk directly with the founders about your routes and
            credit worries.
          </p>
        </header>

        <section className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.slug}
              className="rounded-xl border border-border bg-surface p-7 flex flex-col shadow-card"
            >
              <div className="flex flex-col md:flex-row gap-5 h-full">
                <div className="md:w-[55%] flex-shrink-0 order-2 md:order-1">
                  <div className="relative w-full aspect-[16/10] rounded-lg border border-border bg-surface-2 overflow-hidden">
                    <Image
                      src={
                        pillar.thumbnail ||
                        pillar.desktopScreenshot ||
                        pillar.screenshot
                      }
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <h2 className="font-dm font-semibold text-lg text-text-primary mb-2">
                    {pillar.title}
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed mb-3">
                    {pillar.heroSubheading}
                  </p>
                  <ul className="space-y-2 text-base text-text-primary leading-relaxed">
                    {pillar.painBullets.slice(0, 1).map((p) => (
                      <li key={p}>
                        <span className="text-red mr-1">•</span>
                        {p}
                      </li>
                    ))}
                    {pillar.solutionBullets.slice(0, 2).map((s) => (
                      <li key={s}>
                        <span className="text-green mr-1">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/features/${pillar.slug}`}
                    className="mt-4 inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    See how this works →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 p-8 rounded-xl bg-surface-2 border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-dm font-semibold text-text-primary text-base">
              Not sure which feature matters most?
            </h2>
            <p className="text-text-secondary text-base mt-2 leading-relaxed">
              WhatsApp the founders, share your routes and credit worries, and we&apos;ll send a demo login ID plus a short walkthrough tailored to you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="md">
                WhatsApp the Founder
              </Button>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

