import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import json from "@rollup/plugin-json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    namedExports: true, // Убедитесь, что эта опция включена
    stringify: false,  // Должно быть `false`, чтобы работали объекты JSON
  },
})
