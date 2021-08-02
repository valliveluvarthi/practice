import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { DashboardService } from './dashboard.service';

export class DashboardDataSource implements DataSource<reportlist> {

    public dashboardSubject = new BehaviorSubject<reportlist[]>([]);
    data: any;

    constructor(public dashboardservice: DashboardService) { }
    connect(collectionViewer: CollectionViewer): Observable<reportlist[]> {
        return this.dashboardSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.dashboardSubject.complete();
    }

    loadContactsData(call, callFrom, data) {

        if (callFrom == "contacts") {
            if (call === 'get') {
                this.dashboardservice.getContacts()
                    .subscribe((payload) => {
                        if (payload.length != 0) {
                            this.dashboardservice['displayedColumns'] = Object.keys(payload[0]);
                        }
                        this.dashboardservice['count'] = payload.length;
                        this.dashboardSubject.next(payload);
                    });
            }
            else if(call === 'post'){
                this.dashboardservice.updateContacts(data)
                    .subscribe((payload) => {
                        if (payload.length != 0) {
                            this.dashboardservice['displayedColumns'] = Object.keys(payload[0]);
                        }
                        this.dashboardservice['count'] = payload.length;
                        this.dashboardSubject.next(payload);
                    });
            }
        }

    }
}
export interface reportlist {
    id: string;
    short_name: string;
    full_name: string;
    role: string;
    email: string;
    phno: number;
    company: string;
    address: string;
}