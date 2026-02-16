"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <header
        className={
          `fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ` +
          (scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent")
        }
      >
        <div className={`max-w-[1920px] mx-auto px-5 sm:px-8 lg:px-12 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="GT Media - Home">
              <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                <NextImage
                  src="/logos/gt-logo-transparent.png"
                  alt="GT Media Logo"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`font-display text-white group-hover:text-burgundy transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>GT Media</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-8 xl:gap-10">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative font-accent text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white py-2"
                    >
                      {item.label}
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-burgundy rounded-full transition-all duration-300 group-hover:w-full"
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="group relative px-6 py-2.5 border border-burgundy/60 text-white text-xs font-accent font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors duration-300"
                  >
                    <span className="relative z-10">Start Project</span>
                    <span className="absolute inset-0 bg-burgundy scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile trigger - hamburger icon */}
            <button
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              <span className="block w-5 h-[1.5px] bg-white mb-[5px] transition-transform" />
              <span className="block w-5 h-[1.5px] bg-white mb-[5px] transition-transform" />
              <span className="block w-3.5 h-[1.5px] bg-white transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay - full screen solid background (outside header) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[200]"
            style={{ backgroundColor: "#000000" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] border-l border-white/5 z-[210] flex flex-col"
            style={{ backgroundColor: "#050505" }}
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-6 pb-5 flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <NextImage src="/logos/gt-logo-transparent.png" alt="GT Media" fill className="object-contain" />
                </div>
                <span className="font-display text-lg text-white">GT Media</span>
              </Link>
              <button
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 sm:px-8 py-8 overflow-y-auto" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-2xl font-display uppercase text-white/80 hover:text-burgundy border-b border-white/[0.04] transition-colors duration-200 group"
                    >
                      <span>{item.label}</span>
                      <span className="text-sm text-white/20 group-hover:text-burgundy/60 transition-colors">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-white/[0.04]">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full gap-2 px-8 py-4 bg-burgundy text-white rounded-full font-accent font-bold uppercase tracking-wider text-sm hover:bg-burgundy-dark transition-colors duration-200"
              >
                Start a Project
                <span>→</span>
              </Link>
              <p className="text-center text-[10px] text-white/30 mt-4 uppercase tracking-widest">hello@gt-media.com</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default PremiumNav;
