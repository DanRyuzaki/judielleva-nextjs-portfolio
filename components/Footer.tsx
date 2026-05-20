"use client";
import TulipSVG from "./TulipSVG";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "CRM & Client Operations", href: "#services" },
    { label: "Bookkeeping & Financial Administration", href: "#services" },
    { label: "Lead Generation & Data Analytics", href: "#services" },
    { label: "Social Media Management", href: "#services" },
    { label: "Notion Architecture & Digital Workspaces", href: "#services" },
    { label: "Graphic Design & Creative Asset Creation", href: "#services" },
  ],
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_PROFILE" },
    { label: "Facebook", href: "https://www.facebook.com/YOUR_PROFILE" },
    { label: "OnlineJobs.ph", href: "https://www.onlinejobs.ph/jobseekers/info/YOUR_ID" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10"
      style={{ background: "#07020f", borderTop: "1px solid rgba(197,174,237,0.08)" }}
    >
      <div className="absolute -bottom-8 right-0 opacity-5 pointer-events-none">
        <TulipSVG variant="full" size={400} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <TulipSVG variant="decorative" size={32} />
              <span className="text-xl font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>
                <span className="text-gradient-tulip">Judielle</span>
                <span className="text-cream/80"> Villacrusis</span>
              </span>
            </div>
            <p className="text-cream/35 text-sm font-light leading-relaxed max-w-xs">
              Premium virtual assistant services for entrepreneurs who are ready to grow with grace and intention.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-xs text-cream/30 font-light">Available for new clients</span>
            </div>
          </div>

          {}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-5">
              <h4 className="text-xs tracking-widest uppercase text-cream/40 font-light">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-cream/40 hover:text-cream/80 font-light transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(197,174,237,0.15)] to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/25 font-light">
            © {new Date().getFullYear()} Judielle Villacrusis, VA. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <TulipSVG key={i} variant="decorative" size={16} className={`opacity-${20 + i * 10}`} />
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}