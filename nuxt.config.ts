// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/css/fonts/fonts.css"],
  modules: ["@nuxt/image", "nuxt-simple-sitemap"],
  ssr: false,
  app: {
    head: {
      title: "Creation",
    },
    pageTransition: false,
    layoutTransition: false,
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://www.creationfurnishings.com/",
      NUXT_API_KEY: process.env.NUXT_API_KEY,
      NUXT_AUTH_DOMAIN: process.env.NUXT_AUTH_DOMAIN,
      NUXT_PROJECT_ID: process.env.NUXT_PROJECT_ID,
      NUXT_STORAGE_BUCKET: process.env.NUXT_STORAGE_BUCKET,
      NUXT_MESSAGING_SENDER_ID: process.env.NUXT_MESSAGING_SENDER_ID,
      NUXT_APP_ID: process.env.NUXT_APP_ID,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    "~/plugins/firebase.client.js",
    "~/plugins/pinia.js",
    "~/plugins/google-analytics.js",
  ],
});
