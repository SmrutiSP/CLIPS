import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    age: new FormControl('',[
      Validators.required,
      Validators.min(18)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    ]),
    confirm_password: new FormControl('',[
      Validators.required
    ]),
    phoneNumber: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ])
  },ConfirmPasswordValidator.confirmPassword)

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
}
