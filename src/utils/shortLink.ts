export async function getShortLink(url: string): Promise<string> {
  const data = {
    domain: import.meta.env.VITE_SHORT_IO_DOMAIN,
    originalURL: url,
  }

  const response = await fetch('https://api.short.io/links/public', {
    method: 'post',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: import.meta.env.VITE_SHORT_IO_PUBLIC_KEY,
    },
    body: JSON.stringify(data),
  })

  const json = await response.json()
  return json['shortURL']
}
