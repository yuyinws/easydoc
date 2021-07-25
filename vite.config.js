import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import config from './src/config'
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: 'development',
      base: `/${config.repo}/`,
      registerType: process.env.CLAIMS === 'true' ? 'autoUpdate' : undefined,
      includeAssets: ['favicon.svg'], // <== don't add slash, for testing
      manifest: {
        name: 'PWA Router',
        short_name: 'PWA Router',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  assetsDir: 'assets',
  base: `/${config.repo}/`,
})
