"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { buildWhatsAppUrl, WHATSAPP_MESSAGE_EN } from "@/lib/whatsapp";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365";

export function DemoForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const company = String(formData.get("company") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");

    const lines: string[] = [
      WHATSAPP_MESSAGE_EN,
      "",
      "Demo login request:",
    ];
    if (name) lines.push(`Name: ${name}`);
    if (company) lines.push(`Company: ${company}`);
    if (email) lines.push(`Email: ${email}`);
    if (phone) lines.push(`WhatsApp: ${phone}`);

    const message = lines.join("\n");
    const whatsappUrl = buildWhatsAppUrl(message, WHATSAPP_NUMBER);

    track.demoWhatsappClicked();
    if (typeof window !== "undefined") {
      window.location.href = whatsappUrl;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label
          htmlFor="demo-name"
          className="block text-sm font-medium text-text-primary mb-1"
        >
          Your name
        </label>
        <input
          id="demo-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary"
          placeholder="Ahmed Al Maktoum"
        />
      </div>
      <div>
        <label
          htmlFor="demo-company"
          className="block text-sm font-medium text-text-primary mb-1"
        >
          Company name
        </label>
        <input
          id="demo-company"
          name="company"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary"
          placeholder="Gulf Distribution LLC"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="demo-email"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            Email (optional)
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary"
            placeholder="ahmed@company.ae"
          />
        </div>
        <div>
          <label
            htmlFor="demo-phone"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            WhatsApp number (optional)
          </label>
          <input
            id="demo-phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary"
            placeholder="+91 75919 99365"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 text-lg rounded-full bg-primary text-white hover:bg-primary-dark disabled:opacity-70"
      >
        {submitting ? "Opening WhatsApp…" : "Send details on WhatsApp"}
      </button>
      <p className="text-text-muted text-xs mt-1">
        When you tap this button, WhatsApp opens with your details prefilled. You can edit the message before sending.
      </p>
    </form>
  );
}
