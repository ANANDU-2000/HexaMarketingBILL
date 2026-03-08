"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { audienceData } from "@/content/en/audience.data";
import { track } from "@/lib/analytics";

export function AudienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) track.audienceSectionViewed();
  }, [inView]);

  return (
    <section id="who-its-for" ref={ref} className="py-20 md:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Who It&apos;s For
          </h2>
          <p className="text-text-secondary text-base mt-4 max-w-xl mx-auto leading-relaxed">
            HexaBill is built for B2B distributors and wholesalers in the UAE and Gulf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6 shadow-card flex items-center gap-4"
            >
              <Building2 className="w-8 h-8 text-primary shrink-0" />
              <span className="font-dm font-medium text-text-primary">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
