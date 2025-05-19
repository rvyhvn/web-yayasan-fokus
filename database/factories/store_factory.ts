import factory from '@adonisjs/lucid/factories'
import Store from '#models/store'
import { FaqFactory } from './faq_factory.js'
import { ProductFactory } from './product_factory.js'

export const StoreFactory = factory
  .define(Store, async ({ faker }) => {
    const name = faker.company.name()
    return {
      name: name,
      description: faker.lorem.sentence(5),
      logoUrl: 'https://placehold.co/100',
      storeImageUrl: 'https://placehold.co/600x400',
      address: faker.location.streetAddress(),
      instagram: name.toLowerCase(),
      tiktok: name.toLowerCase(),
      shopee: name.toLowerCase(),
      facebook: name,
      whatsapp: faker.phone.number(),
    }
  })
  .relation('faqs', () => FaqFactory)
  .relation('products', () => ProductFactory)
  .build()
