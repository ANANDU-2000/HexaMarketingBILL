/**
 * Hreflang helpers for en-AE and ar-AE.
 * Use in generateMetadata via alternates.languages (see lib/seo.ts).
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hexamarketing.com";

export type HreflangLocale = "en-AE" | "ar-AE";

/**
 * Returns alternate language URLs for a given path.
 * EN homepage = "/", AR homepage = "/ar". Other paths: EN = /path, AR = /ar (single AR page for now).
 */
export function getHreflangAlternates(canonicalPath: string): Record<HreflangLocale, string> {
  const enPath = canonicalPath === "/ar" ? "/" : canonicalPath;
  const arPath = canonicalPath === "/" || canonicalPath === "" ? "/ar" : "/ar";
  return {
    "en-AE": `${SITE_URL}${enPath}`,
    "ar-AE": `${SITE_URL}${arPath}`,
  };
}

/**
 * For use in metadata.alternates.languages (Next.js App Router).
 * Example: alternates: { languages: getHreflangAlternates("/", "en") }
 */
export { getHreflangAlternates as getAlternateLanguages };
