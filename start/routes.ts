/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
router.on('/').renderInertia('home')

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
