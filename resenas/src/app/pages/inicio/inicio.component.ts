import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true
})
export class InicioComponent {
  nombre = signal('Bienvenido a Zona Gamer');
  mostrarPromocion = signal(true);

  constructor() {
    setTimeout(() => {
      this.nombre.set('Explora el mundo de los videojuegos');
    }, 3000);

    setTimeout(() => {
      this.mostrarPromocion.set(false);
    }, 5000);
  }

  navegarAJuegos() {
    window.location.href = '/juegos';
  }
}
