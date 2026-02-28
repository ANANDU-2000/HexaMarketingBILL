"use client";

import { Shield, Lock, Check, Cloud, MapPin } from "lucide-react";
import { trustBadges } from "@/content/en/proof.data";

const iconMap = {
  shield: Shield,
  lock: Lock,
  check: Check,
  cloud: Cloud,
  "map-pin": MapPin,
};

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-16">
      {trustBadges.map((badge) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap];
        return (
          <div
            key={badge.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border"
          >
            {Icon && <Icon className="w-[18px] h-[18px] text-primary" />}
            <span className="text-text-secondary text-base">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
