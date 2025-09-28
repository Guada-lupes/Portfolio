import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html", // archivo que se generará
      open: false, // true abre el navegador automáticamente
      template: "treemap", // 'treemap' | 'sunburst' | 'network' | 'list'
      gzipSize: true, // calcula tamaño gzip (útil)
      brotliSize: true, // calcula tamaño brotli (si quieres)
    }),
  ],
});
