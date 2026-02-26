"use client";

import {
  getSoftwareApplicationSchema,
} from "./schemas/SoftwareSchema";
import { getFAQSchema, type FAQItem } from "./schemas/FAQSchema";
import { getLocalBusinessSchema } from "./schemas/LocalBusinessSchema";

type SchemaType = "software" | "faq" | "business" | "all";

interface PageSEOProps {
  schemaType: SchemaType;
  faqData?: FAQItem[];
}

export function PageSEO({ schemaType, faqData = [] }: PageSEOProps) {
  const schemas: object[] = [];

  if (schemaType === "software" || schemaType === "all") {
    schemas.push(getSoftwareApplicationSchema());
  }
  if (schemaType === "business" || schemaType === "all") {
    schemas.push(getLocalBusinessSchema());
  }
  if ((schemaType === "faq" || schemaType === "all") && faqData.length > 0) {
    schemas.push(getFAQSchema(faqData));
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
