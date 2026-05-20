"use client";

interface TulipSVGProps {
  className?: string;
  size?: number;
  variant?: "full" | "bud" | "silhouette" | "decorative";
  animated?: boolean;
}

export default function TulipSVG({
  className = "",
  size = 200,
  variant = "full",
  animated = false,
}: TulipSVGProps) {
  const animClass = animated ? "animate-[floatSlow_8s_ease-in-out_infinite]" : "";

  if (variant === "silhouette") {
    return (
      <svg
        width={size}
        height={size * 1.4}
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animClass}`}
      >
        <path d="M50 130 L50 75" stroke="url(#stemGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 100 Q35 90 28 70 Q25 55 32 45 Q38 38 50 42" fill="url(#leafGrad)" opacity="0.8" />
        <path d="M50 90 Q65 80 72 60 Q75 45 68 35 Q62 28 50 32" fill="url(#leafGrad)" opacity="0.7" />
        <path d="M50 42 Q38 30 35 15 Q33 5 40 2 Q46 0 50 8 Q54 0 60 2 Q67 5 65 15 Q62 30 50 42Z" fill="url(#petalGrad1)" />
        <path d="M50 42 Q35 35 28 22 Q24 12 30 6 Q36 1 42 8 Q46 14 50 22" fill="url(#petalGrad2)" opacity="0.9" />
        <path d="M50 42 Q65 35 72 22 Q76 12 70 6 Q64 1 58 8 Q54 14 50 22" fill="url(#petalGrad3)" opacity="0.9" />
        <defs>
          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a5c2e" />
            <stop offset="100%" stopColor="#4a7a3a" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5a8a4a" />
            <stop offset="100%" stopColor="#3a6a2a" />
          </linearGradient>
          <linearGradient id="petalGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e89ab5" />
            <stop offset="100%" stopColor="#c8748a" />
          </linearGradient>
          <linearGradient id="petalGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a886e0" />
            <stop offset="100%" stopColor="#7a5cbf" />
          </linearGradient>
          <linearGradient id="petalGrad3" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a886e0" />
            <stop offset="100%" stopColor="#7a5cbf" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "bud") {
    return (
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 60 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animClass}`}
      >
        <line x1="30" y1="72" x2="30" y2="40" stroke="#6a9a5a" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 55 Q20 50 16 38 Q14 28 22 24 Q28 21 30 30" fill="#5a8a4a" opacity="0.8" />
        <ellipse cx="30" cy="22" rx="12" ry="22" fill="url(#budGrad)" />
        <ellipse cx="22" cy="25" rx="8" ry="18" fill="url(#budGrad2)" opacity="0.85" />
        <ellipse cx="38" cy="25" rx="8" ry="18" fill="url(#budGrad3)" opacity="0.85" />
        <defs>
          <linearGradient id="budGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e89ab5" />
            <stop offset="100%" stopColor="#9b5a7a" />
          </linearGradient>
          <linearGradient id="budGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5aeed" />
            <stop offset="100%" stopColor="#6b4a9b" />
          </linearGradient>
          <linearGradient id="budGrad3" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5aeed" />
            <stop offset="100%" stopColor="#6b4a9b" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "decorative") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animClass}`}
      >
        <circle cx="40" cy="40" r="38" stroke="url(#ringGrad)" strokeWidth="0.5" opacity="0.4" />
        <line x1="40" y1="70" x2="40" y2="46" stroke="#6a9a5a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 58 Q32 54 30 45 Q29 38 34 36 Q38 34 40 42" fill="#5a8a4a" opacity="0.7" />
        <path d="M40 55 Q48 51 50 42 Q51 35 46 33 Q42 31 40 39" fill="#5a8a4a" opacity="0.6" />
        <path d="M40 46 Q32 40 30 30 Q28 22 34 18 Q38 15 40 24 Q42 15 46 18 Q52 22 50 30 Q48 40 40 46Z" fill="url(#decoPetal1)" />
        <path d="M40 46 Q28 42 24 33 Q21 25 27 20 Q33 16 38 26" fill="url(#decoPetal2)" opacity="0.8" />
        <path d="M40 46 Q52 42 56 33 Q59 25 53 20 Q47 16 42 26" fill="url(#decoPetal3)" opacity="0.8" />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8748a" />
            <stop offset="100%" stopColor="#a886e0" />
          </linearGradient>
          <linearGradient id="decoPetal1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e89ab5" />
            <stop offset="100%" stopColor="#c8748a" />
          </linearGradient>
          <linearGradient id="decoPetal2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c5aeed" />
            <stop offset="100%" stopColor="#8b5fcf" />
          </linearGradient>
          <linearGradient id="decoPetal3" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#c5aeed" />
            <stop offset="100%" stopColor="#8b5fcf" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 300 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animClass}`}
    >
 <path d="M150 440 Q148 380 150 300" stroke="url(#fullStemGrad)" strokeWidth="6" strokeLinecap="round" />
 <path d="M150 350 Q110 330 90 295 Q75 265 88 248 Q100 234 118 248 Q136 262 150 300" fill="url(#fullLeaf1)" opacity="0.85" />
 <path d="M150 320 Q190 300 210 265 Q225 235 212 218 Q200 204 182 218 Q164 232 150 270" fill="url(#fullLeaf2)" opacity="0.75" />
 <path d="M150 300 Q120 260 110 200 Q100 148 112 108 Q124 72 150 60 Q176 72 188 108 Q200 148 190 200 Q180 260 150 300Z" fill="url(#fullPetal1)" />
 <path d="M150 300 Q108 278 88 230 Q72 188 80 148 Q90 112 114 100 Q128 94 140 110 Q150 124 150 160" fill="url(#fullPetal2)" opacity="0.9" />
 <path d="M150 300 Q192 278 212 230 Q228 188 220 148 Q210 112 186 100 Q172 94 160 110 Q150 124 150 160" fill="url(#fullPetal3)" opacity="0.9" />
 <path d="M150 280 Q100 265 76 215 Q58 172 68 130 Q78 92 106 86 Q120 82 132 100" fill="url(#fullPetal4)" opacity="0.6" />
 <path d="M150 280 Q200 265 224 215 Q242 172 232 130 Q222 92 194 86 Q180 82 168 100" fill="url(#fullPetal5)" opacity="0.6" />
 <path d="M150 260 Q140 220 138 180 Q136 148 144 120" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" />
 <path d="M150 260 Q162 218 164 176 Q166 144 156 116" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="150" cy="72" rx="18" ry="14" fill="url(#tipGrad)" opacity="0.5" /> 
      <defs>
        <linearGradient id="fullStemGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a9a5a" />
          <stop offset="100%" stopColor="#4a7a3a" />
        </linearGradient>
        <linearGradient id="fullLeaf1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6aaa5a" />
          <stop offset="100%" stopColor="#3a7a2a" />
        </linearGradient>
        <linearGradient id="fullLeaf2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6aaa5a" />
          <stop offset="100%" stopColor="#3a7a2a" />
        </linearGradient>
        <linearGradient id="fullPetal1" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f0c0d5" />
          <stop offset="40%" stopColor="#e89ab5" />
          <stop offset="100%" stopColor="#c8748a" />
        </linearGradient>
        <linearGradient id="fullPetal2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ddd0f5" />
          <stop offset="50%" stopColor="#a886e0" />
          <stop offset="100%" stopColor="#6b4a9b" />
        </linearGradient>
        <linearGradient id="fullPetal3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ddd0f5" />
          <stop offset="50%" stopColor="#a886e0" />
          <stop offset="100%" stopColor="#6b4a9b" />
        </linearGradient>
        <linearGradient id="fullPetal4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c5aeed" />
          <stop offset="100%" stopColor="#54387f" />
        </linearGradient>
        <linearGradient id="fullPetal5" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5aeed" />
          <stop offset="100%" stopColor="#54387f" />
        </linearGradient>
        <radialGradient id="tipGrad">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e89ab5" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
