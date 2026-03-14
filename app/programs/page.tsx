import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = { title: "Programs — GritTemplate" };

const programs = [
  { n: "01", icon: "⚽", title: "Football League",     level: "All levels",    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { n: "02", icon: "🏀", title: "Basketball League",   level: "Intermediate",  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { n: "03", icon: "🏐", title: "Volleyball League",   level: "Beginner",      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { n: "04", icon: "🎾", title: "Tennis Program",      level: "Advanced",      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { n: "05", icon: "🏫", title: "School Programs",     level: "Youth",         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magna aliqua enim ad minim veniam." },
  { n: "06", icon: "🏅", title: "Elite Tournaments",   level: "Competitive",   desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor." },
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#0e132b] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#131829] pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#DA1D3A]/10 blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">What we offer</p>
          </div>
          <h1 className="font-display text-[clamp(52px,10vw,100px)] font-black leading-[0.92] uppercase mb-6">
            Our<br /><span className="text-[#DA1D3A]">Programs</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-[#0e132b] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {programs.map(({ n, icon, title, level, desc }) => (
              <div key={n} className="group bg-[#131829] border border-white/5 rounded-sm p-8 hover:border-[#DA1D3A]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />
                <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-all duration-300 pointer-events-none" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-white/5 group-hover:bg-[#DA1D3A]/10 flex items-center justify-center transition-colors">
                    <span className="text-xl">{icon}</span>
                  </div>
                  <span className="font-display text-4xl font-black text-white/[0.06] group-hover:text-[#DA1D3A]/20 transition-colors leading-none">{n}</span>
                </div>
                <span className="inline-block text-[#DA1D3A] text-xs font-medium tracking-widest uppercase border border-[#DA1D3A]/30 px-2 py-0.5 mb-3">{level}</span>
                <h3 className="font-display text-xl font-black uppercase mb-3 group-hover:text-[#DA1D3A] transition-colors">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#DA1D3A] text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#131829] py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Get started</p>
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-black uppercase leading-[0.95] mb-6">
            Ready to compete?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/contact" className="inline-block bg-[#DA1D3A] text-white font-medium text-base px-10 py-4 rounded-sm hover:bg-red-700 transition-colors uppercase tracking-wider">
            Register now →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
