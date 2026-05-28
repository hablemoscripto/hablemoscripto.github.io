import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: [
            'favicon.png',
            'robots.txt',
            'images/og-cover-optimized.png',
            'icons/icon-192x192.png',
            'icons/icon-512x512.png',
          ],
          workbox: {
            // Precache only the app shell + fonts. Lesson images (~8 MB across 76 entries)
            // are served on demand via the /images/lessons/ runtimeCaching rule below —
            // precaching them all on install is wasteful for the LATAM mobile audience.
            globPatterns: ['**/*.{js,css,html,woff2,svg}'],
            maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-stylesheets',
                  expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
                },
              },
              {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-webfonts',
                  expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
              {
                urlPattern: /\/images\/lessons\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'lesson-images',
                  expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
                  cacheableResponse: { statuses: [0, 200] },
                },
              },
            ],
          },
          manifest: {
            name: 'Hablemos Cripto Academy',
            short_name: 'HCripto',
            description: 'Plataforma educativa de criptomonedas y Web3',
            theme_color: '#020617',
            background_color: '#020617',
            display: 'standalone',
            orientation: 'portrait-primary',
            start_url: '/',
            scope: '/',
            categories: ['education', 'finance'],
            lang: 'es',
            icons: [
              { src: 'icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
              { src: 'icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
              { src: 'icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
              { src: 'icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
              { src: 'icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
              { src: 'icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
              { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
              { src: 'icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
              { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
              { src: 'icons/maskable-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
              { src: 'icons/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
            ],
          },
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      publicDir: 'public',
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
              'vendor-ui': ['framer-motion', 'lucide-react'],
              'vendor-supabase': ['@supabase/supabase-js'],
            },
          },
        },
        cssCodeSplit: true,
        reportCompressedSize: true,
      },
    };
});
