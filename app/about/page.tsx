import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = { title: "About — GritTemplate" };

export default function AboutPage() {
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
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Who we are</p>
          </div>
          <h1 className="font-display text-[clamp(52px,10vw,100px)] font-black leading-[0.92] uppercase mb-6">
            About<br /><span className="text-[#DA1D3A]">GritTemplate</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0e132b] py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Our mission</p>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] font-black uppercase leading-[0.95] mb-6">
              Built for<br />athletes
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2018", label: "Founded" },
              { num: "500+", label: "Athletes" },
              { num: "12",   label: "Sports" },
              { num: "8",    label: "Years running" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-[#131829] border border-white/5 rounded-sm p-6 hover:border-[#DA1D3A]/30 transition-colors">
                <p className="font-display text-4xl font-black text-[#DA1D3A] mb-1">{num}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#131829] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Our team</p>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-black uppercase leading-[0.95] mb-16">
            The people<br />behind it
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { initials: "JD", name: "John Dela Cruz", role: "Founder & CEO" },
              { initials: "MR", name: "Maria Reyes",    role: "Head of Programs" },
              { initials: "AS", name: "Alex Santos",    role: "League Director" },
              { initials: "KL", name: "Kim Lim",        role: "Community Manager" },
            ].map(({ initials, name, role }) => (
              <div key={name} className="group bg-[#0e132b] border border-white/5 rounded-sm p-6 hover:border-[#DA1D3A]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />
                <div className="w-14 h-14 rounded-sm bg-[#DA1D3A]/20 flex items-center justify-center font-display text-xl font-black text-[#DA1D3A] mb-4">
                  {initials}
                </div>
                <p className="font-medium text-white text-sm mb-1 group-hover:text-[#DA1D3A] transition-colors">{name}</p>
                <p className="text-white/35 text-xs uppercase tracking-widest">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0e132b] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">What we stand for</p>
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-black uppercase leading-[0.95] mb-16">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Grit",      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
              { icon: "🤝", title: "Community", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
              { icon: "🏆", title: "Excellence", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="group bg-[#131829] border border-white/5 rounded-sm p-8 hover:border-[#DA1D3A]/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />
                <div className="w-10 h-10 rounded-sm bg-white/5 group-hover:bg-[#DA1D3A]/10 flex items-center justify-center mb-5 transition-colors">
                  <span className="text-lg">{icon}</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase mb-3 group-hover:text-[#DA1D3A] transition-colors">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
