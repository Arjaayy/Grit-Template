import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export const metadata = { title: "Programs — GritTemplate" };

const programs = [
  { icon: "⚽", title: "Football League", level: "All levels", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "/placeholders/football.jpg" },
  { icon: "🏀", title: "Basketball League", level: "Intermediate", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "/placeholders/basketball.jpg" },
  { icon: "🏐", title: "Volleyball League", level: "Beginner", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "/placeholders/volleyball.jpg" },
  { icon: "🎾", title: "Tennis Program", level: "Advanced", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image: "/placeholders/tennis.jpg" },
  { icon: "🏫", title: "School Programs", level: "Youth", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magna aliqua enim ad minim veniam.", image: "/placeholders/school.jpg" },
  { icon: "🏅", title: "Elite Tournaments", level: "Competitive", desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.", image: "/placeholders/elite.jpg" },
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
            {programs.map(({ icon, title, level, desc, image }) => (
              <div key={title} className="group bg-[#131829] border border-white/5 rounded-sm overflow-hidden hover:border-[#DA1D3A]/50 transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300 z-10" />

                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0e132b]/50 group-hover:bg-[#0e132b]/30 transition-all duration-300" />
                  <span className="absolute top-4 left-4 font-display text-5xl font-black text-white/20 group-hover:text-[#DA1D3A]/50 transition-colors duration-300 leading-none z-10">
                    {icon}
                  </span>
                  <div className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#DA1D3A]" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block text-[#DA1D3A] text-xs font-medium tracking-widest uppercase border border-[#DA1D3A]/30 px-2 py-0.5 mb-3">{level}</span>
                  <h3 className="font-display text-xl font-black uppercase mb-3 group-hover:text-[#DA1D3A] transition-colors">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#DA1D3A] text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <span>→</span>
                  </div>
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
