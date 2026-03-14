"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const faqs = [
  {
    q: "How do I register for a league or tournament?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "What skill levels do you cater to?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    q: "How are teams formed and matched?",
    a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    q: "What is included in the registration fee?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    q: "Can schools register as a group?",
    a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    q: "How long does a season run?",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  },
];


function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`group border rounded-sm overflow-hidden transition-all duration-300 ${open ? "border-[#DA1D3A]/40 bg-[#DA1D3A]/5" : "border-white/5 bg-[#0e132b] hover:border-white/15"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className={`font-display text-base font-bold uppercase tracking-wide transition-colors ${open ? "text-[#DA1D3A]" : "text-white group-hover:text-white/80"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-sm border flex items-center justify-center text-xs font-bold transition-all duration-300 ${open ? "bg-[#DA1D3A] border-[#DA1D3A] text-white rotate-45" : "border-white/20 text-white/40"}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="h-[1px] w-full bg-white/5 mb-5" />
          <p className="text-white/55 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "bg-[#0e132b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white w-full focus:outline-none focus:border-[#DA1D3A]/60 transition-colors placeholder:text-white/25";

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
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Get in touch</p>
          </div>
          <h1 className="font-display text-[clamp(52px,10vw,100px)] font-black leading-[0.92] uppercase mb-6">
            Contact<br /><span className="text-[#DA1D3A]">us</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#0e132b] py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Our details</p>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-black uppercase leading-[0.95] mb-10">
              Let's talk
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: "✉", label: "Email", value: "hello@grittemplate.com", href: "mailto:hello@grittemplate.com" },
                { icon: "✆", label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: "⊙", label: "Address", value: "123 Sports Ave, City, State 00000", href: "#" },
                { icon: "⏱", label: "Hours", value: "Mon–Fri: 9am – 6pm", href: "#" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="group flex items-start gap-4 p-5 bg-[#131829] border border-white/5 rounded-sm hover:border-[#DA1D3A]/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#DA1D3A] transition-all duration-300" />
                  <div className="w-9 h-9 rounded-sm bg-[#DA1D3A]/10 flex items-center justify-center text-[#DA1D3A] text-sm flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-1">{label}</p>
                    <a href={href} className="text-white/70 text-sm hover:text-white transition-colors">{value}</a>
                  </div>
                </div>
              ))}
            </div>




          </div>

          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">Send a message</p>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-black uppercase leading-[0.95] mb-10">
              Write to us
            </h2>

            {submitted ? (
              <div className="border border-[#DA1D3A]/30 bg-[#DA1D3A]/5 rounded-sm p-12 text-center">
                <p className="font-display text-4xl font-black uppercase text-[#DA1D3A] mb-3">Message sent!</p>
                <p className="text-white/55 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>
                <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} style={{ color: form.subject ? "#fff" : "rgba(255,255,255,0.25)" }}>
                  <option value="" disabled>Select subject</option>
                  <option>General inquiry</option>
                  <option>Registration</option>
                  <option>Programs</option>
                  <option>Teams</option>
                  <option>Merch</option>
                  <option>Other</option>
                </select>
                <textarea required placeholder="Your message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                <button type="submit" className="bg-[#DA1D3A] text-white font-medium text-base py-4 rounded-sm hover:bg-red-700 transition-colors uppercase tracking-wider mt-2">
                  Send message →
                </button>
                <p className="text-white/25 text-xs text-center">We typically respond within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="bg-[#131829] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#DA1D3A]" />
                <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase">FAQ</p>
              </div>
              <h2 className="font-display text-[clamp(36px,5vw,60px)] font-black uppercase leading-[0.95]">
                Frequently asked<br />questions
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed sm:text-right">
              Can't find your answer? Send us a message above.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <FaqItem key={i} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
