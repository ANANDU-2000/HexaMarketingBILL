"use client";

/**
 * Calendly embed or link for 30-min demo slots.
 * Uses NEXT_PUBLIC_CALENDLY_URL or inline embed if provided.
 */

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/hexabill/demo";

export function CalendlyEmbed() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-surface">
      <iframe
        title="Book a HexaBill demo"
        src={`${CALENDLY_URL.replace(/\/$/, "")}?embed_domain=hexamarketing.com&embed_type=Inline`}
        width="100%"
        height="700"
        className="min-h-[min(500px,80vh)] sm:min-h-[600px] md:min-h-[700px] border-0 w-full"
      />
    </div>
  );
}

/**
 * Link-only variant when embed is not used (e.g. mobile or to reduce weight).
 */
export function CalendlyLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Open calendar
    </a>
  );
}
