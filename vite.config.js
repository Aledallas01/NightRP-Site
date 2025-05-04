// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss(),
        autoprefixer(),
      ],
    },
  },
  server: { open: true },
});
