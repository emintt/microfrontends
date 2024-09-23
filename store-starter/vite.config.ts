import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add the federation configuration
    // name: mediastore
    // exposes: contextHooks, MediaContext, UserContext, apiHooks
    // shared: react, react-dom, react-router-dom
    federation({
      name: 'mediastore',
      filename: 'remoteEntry.js',
      exposes: {
        //syntax: näky ulos päin: kansiossa näky
        './contextHooks': './src/hooks/contextHooks',
        './MediaContext': './src/contexts/MediaContext',
        './UserContext': './src/contexts/UserContext',
        './apiHooks': './src/hooks/apiHooks',
      },
      shared: ['react', 'react-dom', 'react-router-dom'], // katso dependencies ehkä
    }),
  ],
  server: {
    port: 3001, // Set the desired port here
  },
  preview: {
    port: 3001, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
