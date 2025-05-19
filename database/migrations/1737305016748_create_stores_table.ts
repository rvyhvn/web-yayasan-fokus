import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('address').notNullable()
      table.string('description').notNullable()
      table.text('logo_url').nullable()
      table.text('store_image_url').nullable()
      table.string('instagram').nullable()
      table.string('tiktok').nullable()
      table.string('shopee').nullable()
      table.string('facebook').nullable()
      table.string('whatsapp').nullable()
      table.boolean('is_promoted').notNullable().defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
