import News from '#models/news'
import type { HttpContext } from '@adonisjs/core/http'

export default class NewsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const news = await News.all()
    return inertia.render('news', { news })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, inertia }: HttpContext) {
    const article = await News.query().where('id', params.id).firstOrFail()

    const recommendations = await News.query()
      .whereNot('id', params.id)
      .orderByRaw('RANDOM()')
      .limit(3)
    return inertia.render('news/show', { article, recommendations })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
