import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }: { mode: string }) => {
  const config: UserConfigExport = {
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    define: {
      'process.env': {
        // NODE_ENV: process.env.NODE_ENV,
        API_LOCAL: process.env.VITE_API_LOCAL,
        VIA_CEP_URL: process.env.VITE_VIA_CEP_URL,
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
  }

  return defineConfig(config)
}