import { AdminJSProviderConfig, LucidResource } from '@adminjs/adonis'

import { componentLoader, Components } from '../app/admin/component_loader.js'
import authProvider from '../app/admin/auth.js'
import User from '#models/user'
import Program from '#models/program'
import Store from '#models/store'
import News from '#models/news'
import UploadImage from '../app/admin/components/upload_image.js'

const adminjsConfig: AdminJSProviderConfig = {
  adapter: {
    enabled: true,
  },
  adminjs: {
    rootPath: '/admin',
    loginPath: '/admin/login',
    logoutPath: '/admin/logout',
    componentLoader,
    resources: [
      {
        resource: new LucidResource(User, 'sqlite'),
        options: {
          properties: {
            id: {
              isVisible: {
                show: true,
                list: false,
                edit: false,
                filter: false,
              },
              isDisabled: true,
            },
            fullName: {
              isDisabled: true,
            },
            phone: {
              isDisabled: true,
            },
            email: {
              isDisabled: true,
            },
            password: {
              isDisabled: true,
            },
          },
        },
      },
      {
        resource: new LucidResource(Program, 'sqlite'),
        options: {
          editProperties: ['title', 'description'],
        },
      },
      {
        resource: new LucidResource(Store, 'sqlite'),
        options: {
          editProperties: ['name', 'address', 'isPromoted'],
        },
      },
      {
        resource: new LucidResource(News, 'sqlite'),
        options: {
          editProperties: ['title', 'content', 'imageUrl'],
          properties: {
            imageUrl: {
              description: 'Banner',
              components: {
                edit: Components.UploadImage,
              },
            },
          },
        },
      },
    ],
    pages: {},
    locale: {
      availableLanguages: ['en'],
      language: 'en',
      translations: {
        en: {
          actions: {},
          messages: {},
          labels: {},
          buttons: {},
          properties: {},
          components: {},
          pages: {},
          ExampleResource: {
            actions: {},
            messages: {},
            labels: {},
            buttons: {},
            properties: {},
          },
        },
      },
    },
    branding: {
      companyName: 'AdminJS',
      theme: {},
    },
    settings: {
      defaultPerPage: 10,
    },
  },
  auth: {
    enabled: true,
    provider: authProvider,
    middlewares: [],
  },
  middlewares: [],
}

export default adminjsConfig
