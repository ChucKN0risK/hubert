/// <reference types='vitest' />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const scssPaths: Array<string> = [
  './src/assets/styles/01-utils/variables.scss',
  './src/assets/styles/01-utils/mixins.scss',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssPaths.reduce((acc, scssPath) => {
          const pathToImport = path.resolve(__dirname, scssPath);
          if (acc) {
            return `${acc} @use '${pathToImport}'as *;`;
          }
          return `@use '${pathToImport}' as *;`;
        }, ''),
      },
    },
  },
});
