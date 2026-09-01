/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-2": "#1A1A1A",
        "ink-3": "#2A2A2A",
        lime: "#D9FF3F",
        "lime-strong": "#C8EE00",
        "lime-dark": "#A8C900",
        "lime-soft": "#F0FFB8",
        "lime-faint": "#F6FFDA",
        paper: "#FFFFFF",
        "paper-soft": "#F7F7F5",
        "paper-warm": "#FBFBF8",
        muted: "#5A5A5A",
        "muted-2": "#8A8A8A",
        "muted-3": "#B0B0B0",
        line: "#E6E6E6",
        "line-2": "#D8D8D8",
        "line-dark": "#2E2E2E",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        "card-lg": "24px",
      },
      boxShadow: {
        card: "0 12px 40px rgba(10,10,10,.08)",
        "card-soft": "0 8px 24px rgba(10,10,10,.06)",
        "lime": "0 12px 30px rgba(217,255,63,.25)",
      },
    },
  },
  plugins: [],
};
