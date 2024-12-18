import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-demo-console-log',
  imports: [],
  templateUrl: './demo-console-log.component.html',
  styleUrl: './demo-console-log.component.scss'
})
export class DemoConsoleLogComponent {

  runningEnvironment =  'Development';

  constructor(){
    if(environment.production){
      this.runningEnvironment = 'Production';
    }
  }

}
