import CryptoJS from 'crypto-js'

export function encode(input: string) {
  const encodedWord = CryptoJS.enc.Utf8.parse(input)
  const encoded = CryptoJS.enc.Base64.stringify(encodedWord)
  return encoded
}

export function decode(input: string) {
  const encodedWord = CryptoJS.enc.Base64.parse(input)
  const decoded = CryptoJS.enc.Utf8.stringify(encodedWord)
  return decoded
}
