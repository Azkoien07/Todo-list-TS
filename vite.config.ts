import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteLogger from './vite-logger-plugin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteLogger()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  } 
})
