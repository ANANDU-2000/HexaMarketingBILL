"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { StatsBar } from "./StatsBar";
import { TestimonialCard } from "./TestimonialCard";
import { TrustBadges } from "./TrustBadges";
import { testimonialsData } from "@/content/en/proof.data";

export function ProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="proof" ref={ref} className="py-20 md:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <StatsBar />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-dm font-bold text-xl text-text-primary text-center mt-16 mb-10 leading-snug"
        >
          What Gulf Distributors Say
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>

        <TrustBadges />
      </div>
    </section>
  );
}
