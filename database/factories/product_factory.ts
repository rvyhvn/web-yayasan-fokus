import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      category: faker.helpers.arrayElement(['makanan', 'barang']),
      name: faker.food.dish(),
      price: faker.commerce.price(),
    }
  })
  .build()

