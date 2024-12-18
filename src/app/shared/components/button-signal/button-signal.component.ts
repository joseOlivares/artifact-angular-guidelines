import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-signal',
  imports: [NgClass],
  templateUrl: './button-signal.component.html',
  styleUrl: './button-signal.component.scss'
})
export class ButtonSignalComponent {

  label = input<string>('Click Me');
  myClass= input<string>('primary');
  onClick = input<Function>(() => {});

  handleClick() {
    this.onClick()();
  }

}
