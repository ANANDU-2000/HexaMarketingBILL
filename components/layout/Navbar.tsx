"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Demo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 min-h-[4rem] gap-4">
        <Link
          href="/"
          className="font-syne font-bold text-xl lg:text-2xl text-text-primary tracking-tight hover:text-primary transition-colors shrink-0"
        >
          HexaBill
        </Link>

        {/* Desktop: visible from md up; hidden on small screens */}
        <div className="hidden md:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/demo">
            <Button variant="primary" size="sm">
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile: hamburger only below md; fully hidden on desktop */}
        <div className="flex md:hidden shrink-0">
          <button
            type="button"
            className="p-2.5 rounded-lg text-text-primary hover:bg-surface-2 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-surface backdrop-blur-lg px-4 py-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-text-secondary hover:text-primary font-medium min-h-[44px] flex items-center"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/demo" onClick={() => setOpen(false)}>
            <Button variant="primary" size="md" fullWidth>
              Book Demo
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
