import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('store_id').references('stores.id').notNullable()
      table.enu('category', ['makanan', 'barang']).nullable()
      table.string('name').notNullable()
      table.string('price').notNullable()
      table.text('image_url').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
