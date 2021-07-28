import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import {AppBootstrapModule} from './app-bootstrap.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: 'enabled'
   }),
    BrowserAnimationsModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
