"use client";

import { useEffect, useRef, useState } from "react";
import TulipSVG from "./TulipSVG";

const customSvgPaths: Record<string, string> = {
  "Hunter": "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm0 5a3 3 0 100 6 3 3 0 000-6zm-1-7h2v4h-2zm0 18h2v4h-2zM2 11h4v2H2zm16 0h4v2h-4z",
  "Jungle Scout": "M12 2C7.5 2 3 7 3 13c0 3.8 1.8 7 4.5 9 .3-3.5 1.5-6.5 3-8.5-.3 2.8-.2 5.8.5 8.5 2.8-2 4.5-5.2 4.5-9C15.5 7 13 2 12 2z",
  "Zik Analytics": "M3 18h4V9H3v9zm6.5 3h4V5h-4v16zm6.5-9h4v9h-4V12z",
  "Midjourney": "M12 3.5L5.5 19.5h13L12 3.5zm0 3.8l4.2 10.2H7.8L12 7.3zM3 21.5h18",
  "Wave Accounting": "M2 12c1.2-3.5 2.8-3.5 4 0s2.8 3.5 4 0 2.8-3.5 4 0 2.8 3.5 4 0",
  "Copy.AI": "M8 8H5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3m-6-8V5a2 2 0 012-2h9a2 2 0 012 2v9a2 2 0 01-2 2h-9a2 2 0 01-2-2z",
  "Fathom": "M12 2a10 10 0 100 20A10 10 0 0012 2zm-2 6.5l7 3.5-7 3.5V8.5z",
  "Fireflies": "M12 13a4 3 0 110 6 4 3 0 010-6zm0-8v4.5M8.5 7.5L6 5m9 2.5L17.5 5m-5.5-.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
  "Otter": "M12 3C8.1 3 5 6.1 5 10c0 2.2.9 4.1 2.4 5.5L6 21h12l-1.4-5.5C18.1 14.1 19 12.2 19 10c0-3.9-3.1-7-7-7zM9.5 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-2.5 4c1.7 0 3 .7 3 1.5S13.7 16 12 16s-3-.7-3-1.5 1.3-1.5 3-1.5z",
  "Mailmaestro": "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-8 9L4 7h16l-8 6zm-8 5V9l8 6 8-6v9H4zm15.5-13l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z",
  "Gamma": "M3 5h8l-4 7v7m10-14l-4 7",
  "InVideo AI": "M2 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8zm5 1.5v7l6-3.5-6-3.5zM2 6l18-2m-1 2l2-3",
  "LinkedIn": "M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm2 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5 11h3v7H5v-7zm5 0h3v1.2c.6-.9 1.6-1.5 2.8-1.5 2.2 0 3.7 1.5 3.7 4.3V18h-3v-2.7c0-1.1-.5-1.6-1.3-1.6s-1.5.6-1.5 1.7V18h-3v-7z",
  "Microsoft 365": "M2 3h9v9H2V3zm11 0h9v9h-9V3zM2 13h9v9H2v-9zm11 0h9v9h-9v-9z",
  "OneDrive": "M6.5 20a5 5 0 01-.5-9.95A7 7 0 0119 13h.5a4.5 4.5 0 010 9L6.5 20z",
  "Google Workspace": "M21 12h-8v2h5.6A6 6 0 1112 6a6 6 0 014.2 1.8L17.6 6.4A8 8 0 1020 12h1z",
  "Slack": "M8.5 14a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 013.5 14 2.5 2.5 0 016 11.5h2.5V14zm1.5 0a2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5v6a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 0110 20v-6zm2.5-8A2.5 2.5 0 0110 3.5 2.5 2.5 0 0112.5 1a2.5 2.5 0 012.5 2.5V6.5H12.5zm0 1.5A2.5 2.5 0 0115 5a2.5 2.5 0 012.5 2.5A2.5 2.5 0 0115 10H9.5M14 8.5a2.5 2.5 0 012.5-2.5A2.5 2.5 0 0119 8.5a2.5 2.5 0 01-2.5 2.5H14V8.5z",
  "Canva": "M12 2a10 10 0 100 20A10 10 0 0012 2zm3.5 6.2a6 6 0 00-7.3 9.6",
  "Adobe Creative Cloud": "M9.5 7a5.5 5.5 0 015 3.3A4.5 4.5 0 0119 14.5 4.5 4.5 0 0114.5 19h-9A4 4 0 012 15a4 4 0 013.8-4A5.5 5.5 0 019.5 7zM14 5a5 5 0 014.5 7.1",
  "FreshBooks": "M12 6.5C10 5 7.5 4.5 5 5v14c2.5-.5 5 0 7 1.5 2-1.5 4.5-2 7-1.5V5c-2.5-.5-5 0-7 1.5zM12 6.5V22",
  "ChatGPT": "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10zm-9-9l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z",
  "Superhuman": "M13 2L4.5 13h7.5L11 22l8.5-11H12L13 2z",
  "Taskade": "M9 11l3 3 8-8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z",
};

