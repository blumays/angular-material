import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette, MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent {
@Input() invert = false;
@Input() max = 200;
@Output() sliderChange = new EventEmitter<number>();

public changeUpdated(event: MatSliderChange) {
  const slider = event.source.value;
  this.sliderChange.emit(slider);
  console.log(event);
}


}
