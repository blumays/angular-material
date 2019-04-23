import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass']
})
export class DatePickerComponent  {
  isOpened = true;
  @Output() monthSelected: EventEmitter<Date>;

  public onMonthSelected(event: Date) {
    this.monthSelected.emit(event);
    console.log('Blu is cool');
  }

}
