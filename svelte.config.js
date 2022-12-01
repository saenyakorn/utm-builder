import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const dev = 'production' === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      paths: {
        // change below to your repo name
        base: dev ? '' : '/utm-builder',
      },
    }),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
