"use client";

import Link from "next/link";
import { plansData } from "@/content/en/pricing.data";
import { PlanCard } from "./PlanCard";
import { ComparisonTable } from "./ComparisonTable";
import { Button } from "@/components/ui/Button";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
            Simple plans for Gulf distributors.
          </h2>
          <p className="text-text-secondary text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Basic, Pro, and Enterprise plans priced in AED per month. We currently work with 3 B2B distributors in the Gulf and onboard each one personally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plansData.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <ComparisonTable />

        <div className="mt-16 p-8 rounded-xl bg-surface border border-primary text-center">
          <p className="font-dm font-semibold text-text-primary text-base">
            No free trial claims. We share a guided demo ID so you can explore HexaBill before you decide.
          </p>
          <p className="text-text-secondary text-base mt-2 leading-relaxed">
            We set up a demo account with sample data or a small slice of your products and customers so you can see how it feels for your business.
          </p>
          <Link href="/demo" className="inline-block mt-6">
            <Button variant="primary" size="lg">
              Get Demo Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
