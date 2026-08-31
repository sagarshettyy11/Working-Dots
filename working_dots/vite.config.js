import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: [
      'amino-atrocious-granny.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok-free.app',
      '.ngrok.io',
      '.loca.lt',
      'localhost',
      '127.0.0.1',
    ],
    cors: true,
    hmr: {
      clientPort: 443, // Enables seamless HMR over HTTPS ngrok tunnel
    },
  },
  preview: {
    host: true,
    allowedHosts: [
      'amino-atrocious-granny.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok-free.app',
      '.ngrok.io',
      '.loca.lt',
      'localhost',
      '127.0.0.1',
    ],
    cors: true,
  },
})
