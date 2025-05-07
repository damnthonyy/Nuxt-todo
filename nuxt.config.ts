import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  vite:{
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/css/main.css"],
})
