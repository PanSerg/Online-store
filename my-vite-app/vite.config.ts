import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Improve HMR reliability on Windows and network drives by enabling polling
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use polling for file changes; increase interval if needed
      usePolling: true,
      interval: 100,
    },
    hmr: {
      overlay: true,
    },
  },
})
