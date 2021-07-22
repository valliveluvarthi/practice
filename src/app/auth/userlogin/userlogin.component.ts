import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RouteConstants} from '../../layout/route-constants';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder, public routeConstants : RouteConstants,) {

  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    });
  }
  navigateTo() {
      this.router.navigateByUrl(this.routeConstants.forgot_password);
  }

}
