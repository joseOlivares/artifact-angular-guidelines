//Serrvicio para deshabilitar console.log en produccion
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoleToggleService {

  constructor() { }
  /**
   * Disable console output in production mode to avoid sensitive information
   * leaking and to improve performance.
   * author: José Luis Olivares
   */
  disableConsoleInProduction(): void {
    if(environment.production){
      console.warn(`🚨 Console output is disabled on production!`);
      console.log = function():void{};
      console.debug = function():void{};
      console.warn = function():void{};
      console.info = function():void{};
    }
  }
}
