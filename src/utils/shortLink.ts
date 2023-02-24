import axios from 'axios'

interface Options {
  path?: string
  title?: string
}

export async function getShortLink(url: string, options?: Options): Promise<string> {
  const body = {
    domain: import.meta.env.VITE_SHORT_IO_DOMAIN,
    originalURL: url,
    path: !options?.path ? undefined : options.path,
    title: !options?.title ? undefined : options.title,
  }

  const { data } = await axios.post('https://api.short.io/links/public', body, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: import.meta.env.VITE_SHORT_IO_PUBLIC_KEY,
    },
  })

  return data['shortURL']
}
