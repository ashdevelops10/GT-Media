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
      <div className="border-t border-b border-gray-dark bg-carbon py-3 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {Array(10).fill("LET'S CREATE SOMETHING LEGENDARY • GT MEDIA • ").map((text, i) => (
            <span key={i} className="text-sm md:text-base font-display tracking-widest text-gray hover:text-orange transition-colors duration-300">
              {text}
            </span>
          ))}
        </div>
      </div>

      <Container className="py-16 md:py-24 relative">
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-10">
          <span className="font-display text-[20vw] text-stroke-gray text-transparent uppercase tracking-widest whitespace-nowrap">
            GT MEDIA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="text-4xl md:text-5xl font-display uppercase mb-6 block text-white hover:text-orange transition-colors">
              GT Media
            </Link>
            <p className="font-script text-orange text-xl mb-6">
              Performance-First Creative Partner
            </p>
            <p className="text-sm text-gray max-w-[30ch] mb-8">
              Uniting brand strategy, high-impact content, and precision media across music, celebrity, brand, and political ecosystems.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-orange text-orange rounded-full font-bold uppercase tracking-wider hover:bg-orange hover:text-black transition-all duration-300"
            >
              Start Project
            </Link>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company */}
            <div>
              <h3 className="font-display text-xl uppercase text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-xl uppercase text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-display text-xl uppercase text-white mb-6">Connect</h3>
              <ul className="space-y-4">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray hover:text-orange hover:tracking-wider transition-all duration-300 uppercase tracking-wide"
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
        <div className="pt-8 border-t border-gray-dark/50 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-xs text-gray uppercase tracking-wider">
            © {new Date().getFullYear()} GT Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray hover:text-orange uppercase tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray hover:text-orange uppercase tracking-wider transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
