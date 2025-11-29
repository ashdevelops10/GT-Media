import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-nav border-b border-graphite-700/30 bg-onyx/70 backdrop-blur-md">
      <nav className="luxury-container flex items-center justify-between py-4">
        <Link 
          href="/" 
          className="font-medium tracking-tight text-paper transition-opacity duration-xs hover:opacity-70"
        >
          GT Media
        </Link>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-micro text-graphite-400 transition-colors duration-xs hover:text-paper"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
