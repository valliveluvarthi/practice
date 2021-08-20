import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment';
@Component({
  selector: 'app-searchroom',
  templateUrl: './searchroom.component.html',
  styleUrls: ['./searchroom.component.css']
})
export class SearchroomComponent implements OnInit {
  constructor(public _snackBar : MatSnackBar) { }

  ngOnInit(): void {

  }
  onSign(type,id) {
    console.log(type);
    var ele = document.getElementsByClassName(id);
    console.log(ele);
    let str = ele[0]?.innerHTML;
    if (str !== undefined) {
      var num = parseInt(str);
      if (type === "plus") {
        num = num + 1;
      }
      if(type === 'minus' && num > 0){
        num = num -1
      }
      var numstr = num.toString();
      if(ele !== null){
        ele[0].innerHTML = numstr;
        ele[1].innerHTML = numstr;
        ele[2].innerHTML = numstr;
        ele[3].innerHTML = numstr;
      }
    }
  }
  search(){
    this._snackBar.open("Search action is successfull", "", {
      duration: 2000,
    });
  }
}
