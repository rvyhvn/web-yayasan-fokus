import type { HttpContext } from '@adonisjs/core/http'

export default class ProgramsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('programs')
  }
}

