"use client";

import {
  AlertTriangle,
  Receipt,
  UserX,
  Package,
  Eye,
  Building2,
  Clock,
  TrendingDown,
  FileSpreadsheet,
} from "lucide-react";
import type { PainCard as PainCardType } from "@/content/en/pain.data";

const iconMap = {
  AlertTriangle,
  Receipt,
  UserX,
  Package,
  Eye,
  Building2,
  Clock,
  TrendingDown,
  FileSpreadsheet,
};

interface PainCardProps {
  card: PainCardType;
  index: number;
}

export function PainCard({ card, index }: PainCardProps) {
  const Icon = iconMap[card.icon as keyof typeof iconMap] ?? AlertTriangle;

  return (
    <div
      className="bg-surface rounded-xl border border-border shadow-card p-6 h-full flex flex-col transition-all duration-200 hover:border-red/50 hover:shadow-card"
    >
      <div className="flex items-start justify-between">
        <Icon
          className="w-7 h-7 shrink-0"
          style={{ color: card.iconColor }}
        />
        <span className="text-text-muted text-xs">{String(card.id).padStart(2, "0")}</span>
      </div>
      <h3 className="font-dm font-semibold text-text-primary text-base mt-4">
        {card.title}
      </h3>
      <p className="text-text-secondary text-base mt-2 leading-relaxed flex-1">
        {card.description}
      </p>
      <div className="mt-4 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium w-fit bg-red/10 text-red border border-red/20">
        {card.stat}
      </div>
    </div>
  );
}
