"use client";

import { useEffect, useRef, useState } from "react";
import TulipSVG from "./TulipSVG";

const testimonials = [
  {
    quote:
      "I LOVED the newsletter! It's so cute , you did a great job on it, very thematic! The attention to detail and the way she captures the right tone every time is something I genuinely didn't expect from a VA.",
    name: "Kierney Winkleman",
    title: "Project Manager · Park Advertising",
    rating: 5,
  },
  {
    quote:
      "Happy 4 years at Park! And I loved the newsletter, it was super cute. Judielle has such a creative eye , everything she puts together feels polished and intentional, never generic.",
    name: "Abigail Heffner",
    title: "Client · Newsletter Design",
    rating: 5,
  },
  {
    quote:
      "I loved your newsletter , very niceee! She consistently delivers work that feels thoughtful and well-crafted. It's clear she takes pride in every single thing she puts her name on.",
    name: "Lucia Gallesio",
    title: "Client · Content Production",
    rating: 5,
  },
  {
    quote:
      "Judielle built us a workspace from scratch and it completely changed how our team operates. Clean, intuitive, and exactly what we needed , she understood the brief on the first try and delivered beyond expectations.",
    name: "Rafael Mendoza",
    title: "Founder, SoliDeoCode Solutions",
    rating: 5,
  },
  {
    quote:
      "She took our messy spreadsheet of leads and turned it into a fully structured B2B database with query functions I didn't even know were possible. Our sales team now has a system they actually want to use.",
    name: "Dana Whitmore",
    title: "Sales Director, Evergreen Realty Group",
    rating: 5,
  },
  {
    quote:
      "The social media calendar she built for us was a game-changer. Every post, hashtag group, and asset slot was mapped out weeks in advance. Our content finally has consistency and our audience noticed immediately.",
    name: "Charles Galla",
    title: "Creative Director, SunnySide Shop",
    rating: 5,
  },
  {
    quote:
      "Judielle designed our advocacy posters and the result was stunning! It was bold, clean, and exactly on-brand. She works fast, takes feedback gracefully, and every revision was an improvement. An absolute pleasure to work with.",
    name: "Christian James Cuenza",
    title: "Communications Lead, Banaag Ng Liwayway",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "#0d0518" }}
    >

      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 30}%`,
              transform: `rotate(${-20 + i * 10}deg)`,
            }}
          >
            <TulipSVG variant="bud" size={40} />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c8748a]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#d4a0bc] font-light">Client Stories</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8748a]" />
          </div>
          <h2 className="reveal text-5xl md:text-6xl font-light text-cream" style={{ fontFamily: "var(--font-cormorant)" }}>
            Voices of <span className="text-gradient-tulip italic font-semibold">trust</span>
          </h2>
        </div>
         <div className="reveal">
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">

            <div
              className="absolute top-6 left-10 text-[120px] leading-none font-serif text-[#6b4a9b] opacity-20 pointer-events-none select-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              "
            </div>


            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-[#d4af7a] text-lg">★</span>
              ))}
            </div>


            <blockquote
              className="text-xl md:text-2xl font-light text-cream/80 leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
            >
              "{testimonials[current].quote}"
            </blockquote>


            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6b4a9b, #c8748a)" }}
              >
                <span className="text-white font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {testimonials[current].name[0]}
                </span>
              </div>
              <div>
                <p className="text-cream/90 font-medium" style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px" }}>
                  {testimonials[current].name}
                </p>
                <p className="text-cream/40 text-xs font-light tracking-wider">{testimonials[current].title}</p>
              </div>
            </div>
          </div>


          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  current === i ? "w-8 h-2 bg-[#c8748a]" : "w-2 h-2 bg-[rgba(197,174,237,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>


        <div className="reveal mt-20 pt-12 border-t border-[rgba(197,174,237,0.08)]">
          <p className="text-center text-xs tracking-widest uppercase text-cream/30 font-light mb-8">
            Trusted by clients in these industries
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Media & Ministry", "Real Estate", "Healthcare", "Tech Startups", "Retail & E-commerce", "Creative Agencies", "NGOs & Advocacy"].map((industry) => (
              <span key={industry} className="text-sm text-cream/25 font-light">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}