import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,) {

  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    });
  }
  navigateTo() {
    if (this.forgotForm.controls.email.status === "VALID" && this.forgotForm.controls.email.value !== "") {
      this.router.navigateByUrl('forgotpassword');
    }
  }

}
