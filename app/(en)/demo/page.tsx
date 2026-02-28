import { generateMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { DemoSection } from "@/sections/demo";

export const metadata = generateMetadata({
  title: "Get a Demo Login ID | HexaBill",
  description:
    "Get a HexaBill demo login ID, explore the screens for a day, then decide if it fits your Gulf distribution business.",
  keywords: ["HexaBill demo", "billing software demo UAE"],
  canonicalPath: "/demo",
  locale: "en",
  pageType: "product",
});

export default function DemoPage() {
  return (
    <main>
      <DemoSection />
      <Footer />
    </main>
  );
}
