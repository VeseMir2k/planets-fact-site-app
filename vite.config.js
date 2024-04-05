import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/'
  };

  if (command !== 'serve') {
    config.base = '/planets-fact-site-app/';
  }

  return config;
});
