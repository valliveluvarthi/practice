import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-availablerooms',
  templateUrl: './availablerooms.component.html',
  styleUrls: ['./availablerooms.component.css']
})
export class AvailableroomsComponent implements OnInit {

  constructor(public dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getRoomDetails("allrooms").subscribe((result: any) => {
      console.log(result);
    });
  }
  btnClick(eve, id) {
    if (id !== 'deluxe') {
      var btn = document.getElementById('deluxe');
      if(btn !== null){
      btn.classList.remove("active");
      }
      this.dashboardService.getRoomDetails(id).subscribe((result: any) => {
        console.log(result);
      });
    }
  }
}
