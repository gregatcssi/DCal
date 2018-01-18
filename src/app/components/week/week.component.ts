import { Component, OnInit } from '@angular/core';
import {Week}from "../../iFace/week"
import {Day} from "../../iFace/day"
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks:any={};
  weekCheck:Week;
  dayCheck:Day;
  
  buildDay(daynum:string,color?:string,fullDay?:string):Day{
    return{
      "Color": color,
      "FullDate": fullDay,
      "DayNumber": daynum
    }
  }

  constructor() { 
    this.weeks =[{
      "QWeek":this.buildDay("QWeek","lightgray"),
      "Week": this.buildDay("Week","lightgray"),
      "Saturday":this.buildDay("Saturday","lightgray"),
      "Sunday": this.buildDay("Sunday","lightgray"),
      "Monday": this.buildDay("Monday","lightgray"),
      "Tuesday":this.buildDay("Tuesday","lightgray"),
      "Wednesday": this.buildDay("Wednesday","lightgray"),
      "Thursday":this.buildDay("Thursday","lightgray"),
      "Friday": this.buildDay("Friday","lightgray")
    },{
      "QWeek":this.buildDay("1","gray"),
      "Week": this.buildDay("1","gray"),
      "Saturday":this.buildDay("3","white"),
      "Sunday": this.buildDay("4","white"),
      "Monday": this.buildDay("5","white"),
      "Tuesday":this.buildDay("6","white"),
      "Wednesday": this.buildDay("7","white"),
      "Thursday":this.buildDay("8","white"),
      "Friday": this.buildDay("9","white")
    }]
    

  }

  ngOnInit() {
  }

}
