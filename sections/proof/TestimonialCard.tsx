"use client";

interface TestimonialCardProps {
  quote: string;
  metric: string;
  companyType: string;
  ownerName: string;
}

export function TestimonialCard({
  quote,
  metric,
  companyType,
  ownerName,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface rounded-xl border border-border shadow-card p-6 h-full flex flex-col">
      <span className="text-primary text-4xl font-serif leading-none">"</span>
      <p className="text-text-primary text-base leading-relaxed mt-2 flex-1">
        {quote}
      </p>
      <p className="text-gold font-dm font-semibold text-base mt-4">{metric}</p>
      <hr className="border-border my-4" />
      <p className="text-text-muted text-sm">{companyType}</p>
      <p className="text-text-primary font-dm font-medium text-base mt-1">{ownerName}</p>
    </div>
  );
}
