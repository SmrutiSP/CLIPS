import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from 'rxjs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated = false;
  constructor(public modal:ModalService, private auth:AngularFireAuth, private router:Router) { 
    this.auth.user.pipe(map(val=>!!val)).subscribe((val)=>{
      this.isAuthenticated = val;
    })
  }

  ngOnInit(): void {
  }

  async logout(event:Event) {
    event.preventDefault();
    await this.auth.signOut();
    this.router.navigate(['/']);
  }

  openModal(event:Event) {
    event.preventDefault();
    this.modal.toggleModal('auth');
  }

}
