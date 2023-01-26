import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {JwtResponseDto} from "../domain/dto/jwt.response.dto";
import {LoginRequestDto} from "../domain/dto/login.request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = '';
  jwtResponse: JwtResponseDto = {access_token: ''};

  constructor(private router: Router,
              private http: HttpClient) { }

  loginRequest(credentials: LoginRequestDto) {
    console.log(`Username: ${credentials.username}, password: ${credentials.password}`);
    this.router.navigateByUrl('home')
  }
}
