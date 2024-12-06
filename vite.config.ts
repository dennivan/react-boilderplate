import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    build: {
        emptyOutDir: true
    },
    server: {
        host: '0.0.0.0'
    },
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()]
        }
    }
});
