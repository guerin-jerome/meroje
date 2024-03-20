// TODO: Mettre en place le pnpm workspace et dégager et récuperer via /shared
export interface RegisterUserRequest {
  username: string
  email: string
  firstname: string
  name: string
  pass: string
  birthdate: Date
  phone?: string
  country?: string
}

export default class UsersService {
  async register(request: RegisterUserRequest) {}
}
