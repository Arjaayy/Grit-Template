"use client";

import { useState } from "react";

type FormState = {
  first: string;
  last: string;
  email: string;
  sport: string;
};

export default function Signup() {
  const [form, setForm] = useState<FormState>({ first: "", last: "", email: "", sport: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "bg-[#0e132b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white w-full focus:outline-none focus:border-[#DA1D3A]/60 transition-colors placeholder:text-white/30";

  return (
    <section id="signup" className="bg-[#131829] py-32 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.2em] uppercase mb-4 text-center">
          Season 2026
        </p>
        <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[0.95] mb-4 text-center">
          Claim your<br />spot
        </h2>
        <p className="text-white/40 text-sm text-center mb-12">
          Register now to secure your place in the upcoming season. No payment required at this stage.
        </p>

        {submitted ? (
          <div className="border border-[#DA1D3A]/30 bg-[#DA1D3A]/5 rounded-sm p-12 text-center">
            <p className="font-display text-5xl font-black uppercase text-[#DA1D3A] mb-3">
              You're in!
            </p>
            <p className="text-white/55 text-sm">
              We'll be in touch before season kick-off. Get ready to play.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="First name"
                value={form.first}
                onChange={(e) => setForm({ ...form, first: e.target.value })}
                className={inputClass}
              />
              <input
                required
                placeholder="Last name"
                value={form.last}
                onChange={(e) => setForm({ ...form, last: e.target.value })}
                className={inputClass}
              />
            </div>

            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />

            <select
              required
              value={form.sport}
              onChange={(e) => setForm({ ...form, sport: e.target.value })}
              className={inputClass}
              style={{ color: form.sport ? "#fff" : "rgba(255,255,255,0.3)" }}
            >
              <option value="" disabled>Select your sport</option>
              <option>Football (Soccer)</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Tennis</option>
              <option>Other</option>
            </select>

            <button
              type="submit"
              className="bg-[#DA1D3A] text-white font-medium text-base py-4 rounded-sm hover:bg-red-700 transition-colors mt-2"
            >
              Reserve my spot →
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
