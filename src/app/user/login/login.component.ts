import { Component, ElementRef, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inSubmission = false;
  constructor(private auth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login(loginForm:NgForm) {
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(loginForm.controls.email.value,loginForm.controls.password.value);
      alert('Log in successfull!')
      this.inSubmission = false;
    } catch(e) {
      alert('Either email/password is wrong!');
      this.inSubmission = false;
    }
  }
}
