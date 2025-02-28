import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		screens: {
  			'2xl': '1920px',
  			'xl': '1728px',
  			'lg': '1440px',
  			'md': '1024px',
  			'sm': '820px',
  			'xs': '420px',
  		}
  	},
  	extend: {
  		colors: {
  			green: {
					DEFAULT: '57A04C',
  				'100': '#DFF1DC',
  				'200': '#A9C8A2',
  				'300': '#4AD769',
  			},
  			light: {
					DEFAULT: '#FFFFFF',
  			},
  			beige: {
					DEFAULT: '#D6CFC1',
					'100': '#F0EEEA',
  			},
  			gray: {
					DEFAULT: '#D9D9D9',
  			},
  			dark: {
					DEFAULT: '#0E1318',
  			},
  			background: 'hsl(var(--background))',
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
                    ...fontFamily.sans
                ]
  		},
  		backgroundImage: {
  			appointments: 'url(/assets/images/appointments-bg.png)',
  			pending: 'url(/assets/images/pending-bg.png)',
  			cancelled: 'url(/assets/images/cancelled-bg.png)'
  		},
  		// keyframes: {
  		// 	'accordion-down': {
  		// 		from: {
  		// 			height: '0'
  		// 		},
  		// 		to: {
  		// 			height: 'var(--radix-accordion-content-height)'
  		// 		}
  		// 	},
  		// 	'accordion-up': {
  		// 		from: {
  		// 			height: 'var(--radix-accordion-content-height)'
  		// 		},
  		// 		to: {
  		// 			height: '0'
  		// 		}
  		// 	},
  		// 	'caret-blink': {
  		// 		'0%,70%,100%': {
  		// 			opacity: '1'
  		// 		},
  		// 		'20%,50%': {
  		// 			opacity: '0'
  		// 		}
  		// 	}
  		// },
  		// animation: {
  		// 	'accordion-down': 'accordion-down 0.2s ease-out',
  		// 	'accordion-up': 'accordion-up 0.2s ease-out',
  		// 	'caret-blink': 'caret-blink 1.25s ease-out infinite'
  		// },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xs: 'calc(var(--radius) - 6px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;