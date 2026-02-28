"use client";

import { useState } from "react";
import { faqData } from "@/content/en/faq.data";
import { FAQItemComponent } from "./FAQItem";
import { PageSEO } from "@/components/seo/PageSEO";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-bg scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageSEO schemaType="faq" faqData={faqData} />
        <div className="text-center mb-12">
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Questions Gulf Distributors Ask Us
          </h2>
          <p className="text-text-secondary mt-2">Honest answers. No marketing speak.</p>
        </div>

        <div className="space-y-0">
          {faqData.map((item, i) => (
            <FAQItemComponent
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
