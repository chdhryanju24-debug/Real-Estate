import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  sever: {
    allowedHosts: [react()],
    host: '0.0.0.0'
  },
})
