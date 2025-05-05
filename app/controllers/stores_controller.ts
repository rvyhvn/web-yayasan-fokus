import Store from '#models/store'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoresController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const smes = await Store.all()
    return inertia.render('smes', { smes })
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
    const sme = await Store.query()
      .where('id', params.id)
      .preload('faqs')
      .preload('products')
      .preload('comments', (comments) => comments.preload('poster'))
      .firstOrFail()

    const recommendations = await Store.query()
      .whereNot('id', params.id)
      .orderByRaw('RANDOM()')
      .limit(3)
    return inertia.render('smes/show', { sme, recommendations })
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
