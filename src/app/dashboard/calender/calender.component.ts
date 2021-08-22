import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  filterName: any;

  constructor() { }

  ngOnInit(): void {
  }
  public filterBy(filterBy: any): void {
    console.log('filtered by: ', filterBy);
    this.filterName = filterBy;
  }

}
