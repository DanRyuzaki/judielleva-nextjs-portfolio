"use client";

import { useEffect, useRef } from "react";
import TulipSVG from "./TulipSVG";

const services = [
  {
    svg: (
      <svg width="36" height="36" viewBox="-26 -38 52 56" fill="none">
        <rect x="-22" y="-30" width="44" height="40" rx="4" stroke="url(#sp)" strokeWidth="1.5"/>
        <line x1="-22" y1="-18" x2="22" y2="-18" stroke="url(#sp)" strokeWidth="1.2"/>
        <line x1="-10" y1="-34" x2="-10" y2="-24" stroke="url(#sq)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="-34" x2="10" y2="-24" stroke="url(#sq)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="-8" cy="-14" r="2.5" fill="url(#sp)"/>
        <circle cx="6" cy="-14" r="2.5" fill="url(#sq)"/>
        <circle cx="-8" cy="0" r="2.5" fill="url(#sq)"/>
        <defs>
          <linearGradient id="sp" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
          <linearGradient id="sq" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#c8748a] to-[#a886e0]",
    title: "CRM & Client Operations",
    description: "Streamline your backend systems and client journeys. I manage your CRM pipelines, oversee executive calendar scheduling, handle automated email workflows, and orchestrate client follow-up sequences to ensure no high-value lead or relationship falls through the cracks.",
  },
  {
    svg: (
      <svg width="36" height="36" viewBox="-28 -22 56 40" fill="none">
        <rect x="-24" y="-18" width="48" height="34" rx="4" stroke="url(#sq2)" strokeWidth="1.5"/>
        <path d="M-24,-18 L0,6 L24,-18" stroke="url(#sq2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="sq2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#a886e0] to-[#c8748a]",
    title: "Bookkeeping & Financial Administration",
    description: "Keep your business financially healthy and audit-ready. I handle day-to-day financial tracking, including meticulous expense categorization, client invoicing, receipt management, and bank reconciliation to give you a clear view of your cash flow.",
  },
  {
    svg: (
      <svg width="36" height="36" viewBox="-26 -36 52 62" fill="none">
        <rect x="-22" y="-32" width="44" height="52" rx="3" stroke="url(#sp3)" strokeWidth="1.5"/>
        <line x1="-12" y1="-20" x2="12" y2="-20" stroke="url(#sp3)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="-12" y1="-10" x2="12" y2="-10" stroke="url(#sq3)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="-12" y1="0" x2="4" y2="0" stroke="url(#sp3)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="-12" y1="10" x2="8" y2="10" stroke="url(#sq3)" strokeWidth="1.2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="sp3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
          <linearGradient id="sq3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#c8748a] to-[#d4af7a]",
    title: "Lead Generation & Data Analytics",
    description: "High-accuracy target market mapping and list building. From deep web research to building active competitor engagement tracking systems, I deliver clean, verified B2B lead sheets structured by location, niche, and engagement history to fuel your sales pipeline.",
  },
  {
    svg: (
      <svg width="36" height="36" viewBox="-26 -24 52 46" fill="none">
        <circle cx="-16" cy="8" r="7" stroke="url(#sp4)" strokeWidth="1.5"/>
        <circle cx="16" cy="-12" r="7" stroke="url(#sq4)" strokeWidth="1.5"/>
        <circle cx="16" cy="14" r="7" stroke="url(#sp4)" strokeWidth="1.5"/>
        <line x1="-9" y1="4" x2="9" y2="-8" stroke="url(#sq4)" strokeWidth="1.2"/>
        <line x1="-9" y1="12" x2="9" y2="10" stroke="url(#sp4)" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="sp4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
          <linearGradient id="sq4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#a886e0] to-[#e89ab5]",
    title: "Social Media Management",
    description: "Maintain a powerful, consistent digital presence. I architect comprehensive content calendars, map out asset pipelines (video/image/text), write platform-specific copy, and track production statuses to turn your profiles into high-engagement communities.",
  },
  {
    svg: (
      <svg width="36" height="36" viewBox="-26 -34 52 64" fill="none">
        <path d="M-4,-30 L14,-30 L22,-22 L22,26 L-22,26 L-22,-22 L-14,-30 Z" stroke="url(#sq5)" strokeWidth="1.5"/>
        <path d="M14,-30 L14,-22 L22,-22" stroke="url(#sq5)" strokeWidth="1.2"/>
        <line x1="-12" y1="-8" x2="12" y2="-8" stroke="url(#sp5)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="-12" y1="2" x2="12" y2="2" stroke="url(#sq5)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="-12" y1="12" x2="4" y2="12" stroke="url(#sp5)" strokeWidth="1.2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="sp5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
          <linearGradient id="sq5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#8b5fcf] to-[#c8748a]",
     title: "Notion Architecture & Digital Workspaces",
    description: "Transform operational chaos into structural clarity. I design custom, high-end Notion workspaces, customized CRM portals, team dashboards, and aesthetic weekly planners tailored to optimize your personal life or business operations.",
  },
  {
    svg: (
      <svg width="36" height="36" viewBox="-24 -32 48 56" fill="none">
        <circle cx="0" cy="-18" r="10" stroke="url(#sp6)" strokeWidth="1.5"/>
        <path d="M-20,20 Q-20,4 0,4 Q20,4 20,20" stroke="url(#sp6)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14,-22 L18,-18 L10,-12" stroke="url(#sq6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="sp6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
          <linearGradient id="sq6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
        </defs>
      </svg>
    ),
    accent: "from-[#d4af7a] to-[#a886e0]",
    title: "Graphic Design & Creative Asset Creation",
    description: "Elevate your brand with distinct, high-impact visuals. I create professional publicity materials (pubmats), corporate event posters, vector illustrations, and specialized merchandise/apparel design layout mockups that align with your core brand identity.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-25 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0518 0%, #1a0a2e 50%, #0d0518 100%)" }}
    >
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <TulipSVG variant="silhouette" size={280} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-8 pointer-events-none rotate-180">
        <TulipSVG variant="silhouette" size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-6"> 
        <div className="text-center mb-20 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c8748a]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#d4a0bc] font-light">What I Offer</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8748a]" />
          </div>
          <h2
            className="reveal text-5xl md:text-6xl font-light text-cream"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Services that{" "}
            <span className="text-gradient-tulip italic font-semibold">bloom</span>
          </h2>
          <p className="reveal text-cream/50 max-w-xl mx-auto font-light leading-relaxed">
            Curated support for entrepreneurs and businesses ready to reclaim their time and energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal glass-card rounded-2xl p-7 cursor-default group relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -bottom-4 -right-4 opacity-[0.04] group-hover:opacity-[0.10] transition-opacity duration-700 pointer-events-none">
                <TulipSVG variant="bud" size={110} />
              </div> 
              <div className="flex items-start justify-between mb-5">
                <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {service.svg}
                </div>
              </div>

              <h3
                className="text-xl font-medium text-cream mb-3 leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.title}
              </h3>
                 <div
                className={`h-px bg-gradient-to-r ${service.accent} mb-4 transition-all duration-500`}
                style={{ width: "172px" }}
                ref={(el) => {
                  if (el) {
                    el.style.setProperty("--hover-w", "56px");
                  }
                }}
              />  <p className="text-cream/50 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}