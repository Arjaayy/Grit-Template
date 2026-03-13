export default function Hero() {
  return (
    <section className="clip-hero bg-[#131829] pt-40 pb-36 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#DA1D3A]/10 blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Eyebrow tag */}
        <span className="block w-8 h-[2px] bg-[#DA1D3A]" />
        <p className="fade-up fade-up-1 inline-block text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase mb-6  border-[#DA1D3A]/30 px-3 py-1">
          Sports & School Registration Experts
        </p>

        {/* Headline */}
        <h1 className="fade-up fade-up-2 font-display text-[clamp(64px,12vw,120px)] font-black leading-[0.92] tracking-tight uppercase mb-8">
          Play.<br />
          <span className="text-[#DA1D3A]">Compete.</span><br />
          Win.
        </h1>

        {/* Subheadline */}
        <p className="fade-up fade-up-3 text-white/55 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          We build high-performance websites and registration systems for sports teams, schools, and camps across the USA — so you can focus on the game.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
          <a
            href="#signup"
            className="bg-[#DA1D3A] text-white font-medium text-base px-8 py-4 rounded-sm hover:bg-red-700 transition-colors text-center"
          >
            Join Now →
          </a>
          <a
            href="#about"
            className="border border-white/20 text-white/65 font-medium text-base px-8 py-4 rounded-sm hover:border-white/50 hover:text-white transition-colors text-center"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
