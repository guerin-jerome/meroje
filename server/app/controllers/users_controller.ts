import { errors } from '#exceptions/errors'
import UsersService from '#services/users_service'
import { registerUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

@inject()
export default class UsersController {
  constructor(protected usersService: UsersService) {}

  async register({ request, response }: HttpContext) {
    return request
      .validateUsing(registerUserValidator)
      .then(this.usersService.register)
      .catch(() => {
        logger.error(errors.E01)
        response.safeStatus(400)
      })
  }
}
