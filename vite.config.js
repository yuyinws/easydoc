import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [vue(),VitePWA()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  assetsDir: 'assets',
  base:'/easydoc/'
})
