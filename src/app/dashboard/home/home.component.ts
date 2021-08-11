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
    let btn = document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    let color1 = "#b86c39";
    let color2 = "#b64da4";
    let color3 = "#f32170";
    if (this.sidebar != null) {
      this.sidebar.classList.toggle("active");
    }
    if (this.sidebar.classList.value.includes('active')) {
      this.sidebar.style.background =
        "linear-gradient(to bottom, "
        + color1 + ", "
        + color2 + ", "
        + color3 + ")";
    }else{
      this.sidebar.style.background = "";
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
}
