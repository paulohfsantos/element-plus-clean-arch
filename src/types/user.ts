export type User = {
  id: number
  name: string
  email: string
  username: string
  password: string
}

export type RegisterRequest = {
  name: string
  email: string
  username: string
  password: string
}

export type LoginRequest = {
  username: string
  password: string
}