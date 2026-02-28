import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { AnalyticsInit } from "@/components/AnalyticsInit";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "HexaBill — UAE Billing Software for B2B Distributors",
  description:
    "Auto UAE VAT, credit aging, route sales. Built for Gulf distributors by a small team in Kerala, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased bg-bg text-text-primary min-h-screen overflow-x-hidden">
        <AnalyticsInit />
        <ProgressBar />
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
