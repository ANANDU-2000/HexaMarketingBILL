"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import type { FeatureItem } from "@/content/en/features.data";

interface FeatureBlockProps {
  feature: FeatureItem;
  reverse?: boolean;
}

export function FeatureBlock({ feature, reverse = false }: FeatureBlockProps) {
  return (
    <div
      id={`feature-${feature.id}`}
      className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center py-20 ${reverse ? "md:grid-flow-dense" : ""
        }`}
    >
      <div className={reverse ? "md:col-start-2" : ""}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-border/40">
          <div className="relative w-full rounded-xl flex flex-col overflow-hidden bg-surface shadow-md">
            {/* Browser-like header */}
            <div className="h-8 bg-surface-2 border-b border-border/50 flex items-center px-4 gap-2 shrink-0 w-full">
              <div className="w-2.5 h-2.5 rounded-full bg-red/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gold/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green/80"></div>
            </div>
            {/* Image content */}
            <div className="relative w-full bg-surface overflow-hidden">
              <Image
                src={feature.screenshot}
                alt={feature.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <div className={reverse ? "md:col-start-1 md:row-start-1" : ""}>
        <span className="text-gold text-sm font-dm font-medium">
          {feature.number}
        </span>
        <h3 className="font-dm font-semibold text-[clamp(1.25rem,2.5vw,1.5rem)] text-text-primary mt-2 leading-snug">
          {feature.title}
        </h3>
        <p className="text-text-secondary text-base mt-2 leading-relaxed">{feature.context}</p>
        <ul className="mt-6 space-y-3">
          {feature.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-text-primary text-base leading-relaxed">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/features/${feature.slug}`}
          className="inline-block mt-6 text-primary font-medium hover:underline"
        >
          See full feature →
        </Link>
      </div>
    </div>
  );
}
