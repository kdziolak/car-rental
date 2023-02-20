import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token.interface';
import jwt_decode from 'jwt-decode';
import { StorageService } from './storage.service';

export const TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: string = '';

  constructor(private storageService: StorageService) {
    this.token = storageService.getItem(TOKEN);
  }

  private getTokenDecoded(): Token | null {
    try {
      const decodedToken: Token = jwt_decode(this.token);
      return decodedToken;
    } catch (exception) {
      return null;
    }
  }

  setToken(token: string): void {
    this.token = token;
    this.storageService.setItem(TOKEN, token);
  }

  getToken(): string {
    return this.token;
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
    this.token = '';
  }

  isTokenExpired(): boolean {
    const expToken = this.tokenExp();
    return expToken ? expToken < Date.now() / 1000 : true;
  }

  tokenExp(): number | null {
    return this.getTokenDecoded()
      ? (this.getTokenDecoded()?.exp as number)
      : null;
  }
}
