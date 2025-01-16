import factory from '@adonisjs/lucid/factories'
import News from '#models/news'

export const NewsFactory = factory
  .define(News, async ({ faker }) => {
    return {}
  })
  .build()