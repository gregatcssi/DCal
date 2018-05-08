import { Component, OnInit, Input } from '@angular/core';
import {Day} from '../../iFace/day';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() DispDay: Day;
  constructor() { }

  ngOnInit() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = month + '/' + day + '/' + year;
    const id = 'M' + month + 'D' + day + 'Y' + year;
    console.log(newdate);
    if (this.DispDay.FullDate === newdate) {
      this.DispDay.Color = 'Blue';
    }
  }

}
