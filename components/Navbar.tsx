"use client";

import { useState, useEffect } from "react";
import TulipSVG from "./TulipSVG";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0518]/90 backdrop-blur-md border-b border-[rgba(197,174,237,0.1)] shadow-lg shadow-[#0d0518]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 group">
          <TulipSVG variant="decorative" size={32} />
          <span
            className="font-display text-xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="text-gradient-tulip">Judielle</span>
            <span className="text-cream/80"> Villacrusis</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-light tracking-widest text-cream/60 hover:text-cream transition-colors duration-300 uppercase"
                style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.15em" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase btn-shimmer text-white transition-transform hover:scale-105"
              style={{ letterSpacing: "0.12em" }}
            >
              Hire Me
            </a>
          </li>
        </ul>


        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>


      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 bg-[#1a0a2e]/95 backdrop-blur-md border-b border-[rgba(197,174,237,0.1)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block text-sm font-light tracking-widest text-cream/70 hover:text-cream transition-colors uppercase py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="inline-block px-5 py-2.5 rounded-full text-xs font-medium btn-shimmer text-white uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}