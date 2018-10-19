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
  meetings: Meeting[];
  constructor(private servData: DataService) {
    this.meetings = [];
  }

  ngOnInit() {
    this.servData.getLastMeeting().subscribe(m => (this.lastMeeting = m));
  }
  showAll() {
    console.log("enterrr");
    this.servData.getMeetings().subscribe(d => (this.meetings = d));
  }
}
