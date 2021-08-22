import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-availablerooms',
  templateUrl: './availablerooms.component.html',
  styleUrls: ['./availablerooms.component.css']
})
export class AvailableroomsComponent implements OnInit {
  @Input() message;
  mySubscription: Subscription;
  roomslist: any;
  allroomslist: any;
  perRoomslist: any;
  constructor(public dashboardService: DashboardService) {
    this.mySubscription = interval(1000).subscribe((x => {
      this.applyFilter();
    }));
  }

  ngOnInit(): void {
    this.dashboardService.getRoomDetails("allrooms").subscribe((result: any) => {
      console.log(result);
      this.roomslist = result;
      this.allroomslist = result;
    });
  }
  btnClick(eve, id) {
    this.dashboardService.getRoomDetails(id).subscribe((result: any) => {
      console.log(result);
      this.perRoomslist = result;
      this.message = "";
      this.applyFilter();
    });
  }
  applyFilter() {
    if (this.message && this.message != "") {
      this.roomslist = this.allroomslist.filter((item) => {
        return item.bed_size.toLowerCase().includes(this.message.toLowerCase());
      });
    } else {
      if(this.perRoomslist && this.perRoomslist.length !== 0){
        this.roomslist = this.perRoomslist;
      }else{
        this.roomslist = this.allroomslist;
      }
    }
  }
  ngDestroy(){
    this.mySubscription.unsubscribe();
  }
}
