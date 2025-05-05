import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
  UploadImage: componentLoader.add('UploadImage', './components/upload_image'),
}

export default { componentLoader, Components }
