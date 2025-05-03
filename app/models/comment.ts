import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Store from './store.js'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare posterId: number

  @column()
  declare storeId: number

  @column()
  declare content: string

  @column()
  declare stars: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  /**
   * Relationships
   */
  @belongsTo(() => User, {
    foreignKey: 'posterId',
  })
  declare poster: BelongsTo<typeof User>

  @belongsTo(() => Store)
  declare store: BelongsTo<typeof Store>
}
