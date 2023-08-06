/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  plugins: [handlebars()]
});
