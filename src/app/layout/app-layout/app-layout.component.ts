import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { RouteConstants } from '../route-constants';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  constructor(public router: Router,public routeConstants: RouteConstants) {
  }
    
  ngOnInit() {
    this.router.navigateByUrl(this.routeConstants.dashboard);
  }
  
 
}
