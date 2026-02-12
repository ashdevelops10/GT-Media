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
      <div className="border-t border-white/[0.06] bg-black py-3.5 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {Array(10).fill("LET'S CREATE SOMETHING LEGENDARY").map((text, i) => (
            <span key={i} className="text-[11px] font-display tracking-[0.3em] text-white/20">
              {text} &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <Container className="py-14 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12 relative z-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="text-3xl md:text-4xl font-display uppercase mb-4 block text-white hover:text-orange transition-colors duration-200">
              GT Media
            </Link>
            <p className="font-script text-orange/80 text-lg mb-4">
              Performance-First Creative Partner
            </p>
            <p className="text-sm text-white/35 max-w-[30ch] mb-6 leading-relaxed">
              Uniting brand strategy, high-impact content, and precision media across music, celebrity, brand, and political ecosystems.
            </p>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 border border-orange/50 text-orange rounded-full text-xs font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10">Start Project</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Company */}
            <div>
              <h3 className="font-display text-sm uppercase text-white/50 mb-5 tracking-widest">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-orange transition-colors duration-200 uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-sm uppercase text-white/50 mb-5 tracking-widest">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-orange transition-colors duration-200 uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-display text-sm uppercase text-white/50 mb-5 tracking-widest">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-orange transition-colors duration-200 uppercase tracking-wide"
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
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3 relative z-10">
          <p className="text-[10px] text-white/25 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} GT Media. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[10px] text-white/25 hover:text-orange uppercase tracking-[0.2em] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] text-white/25 hover:text-orange uppercase tracking-[0.2em] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
