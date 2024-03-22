interface Reason {
  code: string
  message: string
}

export interface AuthenticationRegisterResponse {
  isSuccessful: boolean
  reasons?: Array<Reason>
}
