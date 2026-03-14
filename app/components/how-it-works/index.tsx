const steps = [
  {
    n: "01",
    title: "Sign up",
    desc: "Fill out a quick form — takes 2 minutes. Tell us your skill level and preferred sport.",
  },
  {
    n: "02",
    title: "Get placed",
    desc: "We match you to a team that fits your level. You'll get an intro email before the season starts.",
  },
  {
    n: "03",
    title: "Play",
    desc: "Show up on game day. Your jersey is waiting. Season runs 10 weeks with playoffs at the end.",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="bg-[#0e132b] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase mb-4">
          How it works
        </p>
        <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[0.95] mb-20">
          Three steps<br />to game day
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ n, title, desc }) => (
            <div
              key={n}
              className="border border-white/10 rounded-sm p-8 hover:border-[#DA1D3A]/40 transition-colors group"
            >
              <p className="font-display text-5xl font-black text-white/8 group-hover:text-[#DA1D3A]/25 transition-colors mb-5">
                {n}
              </p>
              <h3 className="font-display text-2xl font-bold uppercase mb-3">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
