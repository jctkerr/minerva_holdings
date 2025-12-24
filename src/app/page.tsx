"use client";

import Hero from "@/components/Hero";
import ValueStatement from "@/components/ValueStatement";
import MarketGap from "@/components/MarketGap";
import HoldCoStructure from "@/components/HoldCoStructure";
import Financials from "@/components/Financials";
import Footer from "@/components/Footer";
import SectionIndicator from "@/components/SectionIndicator";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Minerva Holdings",
  description: "AI-native legal operations for corporate legal teams, working alongside trusted counsel. Privacy, cyber response, forensics, and IP management at scale.",
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
    "Data Privacy Operations",
    "Trademark Docketing",
    "IP Portfolio Management",
    "Legal Operations",
  ],
};

function Navigation() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-baseline gap-8">
            <a href="#platform" className="relative text-sm text-slate-300 no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#why-us" className="relative text-sm text-slate-300 no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Why Us</a>
            <a href="#contact" className="relative text-sm text-minerva-gold no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className="block h-0.5 w-full bg-current transition-all" />
              <span className="block h-0.5 w-full bg-current transition-all" />
              <span className="block h-0.5 w-full bg-current transition-all" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu - Backdrop and Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-minerva-void border-l border-minerva-gold/20 z-[70] md:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-2 px-6">
                <a
                  href="#platform"
                  onClick={handleLinkClick}
                  className="relative py-4 text-lg text-slate-300 no-underline transition-colors duration-300 hover:text-white border-b border-white/10"
                >
                  Services
                </a>
                <a
                  href="#why-us"
                  onClick={handleLinkClick}
                  className="relative py-4 text-lg text-slate-300 no-underline transition-colors duration-300 hover:text-white border-b border-white/10"
                >
                  Why Us
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="relative py-4 text-lg text-minerva-gold no-underline transition-colors duration-300 hover:text-white border-b border-minerva-gold/20"
                >
                  Contact
                </a>
              </nav>

              {/* Decorative Gold Accent */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-minerva-gold/30 to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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
