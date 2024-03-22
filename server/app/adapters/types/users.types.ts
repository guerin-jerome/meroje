export interface UserRegisterRequest {
  username: string
  email: string
}

export interface User {
  id: number
  username: string
  email: string
  firstname: string
  name: string
  pass: string
  birthdate: Date
  created_at: Date
  is_admin: boolean
  phone?: string
  country?: string
  modified_at?: Date
}
