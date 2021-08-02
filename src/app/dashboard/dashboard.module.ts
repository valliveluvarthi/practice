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
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {FieldToDisplayPipe} from './field-to-display.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from './dashboard.service';
import { AddcontactComponent } from './contacts/addcontact/addcontact.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent,ContactsComponent,FieldToDisplayPipe, AddcontactComponent],
  imports: [
    CommonModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
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
  providers : [DashboardService]
})
export class DashboardModule { }
