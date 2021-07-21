import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { LAYOUT_ROUTES } from './layout.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {SharedModule} from '../auth/shared.module';
import {RouteConstants} from './route-constants';
@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LAYOUT_ROUTES),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [],
  providers: [RouteConstants]
})
export class LayoutModule { }
