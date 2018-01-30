import { Component, OnInit, Input } from '@angular/core';
import {Day} from '../../iFace/day'
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() DispDay:Day;
  constructor() { }

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = month + "/" + day + "/" + year;
    var id = "M"+month+"D"+day+"Y"+year;
    if(this.DispDay.FullDate==newdate){
      this.DispDay.Color="Blue" 
    }
  }

}
