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

    getContacts() {
        let url: string;
        url = "http://localhost:3000/contacts";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.get(url, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    postContacts(model) {
        let url: string;
        url = "http://localhost:3000/contacts";
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.post(url, model, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
    updateContacts(model,id) {
        let url: string;
        url = "http://localhost:3000/contacts/" + id;
        this.session_id = this.cookieService.get("session_id" + "_localhost");
        this.headers = this.headers.set('session_id', this.session_id);
        return this.http.put(url, model, { headers: this.headers })
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
}