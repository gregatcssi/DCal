import { Component, OnInit,Input } from '@angular/core';
import {Week}from "../../iFace/week"
import {Day} from "../../iFace/day"
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks:any={};
  weekCheck:Week;
  dayCheck:Day;
  @Input()  Month:string;
  buildDay(daynum:string,
                  fSize?:string,
                  color?:string,
                  fullDay?:string):Day{
    return{
      "Color": color,
      "FullDate": fullDay,
      "DayNumber": daynum,
      "FSize":fSize
    }
  }
ds:any[]=[];

getDayOfWeek(dow:number):string{
  switch (dow) {
    case 0:
    return "Sunday";
      case 1:
      return "Monday"
      case 2:
      return "Tuesday"
      case 3:
      return "Wednesday"
      case 4:
      return "Thursday"
      case 5:
      return "Friday"
      case 6:
      return "Saturday"
  }
}
  constructor() {
    let currentYear = new Date(Date.now()).getFullYear()
    let startDate = new Date(2018,2,3);
    let endDate = new Date(currentYear+1,0,1);

    for (var d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
        this.ds.push({
          DOW:this.getDayOfWeek(new Date(d).getDay()),
          date:new Date(d).toLocaleDateString()
        });
    }
        
    this.weeks =[{
      "QWeek":this.buildDay("Q","5px","lightgray"),
      "Week": this.buildDay("W","5px","lightgray"),
      "Saturday":this.buildDay("S","5px","lightgray"),
      "Sunday": this.buildDay("S","5px","lightgray"),
      "Monday": this.buildDay("M","5px","lightgray"),
      "Tuesday":this.buildDay("T","5px","lightgray"),
      "Wednesday": this.buildDay("W","5px","lightgray"),
      "Thursday":this.buildDay("T","5px","lightgray"),
      "Friday": this.buildDay("F","5px","lightgray"),
    },{
      "QWeek":this.buildDay("1","5px","gray"),
      "Week": this.buildDay("1","5px","gray"),
      "Saturday":this.buildDay("3","5px","pink","2/3/2018"),
      "Sunday": this.buildDay("4","5px","pink","2/4/2018"),
      "Monday": this.buildDay("5","5px","white","2/5/2018"),
      "Tuesday":this.buildDay("6","5px","white","2/6/2018"),
      "Wednesday": this.buildDay("7","5px","white","2/7/2018"),
      "Thursday":this.buildDay("8","5px","white","2/8/2018"),
      "Friday": this.buildDay("9","5px","white","2/9/2018")
    },{
      "QWeek":this.buildDay("2","5px","gray"),
      "Week": this.buildDay("2","5px","gray"),
      "Saturday":this.buildDay("10","5px","pink","2/10/2018"),
      "Sunday": this.buildDay("11","5px","pink","2/11/2018"),
      "Monday": this.buildDay("12","5px","white","2/12/2018"),
      "Tuesday":this.buildDay("13","5px","white","2/13/2018"),
      "Wednesday": this.buildDay("14","5px","white","2/14/2018"),
      "Thursday":this.buildDay("15","5px","white","2/15/2018"),
      "Friday": this.buildDay("16","5px","white","2/16/2018")
    },{
      "QWeek":this.buildDay("3","5px","gray"),
      "Week": this.buildDay("3","5px","gray"),
      "Saturday":this.buildDay("17","5px","pink","2/17/2018"),
      "Sunday": this.buildDay("18","5px","pink","1/18/2018"),
      "Monday": this.buildDay("19","5px","white","2/19/2018"),
      "Tuesday":this.buildDay("20","5px","white","2/20/2018"),
      "Wednesday": this.buildDay("21","5px","white","2/21/2018"),
      "Thursday":this.buildDay("22","5px","white","2/22/2018"),
      "Friday": this.buildDay("23","5px","white","2/23/2018")
    },{
      "QWeek":this.buildDay("4","5px","gray"),
      "Week": this.buildDay("4","5px","gray"),
      "Saturday":this.buildDay("24","5px","pink","2/24/2018"),
      "Sunday": this.buildDay("25","5px","pink","2/25/2018"),
      "Monday": this.buildDay("26","5px","white","2/26/2018"),
      "Tuesday":this.buildDay("27","5px","white","2/27/2018"),
      "Wednesday": this.buildDay("27","5px","white","2/28/2018"),
      "Thursday":this.buildDay("28","5px","white","2/29/2018"),
      "Friday": this.buildDay("29","5px","white","2/30/2018")
    },{
      "QWeek":this.buildDay("5","5px","gray"),
      "Week": this.buildDay("5","5px","gray"),
      "Saturday":this.buildDay("30","5px","pink","2/31/2018"),
      "Sunday": this.buildDay("31","5px","pink","2/32/2018"),
      "Monday": this.buildDay("1","5px","white","3/1/2018"),
      "Tuesday":this.buildDay("2","5px","white","3/2/2018"),
      "Wednesday": this.buildDay("3","5px","white","3/3/2018"),
      "Thursday":this.buildDay("4","5px","white","3/4/2018"),
      "Friday": this.buildDay("5","5px","white","3/5/2018")
    }]
    

  }

  ngOnInit() {
  }

}
