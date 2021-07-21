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
  }
  navigateTo(){
    this.router.navigateByUrl('userlogin');
  }
  onSubmit(){
    localStorage.setItem('useremail',this.forgotForm.controls.email.value);
    this.router.navigateByUrl('recoverpassword');
  }
}
