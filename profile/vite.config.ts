import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: 'https://users.metropolia.fi/~thitng/microfrontends/profile/',
  plugins: [
    react(),
    federation({
      name: 'profile',
      filename: 'remoteEntry.js',
      remotes: {
        // mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        // front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
        mediastore: 'https://users.metropolia.fi/~thitng/microfrontends/store-starter/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~thitng/microfrontends/juutube-front-and-sidebar-starter/assets/remoteEntry.js',

      },
      exposes: {
        './Profile': './src/components/profile/Profile',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3003, // Set the desired port here
  },
  preview: {
    port: 3003, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext', minify: false, cssCodeSplit: false 
  },
});
