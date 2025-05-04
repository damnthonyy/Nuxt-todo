import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
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
