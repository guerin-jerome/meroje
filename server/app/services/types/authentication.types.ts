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

export interface UserRegisterReturn {
  isSuccessful: boolean
  reasons?: Array<Reason>
  token?: string
}
