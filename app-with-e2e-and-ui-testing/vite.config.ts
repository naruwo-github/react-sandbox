import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessary to resolve dependencies for @chan-naru-way/sample-npm-package
  optimizeDeps: {
    include: ['styled-components', 'react-is']
  }
})
