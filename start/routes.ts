/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthController = () => import('#controllers/auth_controller')
const NewsController = () => import('#controllers/news_controller')
const ProgramsController = () => import('#controllers/programs_controller')
const StoresController = () => import('#controllers/stores_controller')
const CommentsController = () => import('#controllers/comments_controller')

/**
 * Home
 */
router
  .get('/', async ({ inertia }) => {
    return inertia.render('home')
  })
  .use(middleware.silent())

/**
 * Auth Routes
 */
router
  .group(() => {
    router
      .group(() => {
        router.get('/register', [AuthController, 'showRegister']).as('show.register')
        router.post('/register', [AuthController, 'register']).as('post.register')
        router.get('/login', [AuthController, 'showLogin']).as('show.login')
        router.post('/login', [AuthController, 'login']).as('post.login')
      })
      .use(middleware.guest())
    router
      .group(() => {
        router.post('/logout', [AuthController, 'logout']).as('post.logout')
      })
      .use(middleware.auth())
  })
  .as('auth')
  .prefix('/auth')

router.resource('programs', ProgramsController)

router.resource('smes', StoresController).only(['index', 'show'])

router.resource('smes.comments', CommentsController)

router.resource('news', NewsController)
