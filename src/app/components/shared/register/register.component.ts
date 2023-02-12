import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService,
              private messageService: MessageService) {
  }

  onRegister() {
    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Passwords do not match!' });
      this.registrationForm.patchValue({
        confirmPassword: ''
      });
    } else if (this.registrationForm.value.username !== null
    && this.registrationForm.value.password !== null) {
      this.authService.signupRequest({
        username: <string>this.registrationForm.value.username,
        password: <string>this.registrationForm.value.password,
      });
      this.messageService.add({ severity: 'success', summary: 'User successfully registered' });
    }
  }

  get registerFormControl() {
    return this.registrationForm.controls;
  }

}
