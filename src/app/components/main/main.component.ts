import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Meeting } from "src/app/model/data";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  lastMeeting: Meeting;

  constructor(private servData: DataService) {}

  ngOnInit() {
    this.servData.getLastMeeting().subscribe(m => (this.lastMeeting = m));
  }
}
