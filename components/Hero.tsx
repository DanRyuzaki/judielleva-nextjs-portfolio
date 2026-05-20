"use client";

import { useEffect, useRef } from "react";
import TulipSVG from "./TulipSVG";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const items = hero.querySelectorAll(".hero-item");
    items.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 70% 50%, #2d1b4e 0%, #1a0a2e 40%, #0d0518 100%)",
      }}
    >

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #6b4a9b 0%, transparent 70%)",
            top: "-10%",
            right: "5%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #c8748a 0%, transparent 70%)",
            bottom: "10%",
            left: "10%",
          }}
        />

        <div className="absolute top-24 left-12 opacity-20">
          <TulipSVG variant="bud" size={50} animated />
        </div>
        <div className="absolute bottom-32 right-16 opacity-15 rotate-12">
          <TulipSVG variant="bud" size={40} animated />
        </div>
        <div className="absolute top-1/2 left-8 opacity-10 -rotate-6">
          <TulipSVG variant="decorative" size={60} animated />
        </div>


        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,174,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(197,174,237,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 relative z-10">

            <div
              className="hero-item flex items-center gap-3"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8748a]" />
              <span
                className="text-xs font-medium tracking-[0.3em] uppercase text-[#d4a0bc]"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Virtual Assistant
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c8748a]" />
            </div>


            <div
              className="hero-item space-y-1"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              <h1
                className="text-6xl md:text-7xl xl:text-8xl leading-[0.9] font-light"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <span className="text-cream/90">Your business,</span>
                <br />
                <span className="text-gradient-tulip font-semibold italic">beautifully</span>
                <br />
                <span className="text-cream/90">organized.</span>
              </h1>
            </div>


            <div
              className="hero-item max-w-md"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              <p className="text-cream/55 font-light leading-relaxed text-lg" style={{ fontFamily: "var(--font-jost)" }}>
                Hi, I'm <span className="text-[#d4a0bc] font-normal">Judielle</span>, I help businesses stay organized, grow online, and attract quality leads, delivering fast, accurate, and
                results-driven work.
              </p>
            </div>


            <div
              className="hero-item flex flex-wrap gap-4"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="px-8 py-4 rounded-full btn-shimmer text-white font-medium tracking-wider text-sm uppercase transition-transform hover:scale-105"
              >
                Work With Me
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="px-8 py-4 rounded-full border border-[rgba(197,174,237,0.3)] text-cream/70 hover:text-cream hover:border-[rgba(197,174,237,0.6)] font-light tracking-wider text-sm uppercase transition-all duration-300"
              >
                Explore Services
              </a>
            </div>


            <div
              className="hero-item flex items-center gap-2"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs text-cream/40 font-light tracking-wider">Available for new clients</span>
            </div>
          </div>



          <div className="hidden lg:flex justify-center items-center relative overflow-hidden" style={{ minHeight: "480px" }}>

            <div className="relative z-10">
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(200,116,138,0.4) 0%, transparent 60%)",
                  transform: "scale(1.4)",
                }}
              />
              <svg
                className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite] opacity-20"
                viewBox="0 0 400 400"
              >
                <circle cx="200" cy="200" r="190" stroke="url(#heroRing)" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
                <defs>
                  <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#c8748a" />
                    <stop offset="1" stopColor="#a886e0" />
                  </linearGradient>
                </defs>
              </svg>
              <TulipSVG variant="full" size={320} animated className="tulip-glow relative z-10" />
            </div>


            <div
              className="absolute glass-card rounded-2xl p-4 w-44 animate-[floatMed_6s_ease-
              -out_infinite]"
              style={{
                top: "6%",
                left: "2%",
                animationDelay: "0s",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <svg width="16" height="16" viewBox="-28 -44 56 80" fill="none">
                  <path d="M0,-38 L22,-28 L22,0 Q22,22 0,34 Q-22,22 -22,0 L-22,-28 Z" stroke="url(#hg1)" strokeWidth="2"/>
                  <path d="M-10,0 L-3,8 L12,-8" stroke="url(#hg1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs><linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient></defs>
                </svg>
                <span className="text-xs font-medium text-cream/80" style={{ fontFamily: "var(--font-cormorant)", fontSize: "14px" }}>Reliability</span>
              </div>
              <p className="text-xs text-cream/40 font-light leading-snug">Timely, consistent delivery every time.</p>
            </div>


            <div
              className="absolute glass-card rounded-2xl p-3 w-44 animate-[floatSlow_7s_ease-in-out_infinite]"
              style={{
                top: "11%",
                right: "2%",
                animationDelay: "1s",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <svg width="16" height="16" viewBox="-28 -20 56 40" fill="none">
                  <ellipse cx="0" cy="0" rx="22" ry="14" stroke="url(#hg2)" strokeWidth="2"/>
                  <circle cx="0" cy="0" r="6" stroke="url(#hg2)" strokeWidth="2"/>
                  <circle cx="0" cy="0" r="2" fill="#8b5fcf"/>
                  <defs><linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient></defs>
                </svg>
                <span className="text-xs font-medium text-cream/80" style={{ fontFamily: "var(--font-cormorant)", fontSize: "14px" }}>Discretion</span>
              </div>
              <p className="text-xs text-cream/40 font-light leading-snug">Your info, handled with full confidentiality.</p>
            </div>


            <div
              className="absolute glass-card rounded-2xl p-4 w-44 animate-[floatMed_6s_ease-in-out_infinite]"
              style={{
                bottom: "6%",
                left: "2%",
                animationDelay: "2s",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <svg width="16" height="16" viewBox="-28 -28 56 56" fill="none">
                  <circle cx="0" cy="0" r="24" stroke="url(#hg3)" strokeWidth="2" strokeDasharray="4 3"/>
                  <path d="M-6,-14 A16,16 0 0,1 14,4" stroke="url(#hg3)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10,-16 L-6,-14 L-4,-2" stroke="url(#hg3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs><linearGradient id="hg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient></defs>
                </svg>
                <span className="text-xs font-medium text-cream/80" style={{ fontFamily: "var(--font-cormorant)", fontSize: "14px" }}>Adaptability</span>
              </div>
              <p className="text-xs text-cream/40 font-light leading-snug">My workflow fits seamlessly into yours.</p>
            </div>


            <div
              className="absolute glass-card rounded-2xl p-3 w-44 animate-[floatMed_8s_ease-in-out_infinite]"
              style={{
                bottom: "6%",
                right: "8%",
                animationDelay: "1.5s",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <svg width="16" height="16" viewBox="-28 -28 56 56" fill="none">
                  <circle cx="0" cy="0" r="24" stroke="url(#hg4)" strokeWidth="2"/>
                  <path d="M4,-18 L-8,2 L2,2 L-4,18 L10,-4 L0,-4 Z" fill="url(#hg4fill)"/>
                  <defs>
                    <linearGradient id="hg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c5aeed"/><stop offset="100%" stopColor="#8b5fcf"/></linearGradient>
                    <linearGradient id="hg4fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e89ab5"/><stop offset="100%" stopColor="#c8748a"/></linearGradient>
                  </defs>
                </svg>
                <span className="text-xs font-medium text-cream/80" style={{ fontFamily: "var(--font-cormorant)", fontSize: "14px" }}>Proactivity</span>
              </div>
              <p className="text-xs text-cream/40 font-light leading-snug">I solve problems before you have to ask.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-cream/50" style={{ fontSize: "10px" }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c8748a] to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes floatMed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}