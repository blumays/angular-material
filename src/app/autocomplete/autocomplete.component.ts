import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent {
    myControl = new FormControl();
    option = 'One';
    options: string[] = ['One', 'Two', 'Three'];
    autoActiveFirstOption: true;
    @Output() optionSelected = new EventEmitter<string>();

    public onOptionSelected(event: MatAutocompleteSelectedEvent) {
      const selectedItem = event.option.value;
      this.optionSelected.emit(selectedItem);
    }
}
