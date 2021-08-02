import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcontactComponent } from './addcontact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AddcontactComponent],
  entryComponents: [AddcontactComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    CdkTableModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class AddContactModule { }