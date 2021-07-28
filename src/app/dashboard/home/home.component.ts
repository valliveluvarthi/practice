import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/layout/route-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,public routeConstants: RouteConstants) {
 
  }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigateByUrl(this.routeConstants.contacts);
  }
}
