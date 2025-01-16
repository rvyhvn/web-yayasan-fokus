import { test } from '@japa/runner'
import db from '@adonisjs/lucid/services/db'
import User from '#models/user'
import { log } from 'console'

test.group('Auth', (group) => {
  group.setup(async () => {
    await db.beginGlobalTransaction()
  })

  group.teardown(async () => {
    await db.rollbackGlobalTransaction()
  })

  test('User can register an account and redirects to login page', async ({ assert, client }) => {
    const data = {
      email: 'test123@gmail.com',
      fullName: 'Regular User',
      password: 'test1234568',
      phone: '+6281234567',
    }
    const response = await client.post('/auth/register').form(data).withCsrfToken().withInertia()
    const user = await User.findBy('email', data.email)

    assert.equal(response.status(), 200)
    assert.exists(user)
  })

  test('User can login and redirects to home page', async ({ assert, client }) => {
    const data = {
      email: 'test123@gmail.com',
      password: 'test1234568',
    }
    const response = await client.post('/auth/login').form(data).withCsrfToken().withInertia()
    assert.equal(response.body().component, 'home')
  })

  test('User can visit home page', async ({ assert, client }) => {
    const data = {
      email: 'test123@gmail.com',
      password: 'test1234568',
    }
    const user = await User.findByOrFail('email', data.email)
    const response = await client.get('/').loginAs(user).withInertia()
    assert.isTrue(response.body().props.isAuth)
  })
})
