import axios from 'axios'

export async function getShortLink(url: string, customPath?: string): Promise<string> {
  const body = {
    domain: import.meta.env.VITE_SHORT_IO_DOMAIN,
    originalURL: url,
    path: customPath,
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
