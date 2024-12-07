import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/socialMedia/",
  optimizeDeps: {
    include: ['react-icons'],
  },
})
