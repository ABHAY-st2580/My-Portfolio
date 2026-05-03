import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://my-portfolio-1-vqdv.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
})
