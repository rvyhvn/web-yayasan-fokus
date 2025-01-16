/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
const NewsController = () => import('#controllers/news_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

/*
 * Home
 */
router
  .get('/', async ({ inertia }) => {
    return inertia.render('home')
  })
  .use(middleware.silent())

/*
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

/*
 * Admin Routes
 */
router
  // News Routes
  .group(() => {
    router.resource('news', NewsController)
  })
  .as('admin')
  .prefix('/admin')
