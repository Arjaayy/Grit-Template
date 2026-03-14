"use client";

import { useState } from "react";
import Image from "next/image";

const quickLinks = ["About", "Services", "Tournaments", "Leagues", "Events", "Contact"];
const navLinks = ["Home", "Schedule", "Teams", "Standings", "Playoffs", "Register"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer id="" className="bg-[#080d1e] border-t border-white/5">

      {/* Top red bar */}
      <div className="h-[3px] bg-[#DA1D3A] w-full" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo/logoWhite.png"
              alt="GritTemplate"
              width={120}
              height={36}
              priority
              style={{ objectFit: "contain", height: "36px", width: "auto" }}
              className="mb-4"
            />

            <p className="text-white/45 text-sm leading-relaxed mb-6">
              The city's leading sports & school registration experts.
              Connecting athletes, schools, and leagues since 2018.
            </p>

            {/* Socials */}
            <div className="flex gap-3">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.56 4 20 5.44 20 7.75v8.5C20 18.56 18.56 20 16.25 20h-8.5C5.44 20 4 18.56 4 16.25v-8.5C4 5.44 5.44 4 7.75 4zm4.25 3.5A4.75 4.75 0 1 0 16.75 12 4.756 4.756 0 0 0 12 7.5zm0 2A2.75 2.75 0 1 1 9.25 12 2.753 2.753 0 0 1 12 9.5zm4.88-.88a1.12 1.12 0 1 0 1.12 1.12 1.12 1.12 0 0 0-1.12-1.12z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.49 8.49 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.22 3.87A12.04 12.04 0 0 1 3.1 4.88a4.24 4.24 0 0 0 1.31 5.65 4.21 4.21 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.15 4.25 4.25 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54a12.03 12.03 0 0 0 6.5 1.9c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.35-.02-.53A8.63 8.63 0 0 0 24 4.56a8.48 8.48 0 0 1-2.54.7z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.615 3.184C21.046 3.462 22 4.548 22 6.004v11.992c0 1.456-.954 2.542-2.385 2.82C16.31 21 12 21 12 21s-4.31 0-7.615-.184C2.954 20.538 2 19.452 2 18V6.004c0-1.456.954-2.542 2.385-2.82C7.69 3 12 3 12 3s4.31 0 7.615.184zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#DA1D3A]" />
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/40 text-sm hover:text-[#DA1D3A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#DA1D3A] transition-all duration-200" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#DA1D3A]" />
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/40 text-sm hover:text-[#DA1D3A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#DA1D3A] transition-all duration-200" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#DA1D3A]" />
              Contact Us
            </h4>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="text-white/40 text-sm">
                ✉ hello@grittemplate.com
              </li>
              <li className="text-white/40 text-sm">
                ✆ +1 (234) 567-890
              </li>
              <li className="text-white/40 text-sm">
                123 Sports Ave,<br />
                City, State 00000
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white/60 text-xs uppercase tracking-[0.15em] mb-3">
                Newsletter
              </p>

              {subscribed ? (
                <div className="bg-[#DA1D3A]/10 border border-[#DA1D3A]/20 rounded-sm px-4 py-3">
                  <p className="text-[#DA1D3A] text-xs font-medium">
                    You're subscribed!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-[#DA1D3A]/50"
                  />

                  <button
                    type="submit"
                    className="bg-[#DA1D3A] text-white text-xs px-3 py-2 rounded-sm hover:bg-red-700 transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/20">
          <span>© 2026 GritTemplate. All rights reserved.</span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50">Privacy Policy</a>
            <a href="#" className="hover:text-white/50">Terms of Service</a>
            <a href="#signup" className="text-[#DA1D3A]/50 hover:text-[#DA1D3A]">
              Join the league →
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}