import type { Config } from "tailwindcss";

const config: Config = {
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
                minerva: {
                    void: "#020617",
                    gold: "#D4AF37",
                    cyan: "#22D3EE",
                    white: "#F8FAFC",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-cinzel)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                'minerva-sm': '0.5rem',
                'minerva-md': '1rem',
                'minerva-lg': '1.5rem',
                'minerva-xl': '2rem',
            },
            transitionDuration: {
                'minerva-fast': '150ms',
                'minerva-base': '300ms',
                'minerva-slow': '500ms',
            },
            transitionTimingFunction: {
                'minerva-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'minerva-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            boxShadow: {
                'gold-glow': '0 0 30px -5px rgba(212, 175, 55, 0.4)',
                'gold-glow-lg': '0 0 60px -10px rgba(212, 175, 55, 0.5)',
                'cyan-glow': '0 0 30px -5px rgba(34, 211, 238, 0.4)',
                'cyan-glow-lg': '0 0 60px -10px rgba(34, 211, 238, 0.5)',
            },
        },
    },
    plugins: [],
};
export default config;
