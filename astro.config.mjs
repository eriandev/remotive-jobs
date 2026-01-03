import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: '/remotive-jobs/',
  integrations: [react()],
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
  },
})
