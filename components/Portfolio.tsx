"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import TulipSVG from "./TulipSVG";

const projects = [
  {
    category: "CONTENT STRATEGY & WORKFLOW",
    title: "Multi-Channel Content Calendar & Production Pipeline",
    client: "Faith-Based Media Ministry / Content Agency",
    description:
      "Structured and managed a comprehensive multi-channel digital content calendar. Engineered an editorial approval pipeline for a collaborative media team, overseeing asset types (video/image/text), writing high-converting platform copy, organizing hashtag groups, and implementing tight time-blocked scheduling to maintain consistent brand presence.",
    tags: ["Google Sheets", "Buffer", "Content Architecture", "Workflow Optimization"],
    color: "#6b4a9b",
    images: [
      "/images/portfolio/content-1.png",
      "/images/portfolio/content-2.png",
    ],
  },
  {
    category: "LEAD GENERATION & ANALYTICS",
    title: "B2B Database Architecture & Multi-State Market Tracking",
    client: "Real Estate Investors & Healthcare Agencies",
    description:
      "Architected advanced, clean data workflows and relational spreadsheet pipelines to handle high-value prospecting and local market analytics. Engineered granular frameworks utilizing specialized query structures for financial accounts receivable auditing, multi-state consumer social engagement logging, and international supply chain logistics fulfillment tracking pipelines.",
    tags: ["Query Functions", "B2B Prospecting", "Financial Audits", "Data Systems", "Logistics Tracking"],
    color: "#c8748a",
    images: [
      "/images/portfolio/lead-1.png",
      "/images/portfolio/lead-2.png",
      "/images/portfolio/lead-3.png",
      "/images/portfolio/lead-4.png",
      "/images/portfolio/lead-5.png",
      "/images/portfolio/lead-6.png",
    ],
  },
  {
    category: "DIGITAL WORKSPACE ARCHITECTURE",
    title: "Bespoke Operational Ecosystems & Custom Notion Architectures",
    client: "Digital Product Founders & Agency Teams",
    description: "Engineered high-performance digital workspaces, centralized CRM hubs, and custom productivity templates inside Notion. Transformed fragmented team workflows into clear, aesthetic, and unified operational cockpits that maximize daily execution.",
    tags: ["Notion Architecture", "Workspace Design", "Systems Engineering", "Workflow Automation"],
    color: "#d4af7a",
    images: [
      "/images/portfolio/notion-1.png",
      "/images/portfolio/notion-2.png",
      "/images/portfolio/notion-3.png",
      "/images/portfolio/notion-4.png",
      "/images/portfolio/notion-5.png",
      "/images/portfolio/notion-6.png",
      "/images/portfolio/notion-7.png",
      "/images/portfolio/notion-8.png",
      "/images/portfolio/notion-9.png",
      "/images/portfolio/notion-10.png",
      "/images/portfolio/notion-11.png",
      "/images/portfolio/notion-12.png",
      "/images/portfolio/notion-13.png",
      "/images/portfolio/notion-14.png",
      "/images/portfolio/notion-15.png",
      "/images/portfolio/notion-16.png",
      "/images/portfolio/notion-17.png",
      "/images/portfolio/notion-18.png",
      "/images/portfolio/notion-19.png",
      "/images/portfolio/notion-20.png",
      "/images/portfolio/notion-21.png",
      "/images/portfolio/notion-22.png",
      "/images/portfolio/notion-23.png",
      "/images/portfolio/notion-24.png",
      "/images/portfolio/notion-25.png",
      "/images/portfolio/notion-26.png",
      "/images/portfolio/notion-27.png",
      "/images/portfolio/notion-28.png",
      "/images/portfolio/notion-29.png",
      "/images/portfolio/notion-30.png",
      "/images/portfolio/notion-31.png",
      "/images/portfolio/notion-32.png",
      "/images/portfolio/notion-33.png",
      "/images/portfolio/notion-34.png",
      "/images/portfolio/notion-35.png",
      "/images/portfolio/notion-36.png",
      "/images/portfolio/notion-37.png",
      "/images/portfolio/notion-38.png",
      "/images/portfolio/notion-39.png",
    ],
  },
  {
    category: "GRAPHIC & BRAND DESIGN",
    title: "Integrated Brand Identity and Promotional Design",
    client: "Creative Media Agencies & Retail Brands",
    description:
      "Executed end-to-end visual design strategies across digital and print media. Crafted high-impact social advocacy infographics, custom vector apparel mockups, and cohesive marketing collateral tailored to elevate brand presence and audience engagement.",
    tags: ["Graphic Design", "Print & Digital Media", "Branding & Identity", "Apparel Layouts", "Vector Illustration", "Typography"],
    color: "#a886e0",
    images: [
      "/images/portfolio/design-1.png",
      "/images/portfolio/design-2.png",
      "/images/portfolio/design-3.png",
      "/images/portfolio/design-4.png",
      "/images/portfolio/design-5.png",
    ],
  },
];

