// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-12-31',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	routeRules: {
		'/': { redirect: '/auth/login' },
	},

	ssr: true,
	components: [
		'~/components',
		{
			path: '~/components/atoms',
			prefix: 'a',
		},
		{
			path: '~/components/molecules',
			prefix: 'm',
		},
		{
			path: '~/components/organisms',
			prefix: 'o',
		},
	],
	modules: ['@pinia/nuxt', 'dayjs-nuxt'],
	runtimeConfig: {
		// THESE VARIABLES ARE MEANT TO BE USED IN THE SERVER ONLY
		APP_API_URL: process.env.APP_API_URL,
		// PUBLIC IS FOR VARIABLES THAT SHOULD BE USED IN THE UI
		public: {
			APP_URL: process.env.APP_URL,
			APP_ENV: process.env.APP_ENV,
		},
	},
	/**
   * Commented for now, since this has been causing an error for building the app
   * alias: {
      pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
   */
})
