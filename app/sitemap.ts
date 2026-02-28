import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog/posts";
import { featureDetails } from "@/content/en/features-detail.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hexamarketing.com";
  const now = new Date();

  const locationPaths = [
    "billing-software-dubai",
    "billing-software-sharjah",
    "billing-software-abu-dhabi",
    "billing-software-qatar",
    "billing-software-saudi-arabia",
    "vat-invoice-software-uae",
    "route-sales-software-gulf",
    "credit-management-software-uae",
    "b2b-distribution-software",
    "inventory-software-dubai",
  ];

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/ar`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/demo`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    ...locationPaths.map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...Object.keys(featureDetails).map((slug) => ({
      url: `${baseUrl}/features/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
