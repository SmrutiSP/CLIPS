import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clips';
  isLoggedIn = false;
  constructor(private auth:AngularFireAuth) {
    this.auth.user.pipe(map((val)=>!!val)).subscribe(val=>{
      this.isLoggedIn = !val;
    })
  }
}
