import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { NewsFactory } from '#database/factories/news_factory'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.createMany(20)
    await User.create({
      email: 'useruser@site.com',
      phone: '+628952063221',
      password: 'useruser',
      isAdmin: false,
    })
    await User.create({
      email: 'admin@site.com',
      phone: '+628952063220',
      password: 'adminadmin',
      fullName: 'Site Admin',
      isAdmin: true,
    })

    await NewsFactory.createMany(10)
  }
}