const tools = [
  { name: "HubSpot",             icon: "hubspot" },
  { name: "Hunter",              icon: null },
  { name: "LinkedIn",            icon: "linkedin" },
  { name: "Microsoft 365",       icon: "microsoftoffice" },
  { name: "OneDrive",            icon: "microsoftonedrive" },
  { name: "Google Workspace",    icon: "googleworkspace" },
  { name: "Dropbox",             icon: "dropbox" },
  { name: "Trello",              icon: "trello" },
  { name: "Slack",               icon: "slack" },
  { name: "Notion",              icon: "notion" },
  { name: "Airtable",            icon: "airtable" },
  { name: "TeamViewer",          icon: "teamviewer" },
  { name: "WordPress",           icon: "wordpress" },
  { name: "LastPass",            icon: "lastpass" },
  { name: "Jungle Scout",        icon: null },
  { name: "Zik Analytics",       icon: null },
  { name: "Canva",               icon: "canva" },
  { name: "Adobe Creative Cloud",icon: "adobecreativecloud" },
  { name: "Figma",               icon: "figma" },
  { name: "Midjourney",          icon: null },
  { name: "Xero",                icon: "xero" },
  { name: "QuickBooks",          icon: "quickbooks" },
  { name: "Zoho Books",          icon: "zoho" },
  { name: "FreshBooks",          icon: "freshbooks" },
  { name: "Wave Accounting",     icon: null },
  { name: "ChatGPT",             icon: "openai" },
  { name: "Gemini",              icon: "googlegemini" },
  { name: "Grammarly",           icon: "grammarly" },
  { name: "Copy.AI",             icon: null },
  { name: "Fathom",              icon: null },
  { name: "Fireflies",           icon: null },
  { name: "Otter",               icon: null },
  { name: "Mailmaestro",         icon: null },
  { name: "Superhuman",          icon: "superhuman" },
  { name: "Calendly",            icon: "calendly" },
  { name: "Taskade",             icon: "taskade" },
  { name: "Gamma",               icon: null },
  { name: "InVideo AI",          icon: null },
];

function CustomIcon({ name }: { name: string }) {
  const path = customSvgPaths[name];
  if (!path) return null;
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c5aeed"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, opacity: 0.85 }}
    >
      <path d={path} />
    </svg>
  );
}

