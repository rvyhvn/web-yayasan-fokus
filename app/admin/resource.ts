import News from '#models/news'
import UploadImage from './components/upload_image.js'

export const Resource = {
  resource: News,
  options: {
    properties: {
      content: {
        type: 'string',
        components: {
          edit: UploadImage, // this is our custom component
        },
      },
    },
  },
}
