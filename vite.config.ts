import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '/@views/': path.resolve(__dirname, './src/views'),
      '/@components/': path.resolve(__dirname, './src/components'),
      '/@utils/': path.resolve(__dirname, './src/utils'),
      '@api/': path.resolve(__dirname, './src/api')
    }
  },
  server: {
    port: 4000,
    open: true,
    proxy: {
      './api': 'http://123.56.85.24:5000'//代理网址
    },
    cors: true
  }
})
