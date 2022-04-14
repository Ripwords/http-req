import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue'
      ]
    }),
    Icons({
      autoInstall: true
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [
        NaiveUiResolver()
      ]
    }),
    WindiCSS(),
    VitePWA({
      base: '/',
      srcDir: 'src',
      manifest: {
        name: "http-req",
        short_name: "http-req",
        description: "HTTP Request Visualizer",
        lang: "en",
        background_color: "#001B2E",
        theme_color: "#001B2E",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            "src": "./img/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "./img/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "./img/icons/android-chrome-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "./img/icons/android-chrome-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "./img/icons/apple-touch-icon-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "./img/icons/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "./img/icons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "./img/icons/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "./img/icons/msapplication-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "./img/icons/mstile-150x150.png",
            "sizes": "150x150",
            "type": "image/png"
          }
        ]
      }
    })
  ]
})
