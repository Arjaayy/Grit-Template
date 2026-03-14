"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams",    href: "/teams" },
  { label: "Merch",    href: "/merch" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e132b]/90 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/">
          <Image
            src="/logo/logoWhite.png"
            alt="GritTemplate"
            width={120}
            height={36}
            priority
            style={{ objectFit: "contain", height: "36px", width: "auto" }}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium tracking-widest uppercase">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-white transition-colors">{label}</a>
            </li>
          ))}
        </ul>

        <a href="/contact" className="hidden md:inline-block bg-[#DA1D3A] text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-red-700 transition-colors tracking-wider uppercase">
          Register
        </a>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#131829] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="uppercase tracking-widest hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/contact" className="bg-[#DA1D3A] text-white font-medium px-4 py-2 rounded-sm text-center uppercase tracking-wider" onClick={() => setMenuOpen(false)}>
            Register
          </a>
        </div>
      )}
    </header>
  );
}
