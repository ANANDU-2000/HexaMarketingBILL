"use client";

import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { demoData } from "@/content/en/demo.data";
import { DemoForm } from "./DemoForm";

export function DemoSection() {
  const whatsappUrl = buildWhatsAppUrl(
    demoData.options.find((o) => o.type === "whatsapp")?.whatsappMessage ?? "",
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365"
  );

  return (
    <section
      id="demo"
      className="py-24 md:py-36 bg-bg-tint"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-text-primary leading-snug">
          {demoData.headline.line1}
        </h2>
        <h2 className="font-dm font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-primary mt-2 leading-snug">
          {demoData.headline.line2}
        </h2>
        <p className="text-text-secondary text-base mt-6 max-w-[600px] mx-auto leading-relaxed">
          {demoData.subheadline}
        </p>

        <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-10 mt-12 text-left items-start">
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <h3 className="font-dm font-semibold text-text-primary text-lg mb-4">
              Share a few details, then WhatsApp opens.
            </h3>
            <DemoForm />
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-8 shadow-card">
            <h3 className="font-dm font-semibold text-text-primary text-lg mb-3">
              Or just tap WhatsApp now
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              If you don&apos;t like forms, tap below and tell us your name, company,
              and how many routes or branches you run. We&apos;ll reply within 2 hours
              with a demo login ID.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.demoWhatsappClicked()}
            >
              <Button variant="whatsapp" size="lg" fullWidth>
                WhatsApp the Founder
              </Button>
            </a>
            <p className="text-text-muted text-sm mt-3">
              Average response during UAE business hours: under 2 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-border flex items-center justify-center text-primary font-dm font-bold text-lg">
            {demoData.team.initials}
          </div>
          <div className="text-left">
            <p className="font-dm font-semibold text-text-primary text-base">
              {demoData.team.names}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">{demoData.team.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
