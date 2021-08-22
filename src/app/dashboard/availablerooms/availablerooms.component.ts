import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-availablerooms',
  templateUrl: './availablerooms.component.html',
  styleUrls: ['./availablerooms.component.css']
})
export class AvailableroomsComponent implements OnInit {
  roomslist: any;

  constructor(public dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getRoomDetails("allrooms").subscribe((result: any) => {
      console.log(result);
      this.roomslist = result;
    });
  }
  btnClick(eve, id) {
      this.dashboardService.getRoomDetails(id).subscribe((result: any) => {
        console.log(result);
        this.roomslist = result;
      });
  }
}
