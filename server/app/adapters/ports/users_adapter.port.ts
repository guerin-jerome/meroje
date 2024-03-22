import { User, UserRegisterRequest } from '../types/users.types.js'

export default interface UserAdapterPort {
  requestUserByEmailOrUsername(request: UserRegisterRequest): Promise<Array<User>>
}
