import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the built site in dist/ also works from a
  // sub-folder such as http://localhost/my_portfolio/dist/ (Laragon/Apache)
  base: './',
  server: {
    port: 5173,
    open: false,
  },
})
