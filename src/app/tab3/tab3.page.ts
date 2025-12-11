import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
 // Vista inicial
  view: 'login' | 'register' = 'login';

  // Cambia la pantalla según el botón elegido
  setView(mode: 'login' | 'register') {
    this.view = mode;
  }
  constructor() {}

}
