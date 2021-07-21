import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RouteConstants} from '../../layout/route-constants';
@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {
  constructor(private router: Router, public routeConstants : RouteConstants,) {  }
  mail;
  ngOnInit(): void {
    this.mail = localStorage.getItem('useremail');
  }
  toLogin(){
    this.router.navigateByUrl(this.routeConstants.user_login);
  }
  changeEmail(){
    this.router.navigateByUrl(this.routeConstants.change_email);
  }

}
