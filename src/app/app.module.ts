import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppBootstrapModule} from './app-bootstrap.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {DashboardModule} from './dashboard/dashboard.module';
import { RouterTestingModule } from '@angular/router/testing';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: 'enabled'
   }),
    BrowserAnimationsModule,
    AppBootstrapModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
