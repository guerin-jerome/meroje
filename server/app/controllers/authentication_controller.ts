import { errors } from '#exceptions/errors'
import { registerUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import { errors as vineErrors } from '@vinejs/vine'
import AuthenticationControllerPort from './ports/authentication_controller.port.js'
import AuthenticationService from '#services/authentication_service'
import { UserRegisterForm, UserRegisterReturn } from '#services/types/authentication.types'
import { httpStatus } from '#exceptions/http'

@inject()
export default class AuthenticationController implements AuthenticationControllerPort {
  constructor(protected authenticationService: AuthenticationService) {}

  async register(context: HttpContext) {
    const { request, response } = context

    return (
      request
        // Règle : check-data-01
        .validateUsing(registerUserValidator)
        .then((userRequest: UserRegisterForm) => this.authenticationService.register(userRequest))
        .then(({ isSuccessful, token, reasons }: UserRegisterReturn) =>
          response
            .safeStatus(200)
            .cookie('token-access', token ?? '')
            .send({ isSuccessful, reasons })
        )
        .catch((exception) => {
          if (exception instanceof vineErrors.E_VALIDATION_ERROR) {
            logger.error(errors.E01)
            response.safeStatus(httpStatus.BAD_REQUEST)
          } else {
            logger.error(
              "Une erreur inattendue s'est produite lors de l'inscripton, détails: %s",
              exception
            )
            response.safeStatus(httpStatus.INTERNAL_SERVER_ERROR)
          }
        })
    )
  }
}
