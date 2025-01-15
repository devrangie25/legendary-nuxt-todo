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
      path: '~/components/atoms', // Auto-import all Atom components
      prefix: 'a',
    },
    {
      path: '~/components/molecules', // Auto-import all Molecule components
      prefix: 'm',
    },
    {
      path: '~/components/organisms', // Auto-import all Organism components
      prefix: 'o',
    },
  ],
  modules: ['@pinia/nuxt'],
  // alias: {
  //   pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  // },
})
