import Excel from 'exceljs'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

interface ExportOptions {
  whereClause?: string
  params?: any[]
  filename?: string
}

export class ExcelSheetService {
  private workbook: Excel.Workbook
  constructor() {
    this.workbook = new Excel.Workbook()
  }

  /**
   * Export data to excel format
   */
  async exportToXlsx(tableName: string, options: ExportOptions = {}) {
    try {
      let query = db.from('users')

      if (options.whereClause) {
        query = query.whereRaw(options.whereClause, options.params || [])
      }

      const data = await query
      const worksheet = this.workbook.addWorksheet(tableName)

      if (data.length > 0) {
        // Add headers
        const headers = Object.keys(data[0])
        worksheet.addRow(headers)

        // Add data
        data.forEach((row) => {
          worksheet.addRow(Object.values(row))
        })

        // Format headers
        const headerRow = worksheet.getRow(1)
        headerRow.font = { bold: true }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE0E0E0' },
        }

        // Auto-fit columns
        worksheet.columns.forEach((column, index) => {
          if (column) {
            let maxLength = 0
            const columnNumber = index + 1
            worksheet.getColumn(columnNumber).eachCell({ includeEmpty: true }, (cell) => {
              const columnLength = cell.value ? cell.value.toString().length : 10
              if (columnLength > maxLength) {
                maxLength = columnLength
              }
            })
            column.width = Math.min(maxLength + 2, 50)
          }
        })
      }

      // Generate filename
      const timestamp = DateTime.now().toFormat('yyyyMMdd_HHmmss')
      const filename = options.filename || `export_${tableName}_${timestamp}.xlsx`

      // Save workbook
      await this.workbook.xlsx.writeFile(`tmp/${filename}`)

      return filename
    } catch (error) {
      console.error('Excel export error:', error)
      throw error
    }
  }
}

