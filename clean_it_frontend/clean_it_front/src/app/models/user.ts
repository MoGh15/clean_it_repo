export interface User {
  id?: string;
  username: string;
  password: string;
  role?: string;
}

export interface AuthResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
}
