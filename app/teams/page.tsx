import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
export const metadata = { title: "Teams — GritTemplate" };


const teams = [
  { initials: "RD", name: "Red Dragons", sport: "Football", wins: 8, losses: 2, captain: "Marco S.", image: "/placeholders/logo 1.jpg" },
  { initials: "BL", name: "Blue Lightning", sport: "Basketball", wins: 7, losses: 3, captain: "Jamie K.", image: "/placeholders/logo2.jpg" },
  { initials: "GW", name: "Green Wolves", sport: "Volleyball", wins: 6, losses: 4, captain: "Rania L.", image: "/placeholders/logo3.jpg" },
  { initials: "IH", name: "Iron Hawks", sport: "Football", wins: 9, losses: 1, captain: "Alex T.", image: "/placeholders/logo4.jpg" },
  { initials: "SS", name: "Storm Strikers", sport: "Basketball", wins: 5, losses: 5, captain: "Chris P.", image: "/placeholders/logo5.jpg" },
  { initials: "FC", name: "Fire Cobras", sport: "Tennis", wins: 7, losses: 3, captain: "Nina R.", image: "/placeholders/logo6.jpg" },
];

const sports = ["All", "Football", "Basketball", "Volleyball", "Tennis"];

export default function TeamsPage() {
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
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Season 2026</p>
          </div>
          <h1 className="font-display text-[clamp(52px,10vw,100px)] font-black leading-[0.92] uppercase mb-6">
            Meet the<br /><span className="text-[#DA1D3A]">Teams</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-[#0e132b] pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {sports.map((s) => (
              <span key={s} className={`text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-sm border cursor-pointer transition-colors ${s === "All" ? "bg-[#DA1D3A] border-[#DA1D3A] text-white" : "border-white/10 text-white/40 hover:border-[#DA1D3A]/40 hover:text-white"}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Teams grid */}
      <section className="bg-[#0e132b] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {teams.map(({ initials, name, sport, wins, losses, captain, image }) => (
              <div key={name} className="group bg-[#131829] border border-white/5 rounded-sm overflow-hidden hover:border-[#DA1D3A]/40 transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />

                {/* Team header with logo */}
                <div className="p-6 border-b border-white/5 flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-sm overflow-hidden flex-shrink-0 bg-[#0e132b] border border-white/10">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover object-center"
                    />
                    {/* Fallback initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-sm font-black text-[#DA1D3A]/30">{initials}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black uppercase group-hover:text-[#DA1D3A] transition-colors">{name}</h3>
                    <span className="text-[#DA1D3A] text-xs uppercase tracking-widest">{sport}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-display text-3xl font-black text-white">{wins}</p>
                    <p className="text-white/35 text-xs uppercase tracking-widest mt-1">Wins</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <p className="font-display text-3xl font-black text-white">{losses}</p>
                    <p className="text-white/35 text-xs uppercase tracking-widest mt-1">Losses</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-black text-[#DA1D3A]">{wins + losses}</p>
                    <p className="text-white/35 text-xs uppercase tracking-widest mt-1">Played</p>
                  </div>
                </div>

                <div className="px-6 pb-5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A]" />
                  <p className="text-white/35 text-xs">Captain: <span className="text-white/60">{captain}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#131829] py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Join a team</p>
            <div className="h-[1px] w-8 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-black uppercase leading-[0.95] mb-6">
            Find your squad
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
