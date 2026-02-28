"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildWhatsAppUrl, WHATSAPP_MESSAGE_EN } from "@/lib/whatsapp";
import type { PlanItem } from "@/content/en/pricing.data";

interface PlanCardProps {
  plan: PlanItem;
}

export function PlanCard({ plan }: PlanCardProps) {
  const isEnterprise = plan.id === "enterprise";
  const whatsappUrl = isEnterprise
    ? buildWhatsAppUrl(
        `${WHATSAPP_MESSAGE_EN}\n\nPlan: Enterprise (unlimited branches, routes, staff).`,
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365",
      )
    : undefined;

  return (
    <div
      className={`rounded-xl border-2 p-8 h-full flex flex-col ${
        plan.highlighted
          ? "border-primary bg-surface shadow-glow scale-105"
          : "border-border bg-surface shadow-card"
      }`}
    >
      {plan.badge && (
        <div className="flex justify-end mb-2">
          <Badge
            label={plan.badge}
            variant="info"
            className="bg-primary text-white font-bold"
          />
        </div>
      )}
      <h3 className="font-dm font-semibold text-lg text-text-primary">
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-dm font-bold text-2xl text-text-primary">
          {plan.price}
        </span>
        <span className="text-text-secondary text-base">{plan.period}</span>
      </div>
      <p className="text-text-secondary text-base mt-2 leading-relaxed">{plan.description}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-text-primary text-base">
            <span className="text-green">✓</span>
            {f}
          </li>
        ))}
      </ul>
      {isEnterprise ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block"
        >
          <Button variant="ghost" size="lg" fullWidth>
            {plan.cta}
          </Button>
        </a>
      ) : (
        <Link href={plan.href} className="mt-8 block">
          <Button variant="primary" size="lg" fullWidth>
            {plan.cta}
          </Button>
        </Link>
      )}
      {!isEnterprise && plan.id === "pro" && (
        <p className="text-text-muted text-sm mt-3 text-center">
          Want to see Pro in action?{" "}
          <Link href="/features/credit-control" className="text-primary hover:underline">
            See how credit control works →
          </Link>
        </p>
      )}
    </div>
  );
}
