import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { featureDetails } from "@/content/en/features-detail.data";
import { generateMetadata as makeMetadata } from "@/lib/seo";
import { PageSEO } from "@/components/seo/PageSEO";
import { buildWhatsAppUrl, WHATSAPP_MESSAGE_EN } from "@/lib/whatsapp";

const featureKeys = Object.keys(featureDetails);

export async function generateStaticParams() {
  return featureKeys.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = featureDetails[slug];
  if (!detail) return makeMetadata({
    title: "HexaBill Features",
    description: "HexaBill features for Gulf B2B distributors.",
    keywords: ["billing software UAE", "Gulf distributors"],
    canonicalPath: "/features",
    locale: "en",
    pageType: "product",
  });

  return makeMetadata({
    title: `${detail.title} | HexaBill Features`,
    description: detail.heroSubheading,
    keywords: [
      detail.title,
      "distribution software UAE",
      "billing software Gulf",
    ],
    canonicalPath: `/features/${detail.slug}`,
    ogImage: "/og/home.png",
    locale: "en",
    pageType: "product",
  });
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = featureDetails[slug];
  if (!detail) notFound();

  const whatsappUrl = buildWhatsAppUrl(
    `${WHATSAPP_MESSAGE_EN}\n\nFeature page: ${detail.title}`,
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365",
  );

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageSEO schemaType="software" />
        <div className="mb-6">
          <Link
            href="/features"
            className="text-primary text-sm font-medium hover:underline"
          >
            ← Back to Features
          </Link>
        </div>

        <section className="grid lg:grid-cols-[55%_45%] gap-8 items-center mb-12">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wide">
              HexaBill Feature
            </p>
            <h1 className="font-dm font-bold text-2xl md:text-3xl text-text-primary mt-2 leading-snug">
              {detail.heroHeading}
            </h1>
            <p className="text-text-secondary text-base mt-4 leading-relaxed">
              {detail.heroSubheading}
            </p>
            {detail.metricsOrStats && (
              <p className="text-text-muted text-base mt-4">
                {detail.metricsOrStats[0]}
              </p>
            )}
          </div>
          <div className="max-w-xl mx-auto w-full">
            {detail.videoUrl ? (
              <VideoPlaceholder
                src={detail.videoUrl}
                poster={detail.desktopScreenshot || detail.screenshot}
                title={detail.title}
                aspectRatio="video"
              />
            ) : (
              <DeviceFrame
                kind="desktop"
                src={detail.desktopScreenshot || detail.screenshot}
                alt={detail.title}
                label="Desktop view"
              />
            )}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="font-dm font-semibold text-lg text-text-primary mb-3">
              Problems this solves for owners
            </h2>
            <ul className="space-y-2 text-text-secondary text-base leading-relaxed">
              {detail.painBullets.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-dm font-semibold text-lg text-text-primary mb-3">
              What HexaBill does for this
            </h2>
            <ul className="space-y-2 text-text-secondary text-base leading-relaxed">
              {detail.solutionBullets.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-dm font-semibold text-lg text-text-primary mb-3">
            How it works day to day
          </h2>
          <ol className="space-y-2 text-text-secondary text-base leading-relaxed list-decimal list-inside">
            <li>
              Your team records invoices, collections, and stock movements as
              they happen.
            </li>
            <li>
              HexaBill enforces the rules for this feature – credit limits,
              VAT, routes, inventory, or staff permissions – in real time.
            </li>
            <li>
              As an owner you open the dashboard or reports and see one
              trusted view of the truth for this area of the business.
            </li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="font-dm font-semibold text-lg text-text-primary mb-3">
            What this means for you
          </h2>
          <ul className="space-y-2 text-text-secondary text-base leading-relaxed">
            <li>• Less time chasing Excel and WhatsApp for answers.</li>
            <li>• Fewer surprises in credit, VAT, stock, or staff behaviour.</li>
            <li>• More confidence when taking distributor decisions each week.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-dm font-semibold text-lg text-text-primary mb-3">
            How it looks on every device
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="max-w-sm md:max-w-none mx-auto w-full">
              <DeviceFrame
                kind="desktop"
                src={detail.desktopScreenshot || detail.screenshot}
                alt={`${detail.title} – desktop`}
                label="Desktop"
              />
            </div>
            <div className="max-w-sm md:max-w-none mx-auto w-full">
              <DeviceFrame
                kind="tablet"
                src={detail.tabletScreenshot || detail.screenshot}
                alt={`${detail.title} – tablet`}
                label="Tablet"
              />
            </div>
            <div className="max-w-sm md:max-w-none mx-auto w-full">
              <DeviceFrame
                kind="mobile"
                src={detail.mobileScreenshot || detail.screenshot}
                alt={`${detail.title} – mobile`}
                label="Mobile"
              />
            </div>
          </div>
        </section>

        <section className="p-8 rounded-xl bg-surface-2 border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-dm font-semibold text-text-primary text-base">
              See this feature with a demo login.
            </h2>
            <p className="text-text-secondary text-base mt-2 leading-relaxed">
              We&apos;ll share a demo login ID so you and your finance or sales head can click through this feature calmly before deciding.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/demo">
              <Button variant="primary" size="md">
                Get Demo Login
              </Button>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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

