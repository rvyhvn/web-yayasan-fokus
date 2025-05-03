import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 13).notNullable().unique()
      table.string('password').notNullable()
      table.boolean('is_admin').notNullable().defaultTo(false)

      table.timestamp('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
