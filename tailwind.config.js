module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", surface: "var(--surface)", ink: "var(--ink)", muted: "var(--muted)", line: "var(--line)", accent: "var(--accent)", "accent-ink": "var(--accent-ink)", ok: "var(--ok)" },
      fontFamily: { display: ["var(--font-sora)", "system-ui", "sans-serif"], sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
