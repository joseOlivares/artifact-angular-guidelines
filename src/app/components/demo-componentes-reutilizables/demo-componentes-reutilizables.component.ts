import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StandardTableComponent } from '../../shared/components/standard-table/standard-table.component';
import { ButtonSignalComponent } from '../../shared/components/button-signal/button-signal.component';

@Component({
  selector: 'app-demo-componentes-reutilizables',
  imports: [ButtonComponent, StandardTableComponent, ButtonSignalComponent],
  templateUrl: './demo-componentes-reutilizables.component.html',
  styleUrl: './demo-componentes-reutilizables.component.scss'
})
export class DemoComponentesReutilizablesComponent {

  tableColumns= [
    { header: 'Name', field: 'name' },
    { header: 'Age', field: 'age' },
    { header: 'City', field: 'city' }
  ];
  tableData=[
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'London' },
    { name: 'Bob', age: 40, city: 'Paris' }];

  onClickButton() {
    alert('Click')
    console.log('clicked');
  }
}