function ImageCarousel({ images, color, category, title, showOverlays = true, mobileHero = false }: {
  images: string[];
  color: string;
  category: string;
  title: string;
  showOverlays?: boolean;
  mobileHero?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(next, 4000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered, next]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i: number) => { goTo(i); resetTimer(); };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };
  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStartX - clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        borderRadius: mobileHero ? "20px 20px 0 0" : "16px",
        aspectRatio: mobileHero ? "16/9" : "16/10",
        background: `linear-gradient(135deg, ${color}40, ${color}15)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >

      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1)" : "scale(1.03)",
            zIndex: current === i ? 1 : 0,
          }}
        >
          <img
            src={src}
            alt={`Portfolio image ${i + 1}`}
            className="w-full h-full object-cover"
            draggable={false}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ zIndex: -1 }}>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center opacity-40"
              style={{ background: `${color}30`, border: `1px solid ${color}50` }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5"/>
                <circle cx="8.5" cy="8.5" r="2" stroke={color} strokeWidth="1.2"/>
                <path d="M3 16l5-5 4 4 3-3 6 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs font-light tracking-widest uppercase" style={{ color: `${color}80` }}>
              Image {i + 1} of {images.length}
            </p>
          </div>
        </div>
      ))}


      {showOverlays && <>


      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(13,5,24,0.72), transparent)",
          zIndex: 3,
        }}
      />


      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "55%",
          background: `linear-gradient(to top, rgba(13,5,24,0.92) 0%, rgba(13,5,24,0.55) 60%, transparent 100%)`,
          zIndex: 3,
        }}
      />


      <div
        className="absolute top-3.5 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
        style={{
          background: `${color}30`,
          border: `1px solid ${color}55`,
          backdropFilter: "blur(10px)",
          zIndex: 4,
        }}
      >

        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: color }}
        />
        <span
          className="text-[10px] tracking-[0.22em] uppercase font-medium"
          style={{ color: "rgba(245,240,232,0.9)" }}
        >
          {category}
        </span>
      </div>


      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-2" style={{ zIndex: 4 }}>
        <h3
          className="text-white font-semibold leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.15rem, 4.5vw, 1.6rem)",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h3>
      </div>

      </>}


      <div
        className="absolute top-3.5 right-4 px-2 py-1 rounded-full text-[10px] font-light transition-opacity duration-300"
        style={{
          background: "rgba(13,5,24,0.55)",
          border: `1px solid ${color}30`,
          color: "rgba(245,240,232,0.75)",
          backdropFilter: "blur(8px)",
          zIndex: 5,
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        {current + 1} / {images.length}
      </div>


      <div
        className="absolute bottom-3 flex items-center gap-1.5"
        style={{
          zIndex: 5,
          ...(mobileHero
            ? { right: "1rem" }
            : { left: "50%", transform: "translateX(-50%)" }),
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? "16px" : "5px",
              height: "5px",
              background: current === i ? color : "rgba(245,240,232,0.3)",
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>


      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(13,5,24,0.65)",
          border: `1px solid ${color}40`,
          backdropFilter: "blur(8px)",
          opacity: isHovered ? 1 : 0,
          transform: `translateY(-50%) ${isHovered ? "translateX(0)" : "translateX(-4px)"}`,
          zIndex: 5,
        }}
        aria-label="Previous image"
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7l5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(13,5,24,0.65)",
          border: `1px solid ${color}40`,
          backdropFilter: "blur(8px)",
          opacity: isHovered ? 1 : 0,
          transform: `translateY(-50%) ${isHovered ? "translateX(0)" : "translateX(4px)"}`,
          zIndex: 5,
        }}
        aria-label="Next image"
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M5 2l5 5-5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      id="portfolio"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0518 0%, #1a0a2e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20 space-y-4">
          <div className="reveal flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c8748a]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#d4a0bc] font-light">Work Samples</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c8748a]" />
          </div>
          <h2 className="reveal text-5xl md:text-6xl font-light text-cream" style={{ fontFamily: "var(--font-cormorant)" }}>
            Where results <span className="text-gradient-tulip italic font-semibold">speak</span>
          </h2>
        </div>


        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-light transition-all duration-300 ${
                activeIndex === i ? "text-white" : "text-cream/50 hover:text-cream/80"
              }`}
              style={{
                background: activeIndex === i
                  ? `linear-gradient(135deg, ${p.color}80, ${p.color}40)`
                  : "rgba(45,27,78,0.3)",
                border: activeIndex === i
                  ? `1px solid ${p.color}60`
                  : "1px solid rgba(197,174,237,0.1)",
              }}
            >
              {p.category}
            </button>
          ))}
        </div>


        <div className="reveal">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`transition-all duration-500 ${activeIndex === i ? "block opacity-100" : "hidden opacity-0"}`}
            >
              {
}
              <div
                className="lg:hidden rounded-[20px] overflow-hidden"
                style={{
                  background: "rgba(22, 10, 44, 0.92)",
                  border: `1px solid ${project.color}30`,
                  boxShadow: `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px ${project.color}18`,
                }}
              >

                <ImageCarousel
                  images={project.images}
                  color={project.color}
                  category={project.category}
                  title={project.title}
                  showOverlays={true}
                  mobileHero={true}
                />


                <div
                  className="h-px w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
                />


                <div className="px-5 py-6 space-y-5">

                  <p className="text-cream/60 font-light leading-relaxed text-sm">
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full font-light"
                        style={{
                          background: `${project.color}18`,
                          border: `1px solid ${project.color}35`,
                          color: "rgba(245,240,232,0.65)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                  <div
                    className="h-px"
                    style={{ background: `${project.color}20` }}
                  />


                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}25`, border: `1px solid ${project.color}35` }}
                    >
                      <TulipSVG variant="decorative" size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-cream/35 font-light tracking-widest uppercase">Client</p>
                      <p className="text-sm text-cream/75 font-light">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>

              {
}
              <div className="hidden lg:block">
                <div className="glass-card rounded-3xl p-10 grid lg:grid-cols-2 gap-12 items-center">

                  <div className="space-y-6">
                    <div>
                      <span
                        className="text-xs tracking-widest uppercase font-light"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <h3
                        className="text-4xl font-semibold text-cream mt-2"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-cream/55 font-light leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full font-light"
                          style={{
                            background: `${project.color}20`,
                            border: `1px solid ${project.color}40`,
                            color: "rgba(245,240,232,0.7)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>


                  <div className="space-y-6">
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      <ImageCarousel
                        images={project.images}
                        color={project.color}
                        category={project.category}
                        title={project.title}
                        showOverlays={false}
                        mobileHero={false}
                      />
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(45,27,78,0.4)" }}>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: `${project.color}30` }}
                      >
                        <TulipSVG variant="decorative" size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-cream/40 font-light">Client</p>
                        <p className="text-sm text-cream/80 font-light">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}