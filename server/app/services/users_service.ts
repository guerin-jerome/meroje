import MetierException from '#exceptions/metier_exception'
import UserServicePort from './ports/users_service.port.js'
import { UserRegisterForm } from './types/authentication.types.js'
import { User } from '../adapters/types/users.types.js'
import { metierExceptions } from '#exceptions/exceptions'

export default class UsersService implements UserServicePort {
  async validateRegisterUserData(request: UserRegisterForm, users: Array<User>) {
    const { username, email, birthdate } = request
    const userYearsOld = (new Date().getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365)

    switch (true) {
      case users?.[0]?.email === email:
        throw new MetierException(metierExceptions.AUTHENTICATION.emailAlreadyExists)
      case users?.[0]?.username === username:
        throw new MetierException(metierExceptions.AUTHENTICATION.usernameAlreadyExists)
      case userYearsOld < 18:
        throw new MetierException(metierExceptions.USERS.isntAdult)
    }
  }
}
