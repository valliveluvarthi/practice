import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/layout/route-constants';
import { DashboardService } from '../dashboard.service';
import { merge, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ElementRef } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [DashboardService],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  // to post the received data
  
  data: any;
  private onDestroy$: Subject<void> = new Subject<void>();
  public content: any;
  searchdata: any;
  arr_on_row_click: any;
  
  constructor(private router: Router,
    public routeConstants: RouteConstants,
    public dashboardService: DashboardService,
    public dialog: MatDialog,
    ) {
  }

  ngOnInit(): void {
    this.dashboardService.getContacts().subscribe((result: any) => {
      console.log(result);
      this.searchdata = result;
      this.data = result;
      this.arr_on_row_click = result[0];
    });
  }
  ngAfterViewInit() {
   
  }
  filterBy() {
    let filterBy = document.querySelectorAll("#search")[0]['value'];
    if (filterBy != "") {
      this.data = this.data.filter((item) => {
        return item.full_name.toLowerCase().includes(filterBy.toLowerCase());
      });
    } else {
      this.data = this.searchdata;
    }
  }
  
  onRowClick(i) {
    this.arr_on_row_click = this.data[i];
  }
  onAddContact(row, type, i) {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      width: '400px',
      height: 'auto',
      panelClass: 'dialog',
      data: { row, type }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe(result => {
      this.dashboardService.getContacts().subscribe((result: any) => {
        console.log(result);
        this.searchdata = result;
        this.data = result;
        this.arr_on_row_click = result[0];
      });
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
    this.onDestroy$.unsubscribe();
  }
  getBackgroundColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    color += "ad";
    return color;
  }
  getShortName(name,id){
    let div = document.getElementById(id)!;
    div.style.backgroundColor = this.getBackgroundColor();
    return name;
  }
  getContactShortName(name){
    let div = document.getElementById("contact-circle")!;
    div.style.backgroundColor = this.getBackgroundColor();
    return name;
  }
}
