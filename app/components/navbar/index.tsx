"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e132b]/90 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image src="/logo/logoWhite.png" alt="GritTemplate" width={40} height={40} priority />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
          {["About", "Schedule", "Teams", "Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#signup"
          className="hidden md:inline-block bg-[#DA1D3A] text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-red-700 transition-colors"
        >
          Join now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#131829] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          {["About", "Schedule", "Teams", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href="#signup"
            className="bg-[#DA1D3A] text-white font-medium px-4 py-2 rounded-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Join now
          </a>
        </div>
      )}
    </header>
  );
}
