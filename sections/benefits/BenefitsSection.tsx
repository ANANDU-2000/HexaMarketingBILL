"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { benefitsData } from "@/content/en/benefits.data";
import { track } from "@/lib/analytics";

export function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) track.benefitsSectionViewed();
  }, [inView]);

  return (
    <section id="benefits" ref={ref} className="py-20 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Key Benefits
          </h2>
          <p className="text-text-secondary text-base mt-4 max-w-xl mx-auto leading-relaxed">
            What you get when you move from Excel to HexaBill.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6 shadow-card"
            >
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-dm font-semibold text-text-primary text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
