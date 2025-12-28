import Link from "next/link";
import { Container } from "@/components/layout";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
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
    <footer className="border-t border-dust/20 bg-carbon text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-display mb-4 block">
              GT Media
            </Link>
            <p className="text-sm text-silver">
              Creative intelligence studio crafting premium digital experiences.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-silver mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver hover:text-strawberry transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-silver mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver hover:text-strawberry transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-silver mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-silver hover:text-strawberry transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dust/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} GT Media. All rights reserved.
          </p>
          <p className="text-xs text-silver">
            For inquiries:{" "}
            <a
              href="mailto:hello@gt-media.com"
              className="text-strawberry hover:underline"
            >
              hello@gt-media.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
