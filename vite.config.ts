import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    return {
        root: '.',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            hmr: {
                overlay: false,
            },
        },
        build: {
            minify: true,
            outDir: 'out',
            sourcemap: false,
        },
        plugins: [
            react()
        ],
    }
})