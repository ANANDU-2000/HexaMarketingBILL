/**
 * Translation / locale loader for en and ar.
 * Use with next-intl or simple lookup by locale.
 */

export type Locale = "en" | "ar";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "ar"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "عربي",
};

/**
 * Path for a locale: EN uses "/", AR uses "/ar".
 */
export function pathForLocale(locale: Locale): string {
  return locale === "ar" ? "/ar" : "/";
}

/**
 * Get locale from pathname: "/ar" or "/ar/..." => "ar", else "en".
 */
export function localeFromPathname(pathname: string): Locale {
  return pathname.startsWith("/ar") ? "ar" : "en";
}

/**
 * Alternate path for hreflang: given current path and locale, return the path for the other locale.
 * Example: for path "/demo" and locale "en", return "/ar" for Arabic home (or "/ar/demo" if we add localized paths).
 */
export function alternatePath(currentPath: string, currentLocale: Locale, targetLocale: Locale): string {
  if (currentLocale === targetLocale) return currentPath;
  if (targetLocale === "ar") {
    // For now AR has single home at /ar; later we could have /ar/demo etc.
    const enPath = currentPath.replace(/^\/ar\/?/, "/") || "/";
    return enPath === "/" ? "/ar" : `/ar`;
  }
  // From ar to en: /ar -> /
  return currentPath === "/ar" ? "/" : currentPath.replace(/^\/ar/, "") || "/";
}
