import { AuthenticationRegisterResponse } from '#controllers/types/authentication.types'
import { HttpContext } from '@adonisjs/core/http'

export default interface AuthenticationControllerPort {
  register(context: HttpContext): Promise<void | AuthenticationRegisterResponse>
}
