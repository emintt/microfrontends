import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    // federation config, name: front_and_sidebar,
    // expose Front, Sidebar, and ThumbCarousel,
    // shared: react, react-dom, react-router-dom
    // federation({
    //   name: 'front_and_sidebar',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Front': './src/components/front/Front',
    //     './Sidebar': './src/components/sidebar/Sidebar',
    //     './ThumbCarousel': './src/components/thumb-carousel/ThumbCarousel',
    //   },
    //   shared: ['react', 'react-dom', 'react-router-dom'],
    // }),
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
    target: 'esnext',
  },
});
