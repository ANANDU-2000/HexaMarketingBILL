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
      className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center py-20 ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      <div className={reverse ? "md:col-start-2" : ""}>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-card">
          <div className="aspect-[3/2] max-h-[420px] bg-surface relative">
            <Image
              src={feature.screenshot}
              alt={feature.title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
              unoptimized
            />
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
