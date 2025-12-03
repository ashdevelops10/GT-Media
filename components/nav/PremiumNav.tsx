"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
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
    <header
      className={
        `fixed top-0 left-0 right-0 z-[100] transition-colors duration-sm ` +
        (scrolled ? "bg-ink/90 backdrop-blur-md border-b border-stone/10" : "bg-transparent")
      }
    >
      <div className="max-w-content mx-auto px-4 md:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-xl text-paper">
            GT Media
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative font-accent text-xs uppercase tracking-[0.18em] text-stone hover:text-accent-red transition-colors duration-sm"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-accent-red transition-all duration-sm group-hover:w-full" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-accent-red text-accent-red rounded-pill hover:bg-accent-red hover:text-ink transition-all duration-sm"
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
            className="md:hidden text-paper"
          >
            <span className="inline-block w-6 h-[2px] bg-paper" />
            <span className="inline-block w-6 h-[2px] bg-paper ml-2" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-ink/70"
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
            transition={{ duration: 0.32, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 right-0 h-full w-[82%] sm:w-[420px] bg-charcoal border-l border-stone/10 z-[110]"
          >
            <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-stone/10">
              <p className="font-display text-lg text-paper">Menu</p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-stone hover:text-accent-red transition-colors duration-sm"
              >
                ✕
              </button>
            </div>
            <nav className="px-6 py-6">
              <ul className="space-y-4">
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
                      className="block py-3 font-sans text-body text-paper hover:text-accent-red transition-colors duration-sm"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-stone/10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block px-8 py-4 border border-accent-red text-accent-red rounded-pill hover:bg-accent-red hover:text-ink transition-all duration-sm"
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

export default PremiumNav;
