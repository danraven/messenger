import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@messenger': path.resolve(import.meta.dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
