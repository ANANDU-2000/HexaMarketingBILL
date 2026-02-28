"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroData } from "@/content/en/hero.data";
import { Button } from "@/components/ui/Button";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import {
  Shield,
  MapPin,
  LayoutDashboard,
  Building2,
  Lock,
} from "lucide-react";

const trustIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  route: MapPin,
  dashboard: LayoutDashboard,
  branch: Building2,
  lock: Lock,
};

export function Hero() {
  const headline = heroData.headlines[heroData.activeHeadline];
  const whatsappUrl = buildWhatsAppUrl(
    heroData.cta.secondary.message,
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365"
  );

  return (
    <section className="section-hero relative min-h-[100svh] hex-grid overflow-hidden bg-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 600px 400px at 85% 50%, rgba(26, 115, 232, 0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center min-h-[100svh]">
        <div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-dm font-bold text-text-primary leading-snug tracking-normal"
          >
            <span className="block text-[clamp(1.75rem,3.5vw,2.75rem)]">
              {headline.line1}
            </span>
            <span className="block text-[clamp(1.75rem,3.5vw,2.75rem)]">
              {headline.line2}
            </span>
            <span className="block text-[clamp(1.75rem,3.5vw,2.75rem)] text-primary">
              {headline.line3}
            </span>
          </motion.div>
          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-text-secondary text-base sm:text-lg max-w-[540px] leading-relaxed"
          >
            {heroData.subheadline}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* Mobile: WhatsApp first (Gulf mobile-first); desktop: Demo first */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.heroCtaWhatsappClicked()}
              className="w-full sm:w-auto order-1 sm:order-2"
            >
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                {heroData.cta.secondary.label}
              </Button>
            </a>
            <Link
              href={heroData.cta.primary.href}
              onClick={() => track.heroCtaDemoClicked()}
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {heroData.cta.primary.label}
              </Button>
            </Link>
          </motion.div>
          <p className="mt-3 text-text-muted text-sm">
            We reply within 2 hours on UAE business days. Owners and GMs welcome.
          </p>
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-text-secondary text-sm"
          >
            {heroData.trustStrip.map((item, i) => {
              const Icon = trustIcons[item.icon];
              return (
                <span key={item.label} className="flex items-center gap-1.5">
                  {Icon && <Icon className="w-3.5 h-3.5 text-primary/80" />}
                  <span>{item.label}</span>
                  {i < heroData.trustStrip.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-primary/40 ml-0.5 hidden sm:inline" />
                  )}
                </span>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative order-first lg:order-last"
        >
          <div className="absolute -inset-4 rounded-2xl blur-3xl opacity-40 bg-primary/10" />
          <div className="relative transition-transform duration-300 hover:scale-[1.02]">
            <VideoPlaceholder
              src={heroData.screenshot.videoSrc}
              poster={heroData.screenshot.src}
              title={heroData.screenshot.alt}
              aspectRatio="video"
            />
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#pain"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-primary transition-colors hidden md:block"
        aria-label="Scroll to next section"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </section>
  );
}
