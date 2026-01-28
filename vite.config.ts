import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// هذا هو التنسيق الصحيح الذي سيحول العلامة الحمراء إلى خضراء
export default defineConfig({
  plugins: [react()],
})
