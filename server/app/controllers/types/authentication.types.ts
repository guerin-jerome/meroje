interface Reason {
  code: string
  message: string
}

export interface AuthenticationRegisterReturn {
  isSuccessful: boolean
  reasons?: Array<Reason>
}
