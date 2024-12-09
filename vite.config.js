import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';// Ajouter lors de l'installation

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css','resources/js/App.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
