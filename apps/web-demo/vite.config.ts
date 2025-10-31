import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@starscape/tokens': path.resolve(__dirname, '../../packages/tokens'),
      '@starscape/tailwind-preset': path.resolve(__dirname, '../../packages/tailwind-preset'),
    },
  },
})
