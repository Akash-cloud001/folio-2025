/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			background: '#0a0a0a',
			foreground: '#fbfaf3',
			primary: '#ff535b',
			secondary: '#88E7C4',
			white: '#fbfaf3',
			black: '#0a0a0a',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}