import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,) {

  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', Validators.email)
    });
    this.forgotForm.controls.email.setValue(localStorage.getItem('useremail'));
  }
  navigateTo(){
    this.router.navigateByUrl('userlogin');
  }
  onSubmit(){
    this.router.navigateByUrl('recoverpassword');
  }
}
