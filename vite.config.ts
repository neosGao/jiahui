import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      css: {
        additionalData: `@import "ant-design-vue/dist/reset.css";`,
      },
    },
  },
});
