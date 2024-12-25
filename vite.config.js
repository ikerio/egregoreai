import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/egregore-website/' if not using custom domain
  build: {
    outDir: 'dist',
  }
})