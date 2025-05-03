import factory from '@adonisjs/lucid/factories'
import Store from '#models/store'
import { FaqFactory } from './faq_factory.js'

export const StoreFactory = factory
  .define(Store, async ({ faker }) => {
    return {
      name: faker.company.name(),
      address: faker.location.streetAddress(),
    }
  })
  .relation('faqs', () => FaqFactory)
  .build()
