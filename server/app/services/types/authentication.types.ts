export interface UserRegisterForm {
  username: string
  email: string
  firstname: string
  name: string
  pass: string
  birthdate: Date
  phone?: string
  country?: string
}

interface Reason {
  code: string
  message: string
}

export interface UserRegisterResponse {
  isSuccessful: boolean
  reasons?: Array<Reason>
}
