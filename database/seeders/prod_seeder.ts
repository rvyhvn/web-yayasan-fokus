import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  static environment: string[] = ['production']

  async run() {
    console.log('Running prod seeder')
    await User.create({
      email: 'admin@site.com',
      phone: '+628952063220',
      password: 'dashboardadmin',
      fullName: 'Site Admin',
      isAdmin: true,
    })
  }
}

