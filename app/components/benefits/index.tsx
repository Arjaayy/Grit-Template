"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  { icon: "🏆", title: "Weekly games",   desc: "Matches every weekend throughout the season" },
  { icon: "📊", title: "Live standings", desc: "Real-time league table and stats tracker" },
  { icon: "👕", title: "Team jersey",    desc: "Custom kit included in your registration fee" },
  { icon: "🍺", title: "Social events",  desc: "Post-game meetups and end-of-season party" },
  { icon: "🎯", title: "Skill matching", desc: "Placed with players at your exact level" },
  { icon: "📅", title: "Full schedule",  desc: "Season calendar sent before day one" },
  { icon: "🏅", title: "Playoffs",       desc: "Top teams compete for the season trophy" },
  { icon: "💬", title: "Team chat",      desc: "Group channel to coordinate with teammates" },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#131829] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">
                What's included
              </p>
            </div>
            <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[0.95]">
              Everything<br />you need
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed sm:text-right">
            Every member gets access to the full suite — no hidden extras.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative bg-[#0e132b] border border-white/5 rounded-sm p-6 overflow-hidden hover:border-[#DA1D3A]/40 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.3s`,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-all duration-300 pointer-events-none" />

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-sm bg-white/5 group-hover:bg-[#DA1D3A]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-lg">{icon}</span>
              </div>

              {/* Title */}
              <h4 className="font-display text-base font-bold uppercase text-white mb-2 group-hover:text-[#DA1D3A] transition-colors duration-300">
                {title}
              </h4>

              {/* Desc */}
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>

              {/* Bottom number watermark */}
              <span className="absolute bottom-3 right-4 font-display text-5xl font-black text-white/[0.03] group-hover:text-[#DA1D3A]/10 transition-colors duration-300 leading-none select-none">
            
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}