import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' 被设置为指向 'src' 目录
    },
  },
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      css: {
        additionalData: `@import "ant-design-vue/dist/reset.css";`,
      },
    },
  },
});
