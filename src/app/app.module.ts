import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MainComponent } from './components/main/main.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    MainComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
