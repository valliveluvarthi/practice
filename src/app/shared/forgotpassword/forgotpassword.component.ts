import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RouteConstants} from '../../layout/route-constants';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder, public routeConstants : RouteConstants) {
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', Validators.email)
    });
  }
  navigateTo(){
    this.router.navigateByUrl(this.routeConstants.user_login);
  }
  onSubmit(){
    localStorage.setItem('useremail',this.forgotForm.controls.email.value);
    this.router.navigateByUrl(this.routeConstants.recover_password);
  }
}
