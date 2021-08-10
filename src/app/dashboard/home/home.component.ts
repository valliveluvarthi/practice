import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/layout/route-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeComponent implements OnInit {
  sidebar: any;
  inner_width: any;

  constructor(public router: Router, public routeConstants: RouteConstants) {

  }

  ngOnInit(): void {
  }
  btnClick() {
    let btn = document.querySelector("#btn");
     this.sidebar = document.querySelector(".sidebar");
     if(this.sidebar != null){
      this.sidebar.classList.toggle("active");
     }
  }
  onResize(event){
    this.inner_width = event.target.innerWidth;
  }
  showSideNav(){
    if(this.inner_width <= 455){
      return true;
    }else{
      return false;
    }
  }
}
