import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://users.metropolia.fi/~thitng/microfrontends/player/',
  plugins: [
    react(),
    federation({
      name: 'player',
      filename: 'remoteEntry.js',
      exposes: {
        './Player': './src/components/player/VideoPlayer',
      },
      remotes: {
        // mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        mediastore: 'https://users.metropolia.fi/~thitng/microfrontends/store-starter/assets/remoteEntry.js',

      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3011, // Set the desired port here
  },
  preview: {
    port: 3011, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // target: ['chrome90', 'firefox89', 'safari15', 'es2022']
    target: 'esnext', minify: false, cssCodeSplit: false 
  },  
});
