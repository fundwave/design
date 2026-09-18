import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [react(), tailwindcss(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown-vendor': ['react-markdown', 'marked', 'dompurify'],
          'utility-vendor': ['lucide-react', 'html2canvas-pro'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
