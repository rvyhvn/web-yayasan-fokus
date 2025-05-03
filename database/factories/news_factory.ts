import factory from '@adonisjs/lucid/factories'
import News from '#models/news'

export const NewsFactory = factory
  .define(News, async ({ faker }) => {
    const hasImage = faker.helpers.arrayElement([true, false])
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs({ min: 0, max: 3 }),
      imageUrl: hasImage ? 'https://placehold.co/600x400' : null,
    }
  })
  .build()
