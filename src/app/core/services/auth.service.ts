import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {JwtResponseDto} from "../domain/dto/jwt.response.dto";
import {LoginRequestDto} from "../domain/dto/login.request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = 'http://localhost:3000/auth';

  constructor(private router: Router,
              private http: HttpClient) { }

  loginRequest(credentials: LoginRequestDto) {
    this.http.post<JwtResponseDto>(`${this.rootUrl}/login`, credentials).subscribe(res => {
      this.storeToken(res.access_token);
      this.router.navigateByUrl('home')
    })
  }

  storeToken(jwt: string) {
    localStorage.setItem('alfems', jwt);
  }

  getToken(): any {
    const jwt = <string>localStorage.getItem('alfems');
    if (jwt) {
      return jwt;
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    if (this.getToken() !== null) {
      return true;
    } else {
      return false;
    }
  }

  removeToken(): void {
    localStorage.removeItem('alfems');
  }

}
