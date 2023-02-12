import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {JwtResponseDto} from "../domain/dto/jwt.response.dto";
import {LoginRequestDto} from "../domain/dto/login.request.dto";
import {JwtUserDto} from "../domain/dto/jwt.user.dto";
import jwtDecode from "jwt-decode";
import {SignupDto} from "../domain/dto/signup.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: JwtUserDto = { username: '', roles: [] };
  rootUrl: string = 'http://localhost:3000/auth';

  constructor(private router: Router,
              private http: HttpClient) { }

  loginRequest(credentials: LoginRequestDto) {
    this.http.post<JwtResponseDto>(`${this.rootUrl}/login`, credentials).subscribe(res => {
      this.storeToken(res.access_token);
      this.router.navigateByUrl('home');
    })
  }

  signupRequest(signUpRequest: SignupDto) {
    this.http.post(`${this.rootUrl}/signup`, signUpRequest).subscribe(res => {
      this.router.navigateByUrl('login');
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

  isAdmin(): boolean {
    const token: JwtUserDto = jwtDecode(this.getToken());
    return token.roles.includes('admin');
    // return false;
  }

  removeToken(): void {
    localStorage.clear();
  }

  getUsername(): string {
    const token = this.getToken();
    this.loggedInUser = jwtDecode(token);

    return this.loggedInUser.username;
  }

}
