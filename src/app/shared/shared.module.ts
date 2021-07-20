import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {UserloginComponent} from './userlogin/userlogin.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { ChangeemailComponent } from './changeemail/changeemail.component';

@NgModule({
  declarations: [UserloginComponent,
    ForgotpasswordComponent,
    RecoverpasswordComponent,
    ChangeemailComponent],
  imports: [
    CommonModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class SharedModule { }
