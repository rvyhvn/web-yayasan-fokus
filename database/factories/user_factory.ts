import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import validator from 'validator'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName: firstName, lastName: lastName })
    const normalizedEmail = validator.normalizeEmail(email) || email
    return {
      fullName: firstName + ' ' + lastName,
      email: normalizedEmail,
      phone: faker.phone.number({ style: 'international' }),
      password: '12341234',
      isAdmin: false,
    }
  })
  .build()

