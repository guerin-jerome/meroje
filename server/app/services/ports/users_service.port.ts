import { UserRegisterForm } from '#services/types/authentication.types'
import { User } from '../../adapters/types/users.types.js'

export default interface UserServicePort {
  validateRegisterUserData(request: UserRegisterForm, users: Array<User>): Promise<void>
}
