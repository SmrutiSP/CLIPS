import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from 'rxjs'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated = false;
  constructor(public modal:ModalService, private auth:AngularFireAuth) { 
    this.auth.user.pipe(map(val=>!!val)).subscribe((val)=>{
      this.isAuthenticated = val;
    })
  }

  ngOnInit(): void {
  }

  async logout(event:Event) {
    event.preventDefault();
    await this.auth.signOut();
  }

  openModal(event:Event) {
    event.preventDefault();
    this.modal.toggleModal('auth');
  }

}