function ToolChip({ tool }: { tool: { name: string; icon: string | null } }) {
  const [iconFailed, setIconFailed] = useState(false);
  const hasCustom = Boolean(customSvgPaths[tool.name]);

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-light"
      style={{
        background: "rgba(63,40,104,0.4)",
        border: "1px solid rgba(197,174,237,0.15)",
        color: "rgba(245,240,232,0.65)",
      }}
    >

      {tool.icon && !iconFailed && (
        <img
          src={`https://cdn.simpleicons.org/${tool.icon}/c5aeed`}
          alt=""
          width="12"
          height="12"
          style={{ opacity: 0.85, flexShrink: 0 }}
          onError={() => setIconFailed(true)}
        />
      )}

      {(!tool.icon || iconFailed) && hasCustom && (
        <CustomIcon name={tool.name} />
      )}
      {tool.name}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "#0d0518" }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6b4a9b 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal relative flex justify-center">
            <div className="relative w-[300px] sm:w-[340px] h-[420px]">
              <div
                className="w-full h-full rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 60%, #3f2868 100%)",
                  border: "1px solid rgba(197,174,237,0.15)",
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 60%, #3f2868 100%)" }} />
                  <img
                    src="/images/width_533.png"
                    alt="Judielle Villacrusis"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transform: "scale(1.2) translateX(8%) translateY(8%)", transformOrigin: "bottom center" }}
                  />
                </div>
                <svg className="absolute top-4 left-4 opacity-30" width="40" height="40" viewBox="0 0 40 40">
                  <path d="M4 36 L4 4 L36 4" stroke="#c5aeed" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-4 right-4 opacity-30" width="40" height="40" viewBox="0 0 40 40">
                  <path d="M36 4 L36 36 L4 36" stroke="#c8748a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <div className="absolute glass-card rounded-2xl p-4" style={{ width: "160px", bottom: "48px", right: "-18px" }}>
                <div className="flex items-center gap-2 mb-2">
                  <TulipSVG variant="decorative" size={20} />
                  <span className="text-xs text-cream/60 font-light">Certified VA</span>
                </div>
                <p className="text-xs text-cream/40">International VA Association Member</p>
              </div>

              <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 text-center" style={{ width: "110px" }}>
                <p className="text-3xl font-semibold text-gradient-tulip" style={{ fontFamily: "var(--font-cormorant)" }}>2+</p>
                <p className="text-xs text-cream/50 font-light">Years of<br />excellence</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="reveal flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8748a]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#d4a0bc] font-light">About Me</span>
              </div>
              <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-light text-cream leading-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
                Behind the{" "}
                <span className="text-gradient-tulip italic font-semibold">petals</span>
              </h2>
            </div>

            <div className="reveal space-y-4 text-cream/55 font-light leading-relaxed">
              <p>
                I'm Judielle Rovie Villacrusis, a passionate Virtual Assistant helping
                entrepreneurs, coaches, and small businesses thrive. My work goes beyond task completion, I become
                an extension of your team, anticipating needs before they arise.
              </p>
              <p>
                Just like a tulip pushes through winter to bloom with precision and grace, I believe in showing up
                consistently, beautifully, and with purpose. Every client deserves support that feels effortless.
              </p>
            </div>

            <div className="reveal flex items-center gap-0">
              {[
                { value: "120≈", label: "Completed Projects" },
                { value: "10≈", label: "Industries Served" },
                { value: "2≈", label: "Years Experience" },
              ].map((stat, i) => (
                <>
                  <div key={stat.label} className="space-y-1 px-3 sm:px-6 first:pl-0 min-w-0">
                    <p className="text-2xl sm:text-3xl font-semibold text-gradient-tulip" style={{ fontFamily: "var(--font-cormorant)" }}>{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-cream/40 tracking-wider uppercase leading-tight">{stat.label}</p>
                  </div>
                  {i < 2 && (
                    <div key={`divider-${i}`} className="flex flex-col items-center gap-1 px-1 opacity-40">
                      <div className="w-px h-3 bg-gradient-to-b from-transparent to-[#c8748a]" />
                      <svg width="14" height="20" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="30" y1="72" x2="30" y2="40" stroke="#6a9a5a" strokeWidth="2" strokeLinecap="round" />
                        <path d="M30 55 Q20 50 16 38 Q14 28 22 24 Q28 21 30 30" fill="#5a8a4a" />
                        <ellipse cx="30" cy="22" rx="12" ry="22" fill="url(#statBudGrad)" />
                        <ellipse cx="22" cy="25" rx="8" ry="18" fill="url(#statBudGrad2)" opacity="0.85" />
                        <ellipse cx="38" cy="25" rx="8" ry="18" fill="url(#statBudGrad3)" opacity="0.85" />
                        <defs>
                          <linearGradient id="statBudGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e89ab5" />
                            <stop offset="100%" stopColor="#9b5a7a" />
                          </linearGradient>
                          <linearGradient id="statBudGrad2" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#c5aeed" />
                            <stop offset="100%" stopColor="#6b4a9b" />
                          </linearGradient>
                          <linearGradient id="statBudGrad3" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c5aeed" />
                            <stop offset="100%" stopColor="#6b4a9b" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-px h-3 bg-gradient-to-t from-transparent to-[#a886e0]" />
                    </div>
                  )}
                </>
              ))}
            </div>


            <div className="reveal space-y-3">
              <p className="text-xs tracking-widest uppercase text-cream/40 font-light">Tools I Work With</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <ToolChip key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}