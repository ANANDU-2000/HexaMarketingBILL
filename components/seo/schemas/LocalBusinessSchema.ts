export function getLocalBusinessSchema(phone?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HexaBill",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    telephone: phone || "+971500000000",
    url: "https://hexamarketing.com",
    areaServed: [
      "UAE",
      "Qatar",
      "Saudi Arabia",
      "Kuwait",
      "Bahrain",
      "Oman",
    ],
  };
}
