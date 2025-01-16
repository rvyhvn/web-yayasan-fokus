import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.createMany(20)
    await User.create({
      email: 'admin@site.com',
      phone: '+628952063220',
      password: 'adminadmin',
      fullName: 'Site Admin',
    })
  }
}
