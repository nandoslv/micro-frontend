import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    fs: {
      allow: ['dist'], // Serve os arquivos de tipos da pasta dist
    }
  }
});