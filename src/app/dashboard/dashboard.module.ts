import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {FieldToDisplayPipe} from './field-to-display.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from './dashboard.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalenderComponent } from './calender/calender.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchroomComponent } from './searchroom/searchroom.component';
import { AvailableroomsComponent } from './availablerooms/availablerooms.component';
@NgModule({
  declarations: [HomeComponent,FieldToDisplayPipe, CalenderComponent, SearchbarComponent, SearchroomComponent, AvailableroomsComponent],
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
    MatSnackBarModule
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
