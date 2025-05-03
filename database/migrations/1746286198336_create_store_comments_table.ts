import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'store_comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('store_id').references('stores.id')
      table.integer('comment_id').references('comments.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

