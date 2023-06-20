import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    host: true,
    strictPort: true,
    port: 25565,
  },
  plugins: [
    { enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react(),
    tsconfigPaths()
  ],
})
