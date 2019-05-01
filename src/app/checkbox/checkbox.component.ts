import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent {
  checked = true;
  @Input() text: string[] = ['This is a checkbox'];
  @Output() checkboxChange = new EventEmitter<boolean>();

  public checkboxUpdated(event: MatCheckboxChange) {
    const checkedbox = event.checked;
    this.checkboxChange.emit(checkedbox);
    // console.log(event);
  }
}
