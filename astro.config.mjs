import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: '/remotive-jobs/',
  integrations: [svelte()],
  build: { assets: 'assets' },
  image: {
    domains: ['remotive.com'],
    remotePatterns: [{ protocol: 'https:' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
