import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Faq from '#models/faq'
import Comment from '#models/comment'
import Product from './product.js'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare address: string

  @column()
  declare description: string

  @column()
  declare logoUrl: string | null

  @column()
  declare storeImageUrl: string | null

  @column()
  declare instagram: string | null

  @column()
  declare tiktok: string | null

  @column()
  declare shopee: string | null

  @column()
  declare facebook: string | null

  @column()
  declare whatsapp: string | null

  @column()
  declare isPromoted: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  /**
   * Relationships
   */
  @hasMany(() => Faq)
  declare faqs: HasMany<typeof Faq>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @hasMany(() => Product)
  declare products: HasMany<typeof Product>
}
