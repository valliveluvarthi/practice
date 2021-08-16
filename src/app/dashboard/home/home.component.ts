import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/layout/route-constants';
import * as $ from 'jquery';
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
  outer_width: any;
  homeContent: HTMLCollectionOf<Element>;

  constructor(public router: Router, public routeConstants: RouteConstants) {

  }

  ngOnInit() {
    this.outer_width = 1024;
  }
  btnClick() {
    this.sidebar = document.querySelector(".sidebar");
    if (this.sidebar != null) {
      this.sidebar.classList.toggle("active");
    }
    if (this.sidebar.classList.value.includes('active')) {
      this.sidebar.style.background = "#F4F6FA";
      localStorage.setItem("is_sidebar_active", "active");
    }else{
      this.sidebar.style.background = "";
      localStorage.setItem("is_sidebar_active", "");
    }
  }
  onResize(event) {
    this.outer_width = event.target.outerWidth;
    console.log(this.outer_width)
  }
  showSideNav() {
    if (this.outer_width <= 455) {
      return true;
    } else {
      return false;
    }
  }
  showSideNavAlways(){
    if (this.outer_width >= 455) {
      return true;
    } else {
      return false;
    }
  }
}
