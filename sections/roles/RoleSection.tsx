"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { rolesData } from "@/content/en/roles.data";
import { RoleTab } from "./RoleTab";

export function RoleSection() {
  const [active, setActive] = useState(0);
  const role = rolesData[active];

  return (
    <section id="roles" className="py-20 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoleTab
          tabs={rolesData.map((r) => ({ id: r.id, label: r.label }))}
          activeId={role.id}
          onChange={(id) => setActive(rolesData.findIndex((r) => r.id === id))}
          ariaLabel="Role"
        />
        <div className="mb-12" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-text-secondary text-base mb-8 leading-relaxed">{role.statement}</p>
            <div className="max-w-3xl mx-auto mb-10 rounded-xl overflow-hidden border border-border shadow-cyan">
              <div className="aspect-video bg-surface relative">
                <Image
                  src={role.screenshot}
                  alt={`${role.label} view`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {role.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-text-primary">
                  <span className="text-primary">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-dm font-semibold text-text-primary text-base mb-6">
              {role.close}
            </p>
            <Link
              href={role.ctaHref}
              className="text-primary font-medium hover:underline"
            >
              {role.cta}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
