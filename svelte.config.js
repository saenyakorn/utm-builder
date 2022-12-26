import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      precompress: true,
    }),
    appDir: 'internal',
  },
  preprocess: [vitePreprocess()],
}

export default config
