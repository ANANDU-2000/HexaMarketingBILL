import Link from "next/link";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/blog", label: "Blog" },
];

const locationLinks = [
  { href: "/billing-software-dubai", label: "Billing Software Dubai" },
  { href: "/billing-software-sharjah", label: "Sharjah" },
  { href: "/billing-software-abu-dhabi", label: "Abu Dhabi" },
  { href: "/billing-software-qatar", label: "Qatar" },
  { href: "/billing-software-saudi-arabia", label: "Saudi Arabia" },
];

const companyLinks = [
  { href: "/#", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/#demo", label: "Contact" },
];

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917591999365";
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

export function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-syne font-bold text-xl text-text-primary hover:text-primary transition-colors">
              HexaBill
            </Link>
            <p className="text-text-secondary text-sm mt-3 max-w-[220px] leading-relaxed">
              Route-first billing for Gulf distributors
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2 rounded"
            >
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="font-dm font-semibold text-text-primary text-sm uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-0">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-dm font-semibold text-text-primary text-sm uppercase tracking-wider mb-4">
              Locations
            </h4>
            <ul className="space-y-0">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-dm font-semibold text-text-primary text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-0">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm text-center sm:text-left">
            Dubai, UAE · Built for Gulf SMEs by Gulf entrepreneurs
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              EN
            </Link>
            <span className="text-text-muted/60">|</span>
            <Link
              href="/ar"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              عربي
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
