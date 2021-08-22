import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() filterByName = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  filterBy(id) {
    // let filterBy = document.querySelectorAll("#"+id)[0]['value'];
    let filterBy;
    let element = document.querySelectorAll("#"+id);
    element.forEach(ele => {
      if(ele['value'] !== ""){
        filterBy = ele['value'];
      }
    });
    this.filterByName.emit(filterBy);
  }
}
