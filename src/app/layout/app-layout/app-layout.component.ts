import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  year: number;

  constructor(public router: Router,) {
 
  }
    
  ngOnInit() {
    this.year = new Date().getFullYear();
    this.router.navigateByUrl('userlogin');
  }
  
 
}
