import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchroom',
  templateUrl: './searchroom.component.html',
  styleUrls: ['./searchroom.component.css']
})
export class SearchroomComponent implements OnInit {
  is_sidebar_active:boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("is_sidebar_active") === "active"){
      this.is_sidebar_active = true;
    }
    else{
      this.is_sidebar_active = false;
    }
  }

}
