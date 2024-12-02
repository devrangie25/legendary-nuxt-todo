interface PublicUser {
  email: string | null
  password: string | null
}

interface User {
  id: number
  name: string
  email: string
}

interface AuthenticatedUser {
  user: User
}

export type { PublicUser, User, AuthenticatedUser }
