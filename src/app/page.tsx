"use client";

import Hero from "@/components/Hero";
import ValueStatement from "@/components/ValueStatement";
import MarketGap from "@/components/MarketGap";
import HoldCoStructure from "@/components/HoldCoStructure";
import Financials from "@/components/Financials";
import Footer from "@/components/Footer";
import SectionIndicator from "@/components/SectionIndicator";
import { motion, useScroll, useTransform } from "framer-motion";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Minerva Holdings",
  description: "AI-native managed services for law firms. Crisis response, data protection, and IP portfolio management.",
  url: "https://minervaholdco.com",
  logo: "https://minervaholdco.com/Minerva_Holdings_Logo.png",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@minervaholdings.net",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: [
    "Cyber Incident Response",
    "Digital Forensics",
    "DPO-as-a-Service",
    "Trademark Docketing",
    "IP Portfolio Management",
    "Legal Managed Services",
  ],
};

function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.9)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, WebkitBackdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/0 transition-colors"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="no-underline">
          <img
            src="/Minerva_Holdings_Logo.png"
            alt="Minerva"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-baseline gap-8">
          <a href="#platform" className="relative text-sm text-slate-300 no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Services</a>
          <a href="#why-us" className="relative text-sm text-slate-300 no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Why Us</a>
          <a href="#contact" className="relative text-sm text-minerva-gold no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

function SectionDivider({ variant = "default" }: { variant?: "default" | "gold" | "cyan" }) {
  const gradientClass =
    variant === "gold"
      ? "via-minerva-gold/30"
      : variant === "cyan"
      ? "via-minerva-cyan/30"
      : "via-white/10";

  return (
    <div className="relative h-24 w-full bg-minerva-void">
      <div className={`absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent ${gradientClass} to-transparent`} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <SectionIndicator />
      <main className="flex min-h-screen flex-col bg-minerva-void">
        <section id="hero">
          <Hero />
        </section>
        <section id="value">
          <ValueStatement />
        </section>
        <section id="market-gap">
          <MarketGap />
        </section>
        <SectionDivider variant="cyan" />
        <section id="platform">
          <HoldCoStructure />
        </section>
        <SectionDivider variant="gold" />
        <section id="why-us">
          <Financials />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}
