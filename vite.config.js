import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    base: process.env.NODE_ENV === 'production' ? '/aureum/' : '/',
    build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        colecciones: path.resolve(__dirname, 'colecciones.html'),
        visitar: path.resolve(__dirname, 'visitar.html'),
      }
    }
  }
})