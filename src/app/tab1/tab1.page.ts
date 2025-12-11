import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonPopover, IonContent } from '@ionic/angular';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

Swiper.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('localPopover') localPopover!: IonPopover;
  @ViewChild('content', { static: false }) content!: IonContent;

  constructor() {}

  // 🔥 Inicializa el carrusel cuando el DOM ya está cargado
  ngAfterViewInit() {
    setTimeout(() => {
      new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }, 150);
  }

  // ---------------------------------------------------
  // Resto de tu código (NO lo toqué)
  // ---------------------------------------------------

  selectedLocalOption: string = '';

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

  toggleLike(index: number) {
    this.cards[index].liked = !this.cards[index].liked;
  }

  placeItem(index: number) {
    console.log('Colocar:', index);
  }

  moreInfo(index: number) {
    console.log('Más info:', index);
  }

  selectLocalOption(option: string) {
    if (option === 'apertura') {
      const target = document.getElementById('campeonApertura');
      if (target) {
        const y = target.offsetTop;
        this.content.scrollToPoint(0, y, 500);
      }
    }
  }
}
