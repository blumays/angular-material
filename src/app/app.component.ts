import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public monthSelected = Date;
  public optionSelected: MatAutocompleteSelectedEvent;
  public checkbox: MatCheckboxChange;

  onmonthSelected(date) {
    this.monthSelected = Date;
    console.log(date);
  }
  onOptionSelected(event) {
    this.optionSelected = event;
    console.log(event);
  }

  onCheckBox(event) {
    this.checkbox = event;
    console.log(event);
  }

}

