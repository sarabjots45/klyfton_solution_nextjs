import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1E3A8A',
					light: '#2563EB',
					dark: '#1E40AF',
				},
				secondary: {
					DEFAULT: '#D1D5DB',
					light: '#E5E7EB',
					dark: '#9CA3AF',
				},
				accent: {
					DEFAULT: '#06B6D4',
					light: '#22D3EE',
					dark: '#0284C7',
				},
				neutral: '#F9FAFB',
			},
			fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-gentle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite'
			},
			backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-blue': 'linear-gradient(90deg, #42C6EA 0%, #2A7DE1 100%)',
                'gradient-blue-vertical': 'linear-gradient(180deg, #42C6EA 0%, #2A7DE1 100%)',
                'hero-pattern': 'url("/public/e-uploads/2f1b365d-c75e-43b7-a6aa-042297f454e5.png"), linear-gradient(109.6deg, rgba(223,234,247,0.1) 11.2%, rgba(244,248,252,0.1) 91.1%)'
            },
			boxShadow: {
                glass: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
