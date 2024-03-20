export interface RegisterUserRequest {
  username: string;
  email: string;
  firstname: string;
  name: string;
  pass: string;
  birthdate: Date;
  phone?: string;
  country?: string;
}
