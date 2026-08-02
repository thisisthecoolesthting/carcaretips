import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
        },
        navy: {
          DEFAULT: "#1E40AF",
          600: "#1E40AF",
          700: "#334155",
        },
        terracotta: {
          400: "#93C5FD",
          500: "#0F172A",
          600: "#020617",
        },
        primary: { DEFAULT: "#1E40AF" },
        accent: { DEFAULT: "#0F172A" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0B1120" },
        ink: {
          900: "#0F172A",
          700: "#334155",
          500: "#64748B",
        },
      },
      maxWidth: {
        prose: "68ch",
        site: "72rem",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#334155" } },
      },
      fontFamily: {
        display: ["Barlow Condensed", "Georgia", "serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
        body: ["Barlow", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
