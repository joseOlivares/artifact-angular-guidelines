import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';
@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() myClass: string = 'primary';
  @Input() onClick: () => void = () => {};
}
