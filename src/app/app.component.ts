import { Component } from '@angular/core';
import {Day} from'./iFace/day'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    DisplayDate:any;
    constructor(){
      this.DisplayDate={};
      this.DisplayDate.FullDate="1/18/2018"
      this.DisplayDate.DayNumber="18";
      this.DisplayDate.Color="red";
    }
}
 