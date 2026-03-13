"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 500, suffix: "+",    label: "Active members",    icon: "" },
  { num: 12,  suffix: "",     label: "Teams this season", icon: "" },
  { num: 8,   suffix: " yrs", label: "Running strong",    icon: "" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ num, suffix, label, icon, index, active }: {
  num: number; suffix: string; label: string; icon: string; index: number; active: boolean;
}) {
  const count = useCountUp(num, 2000, active);
  return (
    <div className={`flex flex-col items-center text-center py-10 px-6 border-b sm:border-b-0 border-white/10 last:border-b-0 ${index < 2 ? "sm:border-r border-white/15" : ""}`}>
      <span className="text-3xl mb-4">{icon}</span>
      <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-black leading-none text-white">
        {active ? count : 0}{suffix}
      </p>
      <div className="flex items-center gap-2 my-4">
        <div className="w-4 h-[1px] bg-[#DA1D3A]" />
        <div className="w-2 h-2 rounded-full bg-[#DA1D3A]" />
        <div className="w-4 h-[1px] bg-[#DA1D3A]" />
      </div>
      <p className="text-white/75 text-xs font-medium uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background/stadium.jpg)" }} />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e132b]/80" />
      {/* Red borders */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#DA1D3A]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#DA1D3A]" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-[1px] w-12 bg-[#DA1D3A]" />
          <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.25em] uppercase">By the numbers</p>
          <div className="h-[1px] w-12 bg-[#DA1D3A]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} active={active} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-[1px] w-8 bg-white/20" />
          <p className="text-white/30 text-xs tracking-widest uppercase">GritTemplate · Season 2026</p>
          <div className="h-[1px] w-8 bg-white/20" />
        </div>
      </div>
    </section>
  );
}