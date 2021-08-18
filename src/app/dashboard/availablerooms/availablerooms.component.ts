import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availablerooms',
  templateUrl: './availablerooms.component.html',
  styleUrls: ['./availablerooms.component.css']
})
export class AvailableroomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(eve, id) {
    if (id !== 'deluxe') {
      var btn = document.getElementById('deluxe');
      if(btn !== null)
      btn.classList.remove("active");
    }
  }
}
