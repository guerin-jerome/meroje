import MetierException from '#exceptions/metier_exception'
import { inject } from '@adonisjs/core'
import UsersAdapter from '../adapters/users_adapter.js'
import AuthenticationServicePort from './ports/authentication_service.port.js'
import UsersService from './users_service.js'
import { UserRegisterForm } from './types/authentication.types.js'
import { User } from '../adapters/types/users.types.js'

@inject()
export default class AuthenticationService implements AuthenticationServicePort {
  constructor(
    protected usersAdapter: UsersAdapter,
    protected usersService: UsersService
  ) {}

  async register(request: UserRegisterForm) {
    return (
      this.usersAdapter
        // Règle : parallel-call-01
        .requestUserByEmailOrUsername(request)
        // Règle : valid-data-01
        .then((users: Array<User>) => this.usersService.validRegisterUserData(request, users))
        .then(() => ({ isSuccessful: true }))
        .catch((exception) => {
          if (exception instanceof MetierException) {
            return { isSuccessful: false, justification: exception.message }
          }
          throw exception
        })
    )
  }
}
