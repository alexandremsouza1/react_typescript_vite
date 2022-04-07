import * as vite from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default vite.defineConfig({
	plugins: [
		react(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					title: process.env.REACT_APP_NAME,
					injectScript: `<script src="./inject.js"></script>`,
				},
			},
		}),
		svgrPlugin({
			svgrOptions: {
				icon: true,
				// ...svgr options (https://react-svgr.com/docs/options/)
			},
		}),
	],
	envDir: 'env',
	envPrefix: 'REACT',
	resolve: {
		alias: {
			'@src': path.join(__dirname, 'src'),
		},
	},
	server: {
		port: 3003,
	},
});
