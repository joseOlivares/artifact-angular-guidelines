import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-standard-table',
  imports: [],
  templateUrl: './standard-table.component.html',
  styleUrl: './standard-table.component.scss'
})
export class StandardTableComponent {

  @Input() columns: { header: string; field: string }[] = [];
  @Input() data: any[] = [];
}
