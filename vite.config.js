import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import config from './src/config'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  assetsDir: 'assets',
  base: `/${config.repo}/`,
  server: {
    cors: true,
    proxy: {
      '^/api/.*': {
        target: `https://${config.apiDomain}`,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    },
  },
})
