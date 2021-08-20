import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn: "root"
})
export class DashboardService {
    private baseURL = "";
    count: number = 0;
    displayedColumns: any[] = [];
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    fileHeader = new HttpHeaders();
    session_id: string;
    constructor(private http: HttpClient, private cookieService: CookieService) { }

    getAllRoomDetails() {
        let url: string;
        url = "http://localhost:3000/allrooms";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getDeluxeDetails() {
        let url: string;
        url = "http://localhost:3000/deluxe";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getStandartDetails() {
        let url: string;
        url = "http://localhost:3000/standart";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getPresidentialDetails() {
        let url: string;
        url = "http://localhost:3000/presidential";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getSuiteDetails() {
        let url: string;
        url = "http://localhost:3000/suite";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getJuniorSuiteDetails() {
        let url: string;
        url = "http://localhost:3000/juniorsuite";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    getTwinRoomDetails() {
        let url: string;
        url = "http://localhost:3000/twinroom";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }

}