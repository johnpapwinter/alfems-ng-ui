import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService) {  }

  ngOnInit(): void { }

  test() {
    console.log('test')
  }
  login() {
    if (this.loginForm.value.username !== null && this.loginForm.value.password !== null) {
      this.authService.loginRequest({
        username: <string>this.loginForm.value.username,
        password: <string>this.loginForm.value.password,
      })
    }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }
}
