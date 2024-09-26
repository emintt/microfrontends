import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';


// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://users.metropolia.fi/~thitng/microfrontends/host-starter/',
  plugins: [
    react(),
    // federation config
    federation({
      name: 'juutube',
      remotes: {
        // mediastore: 'https://users.metropolia.fi/~thitng/microfrontends/store-starter/assets/remoteEntry.js',
        // front_and_sidebar: 'https://users.metropolia.fi/~thitng/microfrontends/juutube-front-and-sidebar-starter/assets/remoteEntry.js',
        // profile: 'https://users.metropolia.fi/~thitng/microfrontends/profile/assets/remoteEntry.js',
        // topbar: 'https://users.metropolia.fi/~thitng/microfrontends/topbar/assets/remoteEntry.js',
        // player: 'https://users.metropolia.fi/~thitng/microfrontends/player/assets/remoteEntry.js',
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
        profile: 'http://localhost:3003/assets/remoteEntry.js',
        topbar: 'http://localhost:3007/assets/remoteEntry.js',
        player: 'http://localhost:3011/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext', minify: false, cssCodeSplit: false 
  },
});
