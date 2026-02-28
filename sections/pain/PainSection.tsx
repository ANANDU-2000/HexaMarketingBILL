"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { painData } from "@/content/en/pain.data";
import { PainCard } from "./PainCard";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function PainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="pain"
      ref={ref}
      className="section-pain py-20 md:py-32 bg-surface-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Your Business Is Growing.
          </h2>
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-red mt-1 leading-snug">
            But Your Control Is Slipping.
          </h2>
          <p className="text-text-secondary text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Every one of these is happening to distributors in the Gulf right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <PainCard card={card} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-dm font-semibold text-lg text-text-primary mb-6">
            Sound familiar? You don&apos;t have to keep working like this.
          </p>
          <a href="#solution" onClick={() => track.sectionViewed("pain")}>
            <Button variant="primary" size="lg">
              See How HexaBill Fixes This
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
