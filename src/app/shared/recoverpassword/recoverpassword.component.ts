import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {
  mail;
  constructor(private router: Router) {  }

  ngOnInit(): void {
    this.mail = localStorage.getItem('useremail');
  }
  toLogin(){
    this.router.navigateByUrl('userlogin');
  }
  changeEmail(){
    this.router.navigateByUrl('changeemail');
  }

}
