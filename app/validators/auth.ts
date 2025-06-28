import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(8),
    phone: vine
      .string()
      .mobile({ locale: ['id-ID'] })
      .trim()
      .minLength(10)
      .maxLength(13),
    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail({ all_lowercase: true })
      .unique({ table: 'users', column: 'email' }),
    password: vine.string().trim().minLength(8).maxLength(32),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().normalizeEmail({ all_lowercase: true }),
    password: vine.string().trim().minLength(8).maxLength(32),
  })
)
