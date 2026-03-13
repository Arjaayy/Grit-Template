const steps = [
  {
    n: "1",
    title: "Tournaments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholders/tournament.jpg",
  },
  {
    n: "2",
    title: "Leagues",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholders/leagues.jpg",
  },
  {
    n: "3",
    title: "Events",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/placeholders/Events.jpg",
  },
];

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="about" className="bg-[#0e132b] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">
                Services
              </p>
            </div>
            <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[0.95]">
              What we Offer
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {steps.map(({ n, title, desc, image }) => (
            <div
              key={n}
              className="group relative border border-white/10 rounded-sm overflow-hidden hover:border-[#DA1D3A]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#0e132b]/60 group-hover:bg-[#0e132b]/40 transition-all duration-300" />

                {/* Step number over image */}
                <span className="absolute top-4 left-4 font-display text-5xl font-black text-white/20 group-hover:text-[#DA1D3A]/50 transition-colors duration-300 leading-none">
                  {n}
                </span>

                {/* Red corner accent */}
                <div className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#DA1D3A]" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-black uppercase mb-3 group-hover:text-[#DA1D3A] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}