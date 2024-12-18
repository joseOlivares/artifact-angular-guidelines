import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsoleToggleService } from './shared/services/console-toggle/console-toggle.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'artifact-angular-guidelines';

    //inyectamos el servicio para deshabilitar la consola en produccion
    consoleToggleService=inject(ConsoleToggleService);

    constructor(){
       //Invocamos el servicio en el constructor
       this.consoleToggleService.disableConsoleInProduction();


       //Estos logs no deberian aparecen en producción.

       console.log('🔥 Un buen desarrollador siempre usa console.log()');
       console.log('😥 Aunque esto no deberia mostrarse en un ambiente productivo!!!')
    }

}
