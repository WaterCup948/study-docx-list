import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
export default defineConfig({
    plugins: [uni()],
    server: {
        host:"localhost",
		port:"8866",
        proxy: {
            '/api': {
                target: 'https://api.jisuapi.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
           },
       },
   },
});