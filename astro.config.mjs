import { defineConfig } from 'astro/config';

// Sitio estático de una página. `astro build` genera dist/ listo para cualquier hosting.
export default defineConfig({
  output: 'static',
});
