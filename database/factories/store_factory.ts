import factory from '@adonisjs/lucid/factories'
import Store from '#models/store'
import { FaqFactory } from './faq_factory.js'
import { ProductFactory } from './product_factory.js'

export const StoreFactory = factory
  .define(Store, async ({ faker }) => {
    return {
      name: faker.company.name(),
      description: faker.lorem.sentence(5),
      address: faker.location.streetAddress(),
    }
  })
  .relation('faqs', () => FaqFactory)
  .relation('products', () => ProductFactory)
  .build()
