import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeekComponent } from './components/week/week.component';
import { DayComponent } from './components/day/day.component';
import { MonthComponent } from './components/month/month.component';
import { QuarterComponent } from './components/quarter/quarter.component';
import { YearComponent } from './components/year/year.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    MonthComponent,
    QuarterComponent,
    YearComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
