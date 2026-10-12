import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so assets resolve on GitHub Pages project sites
// (https://<user>.github.io/<repo>/) and on user sites.
export default defineConfig({
  plugins: [react()],
  base: './',
})
