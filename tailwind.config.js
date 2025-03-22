/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              primary: "#1A1A1A", // Deep charcoal for a bold, elegant base (e.g., text, headers)
              secondary: "#F9EFDB", // Soft cream for backgrounds, evoking parchment or paper
              accent: "#8B5A2B", // Rich brown for highlights, inspired by ink or wood tones
              muted: "#4A4A4A", // Soft gray for subtle text or borders
              highlight: "#D4A017", // Warm gold for premium accents (e.g., buttons, links)
              ink: "#0F2C3E", // Deep teal-blue for a modern calligraphy ink vibe
          },
      },
  },
  plugins: [],
};