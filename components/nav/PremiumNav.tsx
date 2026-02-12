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
          `fixed top-0 left-0 right-0 z-[100] transition-colors duration-sm ` +
          (scrolled ? "bg-black/95 backdrop-blur-md border-b border-orange/10" : "bg-transparent")
        }
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-16 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden">
                <NextImage
                  src="/logos/file_000000001db4720692432eb1b5ba9db6.png"
                  alt="GT Media Logo"
                  fill
                  className="object-contain brightness-100 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display text-lg sm:text-xl text-white group-hover:text-orange transition-colors">GT Media</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-10">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative font-accent text-xs uppercase tracking-[0.18em] text-silver transition-colors duration-sm hover:text-strawberry"
                    >
                      {item.label}
                      <span
                        className="absolute -bottom-2 left-0 h-[1px] w-0 bg-strawberry transition-all duration-sm group-hover:w-full"
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border border-orange text-orange rounded-full font-bold uppercase tracking-wider hover:bg-orange hover:text-black transition-all duration-sm"
                  >
                    Start Project
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile trigger */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden text-white font-accent text-xs uppercase tracking-[0.18em] min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              Menu
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

      {/* Mobile menu panel (outside header) */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 right-0 h-full w-[82%] sm:w-[420px] border-l border-orange/20 z-[210]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 flex items-center justify-between border-b border-dust/10">
              <p className="font-display text-base sm:text-lg text-white">Menu</p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-silver hover:text-strawberry transition-colors duration-sm min-h-[48px] min-w-[48px] flex items-center justify-center text-xl"
              >
                ✕
              </button>
            </div>
            <nav className="px-4 sm:px-6 py-4 sm:py-6">
              <ul className="space-y-3 sm:space-y-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.06 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 sm:py-4 font-sans text-base sm:text-body text-white hover:text-strawberry transition-colors duration-sm min-h-[48px] flex items-center"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-dust/10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-orange text-orange rounded-full font-bold uppercase tracking-wider hover:bg-orange hover:text-black transition-all duration-sm"
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default PremiumNav;
