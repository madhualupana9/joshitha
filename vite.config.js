import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    open: true,
    strictPort: false, // Automatically try next port if 3000 is busy
  }
})

