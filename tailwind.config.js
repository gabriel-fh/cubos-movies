/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkmode: 'selector',
  theme: {
  	extend: {
  		colors: {
  			mauvea1: 'rgba(var(--mauve-a1))',
  			mauvea2: 'rgba(var(--mauve-a2))',
  			mauvea3: 'rgba(var(--mauve-a3))',
  			mauvea4: 'rgba(var(--mauve-a4))',
  			mauvea5: 'rgba(var(--mauve-a5))',
  			mauvea6: 'rgba(var(--mauve-a6))',
  			mauvea7: 'rgba(var(--mauve-a7))',
  			mauvea8: 'rgba(var(--mauve-a8))',
  			mauvea9: 'rgba(var(--mauve-a9))',
  			mauvea10: 'rgba(var(--mauve-a10))',
  			mauvea11: 'rgba(var(--mauve-a11))',
  			mauvea12: 'rgba(var(--mauve-a12))',
  			mauve1: 'rgba(var(--mauve-1))',
  			mauve2: 'rgba(var(--mauve-2))',
  			mauve3: 'rgba(var(--mauve-3))',
  			mauve4: 'rgba(var(--mauve-4))',
  			mauve5: 'rgba(var(--mauve-5))',
  			mauve6: 'rgba(var(--mauve-6))',
  			mauve7: 'rgba(var(--mauve-7))',
  			mauve8: 'rgba(var(--mauve-8))',
  			mauve9: 'rgba(var(--mauve-9))',
  			mauve10: 'rgba(var(--mauve-10))',
  			mauve11: 'rgba(var(--mauve-11))',
  			mauve12: 'rgba(var(--mauve-12))',
  			purplea1: 'rgba(var(--purple-a1))',
  			purplea2: 'rgba(var(--purple-a2))',
  			purplea3: 'rgba(var(--purple-a3))',
  			purplea4: 'rgba(var(--purple-a4))',
  			purplea5: 'rgba(var(--purple-a5))',
  			purplea6: 'rgba(var(--purple-a6))',
  			purplea7: 'rgba(var(--purple-a7))',
  			purplea8: 'rgba(var(--purple-a8))',
  			purplea9: 'rgba(var(--purple-a9))',
  			purplea10: 'rgba(var(--purple-a10))',
  			purplea11: 'rgba(var(--purple-a11))',
  			purplea12: 'rgba(var(--purple-a12))',
  			purple1: 'rgba(var(--purple-1))',
  			purple2: 'rgba(var(--purple-2))',
  			purple3: 'rgba(var(--purple-3))',
  			purple4: 'rgba(var(--purple-4))',
  			purple5: 'rgba(var(--purple-5))',
  			purple6: 'rgba(var(--purple-6))',
  			purple7: 'rgba(var(--purple-7))',
  			purple8: 'rgba(var(--purple-8))',
  			purple9: 'rgba(var(--purple-9))',
  			purple10: 'rgba(var(--purple-10))',
  			purple11: 'rgba(var(--purple-11))',
  			purple12: 'rgba(var(--purple-12))',
  			background: 'rgb(var(--mauve-1))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

