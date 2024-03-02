/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		borderRadius: {
		  'borde': '50% 0% 25% 0%'
		},
		screens: {
		  'pantalla': '1300px',
		},
	  },
	},
	variants: {},
	plugins: [],
  }
  

