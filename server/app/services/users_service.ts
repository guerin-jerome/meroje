import MetierException from '#exceptions/metier_exception'
import { warnings } from '#exceptions/warnings'
import logger from '@adonisjs/core/services/logger'
import { reasons } from '#exceptions/reasons'
import { httpStatusCode } from '#exceptions/http'
import UserServicePort from './ports/users_service.port.js'
import { UserRegisterForm } from './types/authentication.types.js'
import { User } from '../adapters/types/users.types.js'

export default class UsersService implements UserServicePort {
  async validRegisterUserData(request: UserRegisterForm, users: Array<User>) {
    const { username, email, birthdate } = request

    if (users?.length > 0) {
      const user = users[0]

      if (email === user.email) {
        logger.warn(warnings.W01, email)
        throw new MetierException(
          reasons.users.emailAlreadyExists.code,
          reasons.users.emailAlreadyExists.message,
          httpStatusCode.success
        )
      }

      if (username === user.username) {
        logger.warn(warnings.W02, username)
        throw new MetierException(
          reasons.users.usernameAlreadyExists.code,
          reasons.users.usernameAlreadyExists.message,
          httpStatusCode.success
        )
      }
    }

    const yearsOld = (new Date().getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365)

    if (yearsOld < 18) {
      logger.warn(warnings.W03)
      throw new MetierException(
        reasons.users.isntAdult.code,
        reasons.users.isntAdult.message,
        httpStatusCode.success
      )
    }
  }
}
