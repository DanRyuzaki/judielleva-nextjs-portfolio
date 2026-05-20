"use client";

import { useEffect, useRef, useState } from "react";
import TulipSVG from "./TulipSVG";

const serviceOptions = [
  "CRM & Client Operations",
  "Bookkeeping & Financial Administration",
  "Lead Generation & Data Analytics",
  "Social Media Management",
  "Notion Architecture & Digital Workspaces",
  "Graphic Design & Creative Asset Creation",
  "Full Package / Unsure",
];

function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[rgba(45,27,78,0.4)] border rounded-xl px-5 py-4 text-sm font-light transition-all duration-300 focus:outline-none"
        style={{
          borderColor: open ? "rgba(200,116,138,0.5)" : "rgba(197,174,237,0.15)",
          color: value ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.25)",
          background: open ? "rgba(63,40,104,0.4)" : "rgba(45,27,78,0.4)",
        }}
      >
        <span>{value || "Service of Interest"}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            d="M2 4.5l5 5 5-5"
            stroke="rgba(197,174,237,0.5)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>


      {open && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-xl overflow-hidden py-1"
          style={{
            background: "rgba(22,10,44,0.97)",
            border: "1px solid rgba(197,174,237,0.18)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
            backdropFilter: "blur(16px)",
          }}
        >
          {serviceOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full text-left px-5 py-3 text-sm font-light transition-all duration-150"
              style={{
                color:
                  value === opt
                    ? "rgba(245,240,232,0.95)"
                    : "rgba(245,240,232,0.55)",
                background:
                  value === opt
                    ? "rgba(107,74,155,0.35)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                if (value !== opt)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(107,74,155,0.2)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(245,240,232,0.9)";
              }}
              onMouseLeave={(e) => {
                if (value !== opt) {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(245,240,232,0.55)";
                }
              }}
            >
              {value === opt && (
                <span className="mr-2" style={{ color: "#c8748a" }}>✓</span>
              )}
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full bg-[rgba(45,27,78,0.4)] border border-[rgba(197,174,237,0.15)] rounded-xl px-5 py-4 text-cream/80 text-sm font-light placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[rgba(200,116,138,0.5)] focus:bg-[rgba(63,40,104,0.4)] transition-all duration-300";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #0d0518 100%)" }}
    >
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none animate-[floatSlow_8s_ease-in-out_infinite]">
        <TulipSVG variant="full" size={180} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-8 pointer-events-none">
        <TulipSVG variant="silhouette" size={140} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="reveal flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8748a]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#d4a0bc] font-light">Get in Touch</span>
              </div>
              <h2
                className="reveal text-5xl md:text-6xl font-light text-cream leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Let's grow{" "}
                <span className="text-gradient-tulip italic font-semibold">together</span>
              </h2>
              <p className="reveal text-cream/50 font-light leading-relaxed max-w-md">
                Ready to reclaim your time? I'd love to learn about your business and how I can help it thrive.
                Fill out the form or reach out directly.
              </p>
            </div>

            <div className="reveal space-y-5">
              {[
                {
                  label: "Email",
                  value: "villacrusisjudielle@gmail.com",
                  svg: (
                    <svg width="20" height="20" viewBox="-26 -20 52 36" fill="none">
                      <rect x="-22" y="-16" width="44" height="30" rx="4" stroke="url(#cq1)" strokeWidth="1.5"/>
                      <path d="M-22,-16 L0,8 L22,-16" stroke="url(#cq1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="cq1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
                      </defs>
                    </svg>
                  ),
                },
                {
                  label: "Mobile",
                  value: "+63 993 344 2901",
                  svg: (
                    <svg width="20" height="20" viewBox="-22 -32 44 56" fill="none">
                      <rect x="-18" y="-28" width="36" height="46" rx="6" stroke="url(#cp1)" strokeWidth="1.5"/>
                      <line x1="-6" y1="-22" x2="6" y2="-22" stroke="url(#cp1)" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="0" cy="10" r="3" fill="url(#cp1)"/>
                      <defs>
                        <linearGradient id="cp1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
                      </defs>
                    </svg>
                  ),
                },
                {
                  label: "Availability",
                  value: "Mon–Fri · 8AM–9PM GMT+8",
                  svg: (
                    <svg width="20" height="20" viewBox="-26 -26 52 52" fill="none">
                      <circle cx="0" cy="0" r="22" stroke="url(#cq2)" strokeWidth="1.5"/>
                      <line x1="0" y1="0" x2="0" y2="-13" stroke="url(#cq2)" strokeWidth="1.8" strokeLinecap="round"/>
                      <line x1="0" y1="0" x2="9" y2="6" stroke="url(#cp2)" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="0" cy="0" r="2" fill="url(#cp2)"/>
                      <defs>
                        <linearGradient id="cq2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
                        <linearGradient id="cp2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
                      </defs>
                    </svg>
                  ),
                },
                {
                  label: "Response Time",
                  value: "Within 24 hours",
                  svg: (
                    <svg width="20" height="20" viewBox="-26 -26 52 52" fill="none">
                      <circle cx="0" cy="0" r="22" stroke="url(#cp3)" strokeWidth="1.5"/>
                      <path d="M4,-14 L-7,2 L2,2 L-4,14 L9,-2 L0,-2 Z" fill="url(#cq3)"/>
                      <defs>
                        <linearGradient id="cp3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
                        <linearGradient id="cq3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
                      </defs>
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(107,74,155,0.3)", border: "1px solid rgba(197,174,237,0.15)" }}
                  >
                    {item.svg}
                  </div>
                  <div>
                    <p className="text-xs text-cream/35 font-light tracking-wider uppercase">{item.label}</p>
                    <p className="text-sm text-cream/70 font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <TulipSVG variant="decorative" size={24} />
                <span className="text-sm font-medium text-cream/80" style={{ fontFamily: "var(--font-cormorant)", fontSize: "16px" }}>Starting Packages</span>
              </div>
              {[
                { name: "Bud", hours: "10 hrs/month", price: "$150" },
                { name: "Bloom", hours: "20 hrs/month", price: "$260" },
                { name: "Bouquet", hours: "40 hrs/month", price: "$480" },
              ].map((pkg) => (
                <div key={pkg.name} className="flex justify-between items-center py-2 border-b border-[rgba(197,174,237,0.08)] last:border-0">
                  <div>
                    <span className="text-sm text-cream/70 font-light">{pkg.name}</span>
                    <span className="text-xs text-cream/35 ml-2">· {pkg.hours}</span>
                  </div>
                  <span className="text-sm font-medium text-gradient-tulip" style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px" }}>{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="reveal">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
              <h3
                className="text-2xl font-semibold text-cream mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={inputClass}
                />
              </div>


              <CustomSelect
                value={formState.service}
                onChange={(v) => setFormState({ ...formState, service: v })}
              />

              <textarea
                placeholder="Tell me about your business and what you need help with..."
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-medium tracking-wider text-sm uppercase text-white btn-shimmer transition-all hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent! ✓" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-center text-xs text-[#e89ab5] font-light">
                  Something went wrong. Please email me directly.
                </p>
              )}

              <p className="text-center text-xs text-cream/25 font-light">
                I'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}