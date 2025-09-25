import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Enable readable class names for styled-components in DevTools
const reactPlugin = react({
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
          fileName: true,
          // keep the component's filename in class names for easier debugging
          meaninglessFileNames: [],
        },
      ],
    ],
  },
})

// Improve HMR reliability on Windows and network drives by enabling polling
export default defineConfig({
  plugins: [reactPlugin],
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
