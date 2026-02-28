"use client";

import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { statsData } from "@/content/en/proof.data";

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 md:p-12 rounded-xl bg-surface border border-border">
      {statsData.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="font-dm font-bold text-2xl text-primary">
            <CounterAnimation
              target={stat.target}
              prefix={stat.prefix ?? ""}
              suffix={stat.suffix ?? ""}
            />
          </div>
          <p className="text-text-secondary text-base mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
