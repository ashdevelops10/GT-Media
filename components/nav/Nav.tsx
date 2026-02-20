"use client";

import Link from"next/link";
import { useState } from"react";

const navItems = [
 { href:"/", label:"Home"},
 { href:"/work", label:"Work"},
 { href:"/services", label:"Services"},
 { href:"/contact", label:"Contact"}
];

export default function Nav() {
 const [isOpen, setIsOpen] = useState(false);

 return (
 <header className="fixed inset-x-0 top-0 z-nav border-b border-white/10 bg-black/70 backdrop-blur-md">
 <nav className="luxury-container flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
 <Link
 href="/" className="font-medium tracking-tight text-white transition-opacity duration-xs hover:opacity-70 text-lg sm:text-xl" >
 GT Media
 </Link>

 {/* Desktop Nav */}
 <ul className="hidden md:flex gap-6 lg:gap-8">
 {navItems.map((item) => (
 <li key={item.href}>
 <Link
 href={item.href}
 className="text-sm text-white/50 transition-colors duration-xs hover:text-white" >
 {item.label}
 </Link>
 </li>
 ))}
 </ul>

 {/* Mobile Menu Button */}
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="md:hidden p-2 text-white focus:outline-none" aria-label="Toggle menu" >
 <svg className="w-6 h-6"viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg">
 {isOpen ? (
 <path d="M6 6L18 18M6 18L18 6"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/>
 ) : (
 <path d="M4 6H20M4 12H20M4 18H20"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/>
 )}
 </svg>
 </button>
 </nav>

 {/* Mobile Menu */}
 <div
 className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
 }`}
 >
 <ul className="flex flex-col py-4 px-4">
 {navItems.map((item) => (
 <li key={item.href}>
 <Link
 href={item.href}
 onClick={() => setIsOpen(false)}
 className="block py-3 text-base text-white/50 transition-colors duration-xs hover:text-white border-b border-white/5 last:border-0" >
 {item.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 </header>
 );
}
