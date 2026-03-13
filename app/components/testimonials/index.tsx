"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    initials: "JK",
    name: "Jamie K.",
    since: "Member since 2022",
    quote: "Best decision I made. I moved to the city knowing nobody — now my whole social life revolves around this league.",
    avatarClass: "bg-[#DA1D3A]/20 text-[#DA1D3A]",
  },
  {
    initials: "RL",
    name: "Rania L.",
    since: "Member since 2023",
    quote: "Super welcoming, even for a total beginner. The skill matching is spot on — I never felt out of my depth.",
    avatarClass: "bg-white/10 text-white/60",
  },
  {
    initials: "MS",
    name: "Marco S.",
    since: "Member since 2021",
    quote: "We won the championship last season. The playoffs atmosphere is unreal. Already signed up for the next one.",
    avatarClass: "bg-[#DA1D3A]/20 text-[#DA1D3A]",
  },
];

export default function Testimonials() {
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
    <section className="bg-[#0e132b] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">
                Members say
              </p>
            </div>
            <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[0.95]">
              Real people.<br />Real games.
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed sm:text-right">
            Don't take our word for it — hear it from the players.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ initials, name, since, quote, avatarClass }, i) => (
            <div
              key={name}
              className="group relative bg-[#131829] border border-white/5 rounded-sm p-8 flex flex-col gap-6 overflow-hidden hover:border-[#DA1D3A]/40 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms, border-color 0.3s`,
              }}
            >
              {/* Top accent sweep */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-all duration-300 pointer-events-none" />

              {/* Quote mark watermark */}
              <span className="absolute top-4 right-5 font-display text-8xl font-black text-white/[0.04] group-hover:text-[#DA1D3A]/10 transition-colors duration-300 leading-none select-none">
                "
              </span>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed italic flex-1 relative">
                "{quote}"
              </p>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-[1px] bg-[#DA1D3A]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A]/40" />
                <div className="w-4 h-[1px] bg-[#DA1D3A]/40" />
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-3 relative">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center text-xs font-bold flex-shrink-0 ${avatarClass}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-[#DA1D3A] transition-colors duration-300">
                    {name}
                  </p>
                  <p className="text-white/35 text-xs">{since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}