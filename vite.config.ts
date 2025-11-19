import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // This will be the base URL for GitHub Pages
  build: {
    outDir: 'dist'
  }
})