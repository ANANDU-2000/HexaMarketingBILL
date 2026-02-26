export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HexaBill",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "AED",
    },
    description:
      "Route-based billing and credit control for Gulf B2B distributors",
    url: "https://hexamarketing.com",
  };
}
