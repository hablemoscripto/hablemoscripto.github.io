/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#fff8e1',
                    100: '#ffecb3',
                    200: '#ffe082',
                    300: '#ffd54f',
                    400: '#ffca28',
                    500: '#ffc107', // Main Amber
                    600: '#ffb300',
                    700: '#ffa000',
                    800: '#ff8f00',
                    900: '#ff6f00',
                },
                dark: {
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
