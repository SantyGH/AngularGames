import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,   // componente standalone para facilitar imports
  imports: [NgIf],    // importar NgIf para usar *ngIf en la plantilla
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
