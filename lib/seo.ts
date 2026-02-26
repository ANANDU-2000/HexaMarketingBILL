import type { Metadata } from "next";

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogImage?: string;
  locale?: "en" | "ar";
  pageType?: "home" | "location" | "blog" | "product";
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hexamarketing.com";

export function generateMetadata(data: PageSEOData): Metadata {
  const title = data.title.length > 60 ? data.title.slice(0, 57) + "..." : data.title;
  const description =
    data.description.length > 155 ? data.description.slice(0, 152) + "..." : data.description;
  const canonical = `${SITE_URL}${data.canonicalPath}`;
  const ogImage = data.ogImage?.startsWith("http") ? data.ogImage : `${SITE_URL}${data.ogImage || "/og/home.png"}`;
  const locale = data.locale === "ar" ? "ar_AE" : "en_AE";

  return {
    title,
    description,
    keywords: data.keywords?.join(", "),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "HexaBill",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical,
      languages: {
        "en-AE": `${SITE_URL}${data.locale === "ar" ? "/" : data.canonicalPath}`,
        "ar-AE": `${SITE_URL}${data.locale === "ar" ? data.canonicalPath : "/ar"}`,
      },
    },
    robots: "index, follow",
  };
}
