"use client";

import { featuresData } from "@/content/en/features.data";
import { FeatureBlock } from "./FeatureBlock";

export function FeatureSection() {
  return (
    <section id="features" className="scroll-mt-24">
      {featuresData.map((feature, index) => (
        <div
          key={feature.id}
          className={index % 2 === 0 ? "bg-bg" : "bg-bg-alt"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureBlock feature={feature} reverse={index % 2 === 1} />
          </div>
        </div>
      ))}
    </section>
  );
}
