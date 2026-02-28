"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  LayoutDashboard,
  MapPin,
  Package,
  Users,
} from "lucide-react";
import { solutionPillars } from "@/content/en/solution.data";

const iconMap = {
  ShieldCheck,
  FileText,
  LayoutDashboard,
  MapPin,
  Package,
  Users,
};

export function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="solution" ref={ref} className="section-solution py-20 md:py-32 bg-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-text-secondary text-base font-dm font-medium mb-2">
            HexaBill Gives You
          </p>
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Complete Distribution Control
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary text-base mt-6 max-w-[500px] mx-auto leading-relaxed">
            One platform. Every invoice, route, credit, and dirham — tracked and
            controlled in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={pillar.anchor}
                  className="block p-6 rounded-xl border border-border bg-surface shadow-card hover:bg-primary/5 hover:border-primary transition-all duration-200"
                >
                  <div className="flex items-start gap-3 mb-3">
                    {Icon && (
                      <Icon className="w-8 h-8 text-primary shrink-0" />
                    )}
                    <h3 className="font-dm font-semibold text-text-primary text-lg">
                      {pillar.title}
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-text-secondary text-base leading-relaxed mb-3">
                    {pillar.benefit.split(" • ").map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <span className="text-primary text-sm font-medium">
                    Open section →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
