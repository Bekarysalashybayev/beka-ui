import { resolve } from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

// noinspection JSUnusedGlobalSymbols - suppresses "exported but not used" warning in WebStorm
export default defineConfig({
    plugins: [
        vuePlugin(),
        dtsPlugin({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'beka-ui',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
