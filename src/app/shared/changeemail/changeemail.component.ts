import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.css']
})
export class ChangeemailComponent implements OnInit {

  passwdForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.passwdForm = this.formBuilder.group({
      npassword: new FormControl(''),
      cpassword: new FormControl('')
    });
  }
  navTo() {
    if (this.passwdForm.controls.npassword.value !== "" && this.passwdForm.controls.cpassword.value !== "") {
      if (this.passwdForm.controls.npassword.value === this.passwdForm.controls.cpassword.value) {
        this.router.navigateByUrl('userlogin');
      }
    }
  }
}
