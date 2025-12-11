import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  // Lista de partidos en vivo
  liveMatches = [
    { home: 'River Plate', away: 'Boca Juniors', score: '1 - 0', time: '45\'', stadium: 'Monumental' },
    { home: 'Racing', away: 'Independiente', score: '0 - 0', time: '30\'', stadium: 'Cilindro' },
    { home: 'San Lorenzo', away: 'Huracán', score: '2 - 1', time: '75\'', stadium: 'Nuevo Gasómetro' }
  ];

  constructor() {}
}
