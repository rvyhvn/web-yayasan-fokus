import factory from '@adonisjs/lucid/factories'
import Faq from '#models/faq'

export const FaqFactory = factory
  .define(Faq, async ({ faker }) => {
    return {
      question: faker.lorem.sentence(2),
      answer: faker.lorem.text(),
    }
  })
  .build()
