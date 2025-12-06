/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        homeBG: "#9EA4AE",
        backgroundMain: "var(--background-main)",
        backgroundSecondary: "var(--background-secondary)",
      },
      fontFamily: {
        oxanium: ['Oxanium', 'Helvetica', 'sans-serif'],
        oswald: ['Oswald', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        greycliff: ['greycliff-cf', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
