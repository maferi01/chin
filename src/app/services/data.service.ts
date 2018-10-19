import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meeting } from "../model/data";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  urldata: string = "/assets/data.json";
  constructor(private http: HttpClient) {}

  getMeetings(): Observable<Array<Meeting>> {
    return this.http.get<Array<Meeting>>(this.urldata);
  }
  getLastMeeting(): Observable<Meeting> {
    return this.getMeetings().pipe(map(d => d[0]));
  }
}
