import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dolinin2021.github.io/use_effect_ra/',
  plugins: [react()],
})
