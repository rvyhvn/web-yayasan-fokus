import factory from '@adonisjs/lucid/factories'
import Comment from '#models/comment'

export const CommentFactory = factory
  .define(Comment, async ({ faker }) => {
    return {
      content: faker.lorem.sentence(5),
      stars: faker.number.int({ min: 0, max: 5 }),
    }
  })
  .build()
