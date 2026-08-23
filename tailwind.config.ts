import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        /* Breakpoints the landing design switches layout at */
        pipe: "861px", // hero pipeline: horizontal rails -> vertical rails
        nav: "901px", // desktop nav -> burger
        bento: "1040px", // integrations bento: wide tile spans 2 columns
      },
      colors: {
        ink: {
          900: "#111820",
          800: "#1d2530",
          700: "#3d4a5c",
          600: "#4a5666",
          500: "#627084",
          400: "#8b95a5",
          300: "#b9c2ce",
          200: "#9ca3af",
        },
        line: {
          DEFAULT: "#d9e3f0",
          soft: "#e0e5eb",
          dashed: "#b9c6d8",
        },
        surface: {
          DEFAULT: "#f7f9fb",
          alt: "#f3f5f6",
          tint: "#eef5ff",
        },
        brand: {
          DEFAULT: "#055ed1",
          light: "#1a75e1",
          pale: "#6fb9f7",
        },
        positive: {
          DEFAULT: "#16a249",
          bright: "#4ade80",
          deep: "#15803d",
        },
        warn: {
          DEFAULT: "#d97706",
          bright: "#fbbf24",
        },
        night: {
          DEFAULT: "#0b1119",
          deep: "#080d14",
        },
      },
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        /* Fluid type ramp lifted verbatim from the design */
        display: ["clamp(38px,5.6vw,64px)", { lineHeight: "1.02", letterSpacing: "-.045em" }],
        h2: ["clamp(30px,3.6vw,46px)", { lineHeight: "1.08", letterSpacing: "-.035em" }],
        "h2-cta": ["clamp(32px,4.4vw,54px)", { lineHeight: "1.04", letterSpacing: "-.04em" }],
        "h3-bento": ["clamp(21px,2.3vw,28px)", { lineHeight: "1.15", letterSpacing: "-.02em" }],
        "lead-hero": ["clamp(15.5px,1.4vw,17.5px)", { lineHeight: "1.62" }],
        lead: ["clamp(15px,1.4vw,16.5px)", { lineHeight: "1.62" }],
        "lead-cta": ["clamp(15px,1.5vw,17px)", { lineHeight: "1.6" }],
        stat: ["clamp(38px,4.6vw,58px)", { lineHeight: "1", letterSpacing: "-.045em" }],
        "stat-suffix": ["clamp(20px,2.4vw,28px)", { letterSpacing: "-.03em" }],
        metric: ["clamp(24px,2.6vw,32px)"],
        "metric-lg": ["clamp(30px,3.4vw,42px)"],
        kpi: ["clamp(20px,2.2vw,26px)"],
        "hero-kpi": ["clamp(28px,3vw,36px)"],
      },
      maxWidth: {
        shell: "1360px",
      },
      spacing: {
        "section-y": "clamp(64px,8vw,120px)",
        "section-x": "clamp(20px,4vw,64px)",
        "section-y-sm": "clamp(56px,7vw,104px)",
      },
      keyframes: {

        dfDrift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%,-4%,0) scale(1.08)" },
        },
        dfRailF: {
          "0%": { left: "-6px", opacity: "0" },
          "12%": { opacity: "1" },
          "86%": { opacity: "1" },
          "100%": { left: "calc(100% - 6px)", opacity: "0" },
        },
        dfRailB: {
          "0%": { left: "calc(100% - 6px)", opacity: "0" },
          "12%": { opacity: "1" },
          "86%": { opacity: "1" },
          "100%": { left: "-6px", opacity: "0" },
        },
        dfRailDown: {
          "0%": { top: "-6px", opacity: "0" },
          "12%": { opacity: "1" },
          "86%": { opacity: "1" },
          "100%": { top: "calc(100% - 6px)", opacity: "0" },
        },
        dfRailUp: {
          "0%": { top: "calc(100% - 6px)", opacity: "0" },
          "12%": { opacity: "1" },
          "86%": { opacity: "1" },
          "100%": { top: "-6px", opacity: "0" },
        },
        dfPulse: {
          "0%,100%": { opacity: ".3", transform: "scale(1)" },
          "50%": { opacity: ".85", transform: "scale(1.08)" },
        },
        dfGlow: {
          "0%,100%": { opacity: ".45" },
          "50%": { opacity: "1" },
        },
        dfFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        dfFloatB: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        dfMarquee: {
          to: { transform: "translateX(-50%)" },
        },
        dfDrawIn: {
          to: { strokeDashoffset: "0" },
        },
        dfBlink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        dfRise: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dfTyping: {
          "0%,80%,100%": { opacity: ".25", transform: "translateY(0)" },
          "40%": { opacity: "1", transform: "translateY(-3px)" },
        },
        dfSweep: {
          "0%": { transform: "translateX(-110%)" },
          "55%,100%": { transform: "translateX(210%)" },
        },
      },
      animation: {

        "df-drift": "dfDrift 20s ease-in-out infinite",
        "df-drift-slow": "dfDrift 22s ease-in-out infinite",
        "df-pulse": "dfPulse 2s ease-in-out infinite",
        "df-pulse-slow": "dfPulse 2.4s ease-in-out infinite",
        "df-glow": "dfGlow 1.8s ease-in-out infinite",
        "df-float": "dfFloat 6s ease-in-out infinite",
        "df-float-b": "dfFloatB 7.5s ease-in-out infinite",
        "df-marquee": "dfMarquee 28s linear infinite",
        "df-draw-in": "dfDrawIn 2.2s ease-out .4s forwards",
        "df-blink": "dfBlink 1.1s step-end infinite",
        "df-rise": "dfRise .9s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
