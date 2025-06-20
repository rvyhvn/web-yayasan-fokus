import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { NewsFactory } from '#database/factories/news_factory'
import { StoreFactory } from '#database/factories/store_factory'
import { CommentFactory } from '#database/factories/comment_factory'
import News from '#models/news'

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

    await News.create({
      title: 'Cara membuat teh',
      content: 'lorem ipsum;',
      isPinned: true,
    })

    const stores = await StoreFactory.with('faqs', 8).with('products', 10).createMany(40)

    for (const store of stores) {
      const user = await User.query().orderByRaw('RANDOM()').firstOrFail()
      const randomStore = stores[Math.floor(Math.random() * stores.length)]
      await CommentFactory.merge({ posterId: user.id, storeId: randomStore.id }).create()
    }
  }
}
