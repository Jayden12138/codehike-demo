import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { remarkCodeHike } from '@code-hike/mdx'

export default defineConfig(async () => {
	const mdx = await import('@mdx-js/rollup')
	return {
		optimizeDeps: {
			include: ['react/jsx-runtime']
		},
		plugins: [
			react(),
			mdx.default({
				remarkPlugins: [
					[
						remarkCodeHike,
						{
							lineNumbers: true,
							showCopyButton: false,
							theme: 'dark-plus',
							skipLanguages: ['mermaid'],
							staticMediaQuery: 'not screen, (max-width: 768px)',
							autoImport: true,
							autoLink: false
						}
					]
				]
			})
		]
	}
})
