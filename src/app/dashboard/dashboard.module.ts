import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HomeComponent,ContactsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
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
export class DashboardModule { }
