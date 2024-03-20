import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    username: vine.string().maxLength(32),
    email: vine.string().maxLength(320).email(),
    firstname: vine.string().maxLength(32),
    name: vine.string().maxLength(32),
    pass: vine.string().maxLength(200),
    birthdate: vine.date({ formats: ['YYYY-MM-DD'] }),
    phone: vine.string().maxLength(20).optional(),
    country: vine.string().maxLength(150).optional(),
  })
)
