import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: false // dejamos falso porque ahora usamos módulo
})
export class Tab3Page {
  // Vista inicial
  view: 'login' | 'register' = 'login';

  // Cambia entre login y registro
  setView(mode: 'login' | 'register') {
    this.view = mode;
  }

  constructor() {}
}
