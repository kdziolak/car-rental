import { User } from './user.interface';
export interface Token {
  user: User;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
}
