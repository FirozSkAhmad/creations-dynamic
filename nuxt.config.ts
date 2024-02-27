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
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
