import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    open: true,
    origin: 'https://ironbeast.loca.lt',
    hmr: {
      protocol: 'wss',
      host: 'ironbeast.loca.lt',
      clientPort: 443
    },
    allowedHosts: ['.lhr.life', '.loca.lt', 'localhost', '127.0.0.1']
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    origin: 'https://ironbeast.loca.lt',
    allowedHosts: ['.lhr.life', '.loca.lt', 'localhost', '127.0.0.1']
  }
})
