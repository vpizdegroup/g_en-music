import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['gen-app-67i6.onrender.com', '.onrender.com', 'localhost', '127.0.0.1', '0.0.0.0']
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['gen-app-67i6.onrender.com', '.onrender.com', 'localhost', '127.0.0.1', '0.0.0.0']
  },
  build: {
    outDir: 'dist'
  }
})