import Link from "next/link";
import { Container } from "@/components/layout";

const footerLinks = {
  company: [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#strategy", label: "Strategy" },
    { href: "/services#brand", label: "Brand Identity" },
    { href: "/services#web", label: "Web Experience" },
    { href: "/services#content", label: "Visual Content" },
  ],
  social: [
    { href: "https://instagram.com/gtmediastudio", label: "Instagram" },
    { href: "https://linkedin.com/company/gt-media-studio", label: "LinkedIn" },
    { href: "https://twitter.com/gtmediastudio", label: "Twitter" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Marquee Border Top */}
      <div className="border-t border-b border-gray-dark bg-carbon py-2 sm:py-3 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex gap-4 sm:gap-8 items-center">
          {Array(10).fill("LET'S CREATE SOMETHING LEGENDARY • GT MEDIA • ").map((text, i) => (
            <span key={i} className="text-xs sm:text-sm md:text-base font-display tracking-widest text-gray hover:text-orange transition-colors duration-300">
              {text}
            </span>
          ))}
        </div>
      </div>

      <Container className="py-12 sm:py-16 md:py-24 relative">
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-5 sm:opacity-10">
          <span className="font-display text-[15vw] sm:text-[20vw] md:text-[18vw] text-stroke-gray text-transparent uppercase tracking-widest whitespace-nowrap">
            GT MEDIA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 relative z-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="text-3xl sm:text-4xl md:text-5xl font-display uppercase mb-4 sm:mb-6 block text-white hover:text-orange transition-colors">
              GT Media
            </Link>
            <p className="font-script text-orange text-lg sm:text-xl mb-4 sm:mb-6">
              Performance-First Creative Partner
            </p>
            <p className="text-xs sm:text-sm text-gray max-w-[35ch] sm:max-w-[30ch] mb-6 sm:mb-8 leading-relaxed">
              Uniting brand strategy, high-impact content, and precision media across music, celebrity, brand, and political ecosystems.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-orange text-orange rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-orange hover:text-black transition-all duration-300 min-h-[48px]"
            >
              Start Project
            </Link>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Company */}
            <div>
              <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-4 sm:mb-6">Connect</h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-dark/50 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 relative z-10">
          <p className="text-xs text-gray uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} GT Media. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray hover:text-orange uppercase tracking-wider transition-colors min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray hover:text-orange uppercase tracking-wider transition-colors min-h-[44px] flex items-center">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
