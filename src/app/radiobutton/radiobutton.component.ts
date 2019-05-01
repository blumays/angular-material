import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material';


@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.sass']
})
export class RadiobuttonComponent {
  disabled = false;
  @Input() name: string[] = ['This is a radio button'];
  @Output() radiobuttonChange = new EventEmitter();

  public changeUpdated(event: MatRadioChange) {
    const radiobutton = event.value;
    this.radiobuttonChange.emit(radiobutton);
    console.log(event);
  }




}
