import { Component, ViewChild } from '@angular/core';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  @ViewChild('localPopover') localPopover!: IonPopover;
  selectedLocalOption: string = '';

  // Datos de ejemplo para las cards
  cards = [
    {
      image: 'assets/imagenes/foto-card-superclasico.jpg',
      title: 'Partido: Fecha 15/16 SuperClasico',
      description: 'El superClasico tuvo lugar en la Bombonera donde los Xeneizes hicieron de local y enfrentaron a los Millonarios.',
      liked: false,
    },
    {
      image: 'assets/imagenes/foto-card-fecha10.jpg',
      title: 'Partido: fecha 10/16 Clasico',
      description: 'Resumen breve del encuentro y detalles relevantes.',
      liked: false,
    },
    {
      image: 'assets/imagenes/foto-card-fecha13.webp',
      title: 'Partido: Equipo E vs Equipo F',
      description: 'Resumen breve del encuentro y detalles relevantes.',
      liked: false,
    },
  ];

  constructor() {}

  // Maneja la selección de una opción del popover
  selectLocalOption(option: string) {
    this.selectedLocalOption = option;
    console.log('Opción seleccionada (local):', option);
  }

  // Alterna el estado "like" del card
  toggleLike(index: number) {
    this.cards[index].liked = !this.cards[index].liked;
    console.log('Like toggled for', index, this.cards[index].liked);
  }

  // Acción del botón "Colocar"
  placeItem(index: number) {
    console.log('Colocar acción para item:', index);
    // Aquí puedes agregar la lógica real: añadir a una lista, enviar petición, etc.
  }

  // Acción del botón "Más info"
  moreInfo(index: number) {
    console.log('Más info para item:', index);
    // Aquí puedes navegar a una página de detalle o abrir un modal
  }
}
