import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(8),
    phone: vine.string().minLength(10).maxLength(13),
    email: vine.string().email().normalizeEmail({ all_lowercase: true }),
    password: vine.string().minLength(8).maxLength(32),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail({ all_lowercase: true }),
    password: vine.string().minLength(8).maxLength(32),
  })
)

