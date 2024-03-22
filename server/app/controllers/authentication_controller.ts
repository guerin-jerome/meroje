import { errors } from '#exceptions/errors'
import MetierException from '#exceptions/metier_exception'
import { registerUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import { errors as vineErrors } from '@vinejs/vine'
import AuthenticationControllerPort from './ports/authentication_controller.port.js'
import type AuthenticationServicePort from '#services/ports/authentication_service.port'

@inject()
export default class AuthenticationController implements AuthenticationControllerPort {
  constructor(protected authenticationService: AuthenticationServicePort) {}

  async register(context: HttpContext) {
    const { request, response } = context

    return request
      .validateUsing(registerUserValidator)
      .then((userRequest) => this.authenticationService.register(userRequest))
      .catch((exception) => {
        if (exception instanceof vineErrors.E_VALIDATION_ERROR) {
          logger.error(errors.E01)
          response.safeStatus(400)
        }

        if (exception instanceof MetierException) {
          response.safeStatus(exception.status).send({
            isSuccessful: false,
            justification: exception.message,
          })
        }
      })
  }
}
