import User from '#models/user'
import { test } from '@japa/runner'
import { log } from 'console'

test.group('Admin', () => {
  test('Admin can export members to .xlsx format', async ({ assert, client }) => {
    const user = await User.findByOrFail('email', 'admin@site.com')
    const response = await client
      .post('/admin/export-members')
      .loginAs(user)
      .withInertia()
      .withCsrfToken()
    log(response)
  })
})

