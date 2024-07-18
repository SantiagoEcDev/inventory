import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Directorio de salida de Vite
    assetsDir: 'assets',  // Directorio para los activos generados por Vite (relativo a outDir)
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // Estructura de nombres para los activos generados
      },
    },
  },
});
