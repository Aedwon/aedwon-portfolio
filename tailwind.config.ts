import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                "accent-secondary": "var(--accent-secondary)", // Mapped for secondary backgrounds/elements
                border: "var(--border-color)",
            },
            borderRadius: {
                theme: "var(--radius)",
            },
            borderWidth: {
                theme: "var(--border-width)",
            },
            boxShadow: {
                theme: "var(--shadow)",
            },
            fontFamily: {
                theme: "var(--font-main)",
            },
        },
    },
    plugins: [],
};
export default config;
