import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from '../../layout/route-constants';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  remailForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder, public routeConstants: RouteConstants) {
  }

  ngOnInit() {
    this.remailForm = this.formBuilder.group({
      email: new FormControl('', Validators.email)
    });
    this.remailForm.controls.email.setValue("");
  }
  navigateTo() {
    this.router.navigateByUrl(this.routeConstants.user_login);
  }
  onSubmit() {
    if (this.remailForm.controls.email.status === "VALID" && this.remailForm.controls.email.value !== "") {
      localStorage.setItem('useremail', this.remailForm.controls.email.value);
      this.router.navigateByUrl(this.routeConstants.recover_password);
    }
  }
}
