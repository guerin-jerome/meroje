import { UserRegisterForm, UserRegisterReturn } from '#services/types/authentication.types'

export default interface AuthenticationServicePort {
  register(request: UserRegisterForm): Promise<UserRegisterReturn>
}
