import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          canvas: "#091018",
          surface: "#101922",
          panel: "#152130",
          inset: "#0D1520",
        },
        text: {
          primary: "#F2F6FB",
          secondary: "#B2BECC",
          tertiary: "#8491A3",
        },
        accent: {
          DEFAULT: "#8FB5E2",
          strong: "#BCD5F2",
          subtle: "#132233",
        },
        border: {
          DEFAULT: "#2A394C",
          muted: "#1D2A38",
        },
        success: "#8BB997",
        warning: "#D2B77B",
      },
      boxShadow: {
        panel: "0 14px 34px rgba(2, 8, 20, 0.18)",
      },
      maxWidth: {
        page: "78rem",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(143, 181, 226, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 181, 226, 0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
    },
  },
};

export default config;
