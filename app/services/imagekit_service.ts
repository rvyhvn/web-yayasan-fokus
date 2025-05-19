import ImageKit from 'imagekit'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { randomUUID } from 'node:crypto'
import * as fs from 'node:fs/promises'
import app from '@adonisjs/core/services/app'

let imagekit: ImageKit
await app.booted(async () => {
  imagekit = await app.container.make('imagekit')
})

export default class ImageKitService {
  private static async uploadFile(file: MultipartFile, folder: string): Promise<string> {
    // Create a unique temp file name
    const uniqueTempFileName = `${randomUUID()}${file.clientName}`

    // Move the file to a temporary location
    await file.move(app.tmpPath('uploads'), { name: uniqueTempFileName })

    try {
      // Read the file buffer
      const fileBuf = await fs.readFile(app.tmpPath('uploads', uniqueTempFileName))

      // Upload to ImageKit
      const uploadResponse = await imagekit.upload({
        file: fileBuf,
        fileName: file.clientName,
        folder: folder,
        useUniqueFileName: true,
        overwriteFile: true,
      })

      return uploadResponse.url
    } catch (error) {
      throw new Error(`File upload failed: ${(error as Error).message}`)
    } finally {
      // Remove the temporary file
      await fs.unlink(app.tmpPath('uploads', uniqueTempFileName)).catch(() => {})
    }
  }

  // async uploadProfileAvatar(file: MultipartFile): Promise<string> {
  //   return ImageKitService.uploadFile(file, 'profile-avatar')
  // }
  //
  // async uploadForumAvatar(file: MultipartFile): Promise<string> {
  //   return ImageKitService.uploadFile(file, 'forum-avatar')
  // }
  async uploadArticle(file: MultipartFile): Promise<string> {
    return ImageKitService.uploadFile(file, 'articles')
  }

  async uploadProduct(file: MultipartFile): Promise<string> {
    return ImageKitService.uploadFile(file, 'products')
  }

  async uploadStore(file: MultipartFile): Promise<string> {
    return ImageKitService.uploadFile(file, 'stores')
  }
}
