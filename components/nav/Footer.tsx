import Link from "next/link";
import { Container } from "@/components/layout";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
  social: [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-soft-gray/20 bg-onyx text-paper py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-display mb-4 block">
              GT Media
            </Link>
            <p className="text-sm text-soft-gray">
              Creative intelligence studio crafting premium digital experiences.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-soft-gray mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-gray hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-soft-gray mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-gray hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-soft-gray mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-soft-gray hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-soft-gray/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-soft-gray">
            © {new Date().getFullYear()} GT Media. All rights reserved.
          </p>
          <p className="text-xs text-soft-gray">
            For inquiries:{" "}
            <a
              href="mailto:hello@gt-media.com"
              className="text-accent-gold hover:underline"
            >
              hello@gt-media.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
