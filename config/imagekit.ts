import { defineConfig } from 'adonisjs-imagekit'
import env from '#start/env'

export default defineConfig({
  publicKey: env.get('IMAGEKIT_PUBLIC_KEY'),
  privateKey: env.get('IMAGEKIT_PRIVATE_KEY'),
  urlEndpoint: env.get('IMAGEKIT_URL_ENDPOINT'),
})
