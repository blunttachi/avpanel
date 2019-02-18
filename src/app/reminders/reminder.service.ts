import { HttpHandler, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Reminder } from "../reminder";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";


// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     })
//   };

@Injectable()
export class ReminderService {
    // url = 'https://api.myjson.com/bins/yp9oj';
    url = 'http://localhost:3000/reminders';
    constructor (private http: HttpClient){}

    getReminders(): Observable<Reminder[]>{
        return this.http.get<Reminder[]>(this.url);
    }

    setReminder(reminder: Reminder): Observable<Reminder>{
        return this.http.post<Reminder>(this.url, reminder);
    }

    removeReminder(id: string){
        const itemUrl = this.url + "/" + id;
        return this.http.delete(itemUrl);
    }
}