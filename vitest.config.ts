import { resolve } from 'path'
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig(async () => {
  const tsconfigPaths = await import('vite-tsconfig-paths')

  return {
    test: {
      globals: true,
      root: './',
    },
    plugins: [
      tsconfigPaths.default(),
      swc.vite({
        module: { type: 'es6' },
      }),
    ],
    resolve: {
      alias: {
        src: resolve(__dirname, './src'),
      },
    },
  }
})
