import User from '#models/user'
import { ExcelSheetService } from '#services/excel_sheet_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ inertia }: HttpContext) {
    const users = await User.all()
    return inertia.render('admin/index', { users: users })
  }

  async exportMembers({ request, response }: HttpContext) {
    const excelService = new ExcelSheetService()
    const whereClause = request.input('where') // Optional: Get filter from request
    const params = request.input('params', []) // Optional: Get parameters for the where clause

    // Configure export options
    const exportOptions = {
      whereClause,
      params,
      filename: 'members_export.xlsx', // You can customize the filename
    }

    // Export the data
    const filename = await excelService.exportToXlsx('users', exportOptions)

    return response.download(filename)
  }
}
