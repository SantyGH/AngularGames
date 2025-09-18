import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ NECESARIO PARA *ngFor

@Component({
  selector: 'app-juegos',
  standalone: true, // Solo si estás usando standalone components
  imports: [CommonModule], // ✅ AGREGA ESTO
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juegosDestacados = [
    {
      nombre: 'Super Mario Odyssey',
      descripcion: 'Una aventura en 3D llena de mundos sorprendentes y creatividad.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151328/ImagenesGame/c5tijflrrajyssdyuh8x.webp'
    },
    {
      nombre: 'Zelda: Breath of the Wild',
      descripcion: 'Explora Hyrule en un viaje épico de libertad y descubrimiento.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151332/ImagenesGame/b5gxvclmkfneatkjhvth.jpg'
    },
    {
      nombre: 'Halo Infinite',
      descripcion: 'El Jefe Maestro regresa en una experiencia de acción sin límites.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151322/ImagenesGame/pjkyekuyppyrzitcwuck.jpg'
    },
    {
      nombre: 'God of War: Ragnarok',
      descripcion: 'Kratos y Atreus viajan por los Nueve Reinos enfrentando dioses nórdicos.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151327/ImagenesGame/godofwar.jpg'
    },
    {
      nombre: 'Uncharted 4',
      descripcion: 'Nathan Drake regresa para su última aventura en busca de tesoros y secretos.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151329/ImagenesGame/uncharted4.jpg'
    },
    {
      nombre: 'Shadow of the Tomb Raider',
      descripcion: 'Lara Croft enfrenta su destino en un mundo lleno de trampas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151330/ImagenesGame/tombraider.jpg'
    }
  ];

  juegosAccion = [
    {
      nombre: 'Halo Infinite',
      descripcion: 'El Jefe Maestro regresa en una nueva aventura llena de adrenalina, con combate renovado y mundo semiabierto.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151322/ImagenesGame/halogame.jpg'
    },
    {
      nombre: 'God of War: Ragnarok',
      descripcion: 'Kratos y Atreus viajan por los Nueve Reinos enfrentando dioses nórdicos. Un juego brutal y emocional.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151327/ImagenesGame/godofwar.jpg'
    },
    {
      nombre: 'Fall Guys',
      descripcion: 'Diviértete en una batalla de obstáculos con hasta 60 jugadores. ¡Solo uno será el ganador!',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151331/ImagenesGame/fallguys.jpg'
    },
    {
      nombre: 'DOOM Eternal',
      descripcion: '¡El Doom Slayer regresa para destruir a las legiones del infierno! Acción sin descanso en un entorno infernal.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151333/ImagenesGame/doom.jpg'
    }
  ];

  juegosAventura = [
    {
      nombre: 'Uncharted 4',
      descripcion: 'Nathan Drake regresa para su última aventura en busca de tesoros y secretos en ruinas perdidas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151329/ImagenesGame/uncharted4.jpg'
    },
    {
      nombre: 'Shadow of the Tomb Raider',
      descripcion: 'Lara Croft enfrenta su destino en un mundo lleno de trampas, tumbas y civilizaciones antiguas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151330/ImagenesGame/tombraider.jpg'
    },
    {
      nombre: 'The Last of Us',
      descripcion: 'Una historia épica sobre supervivencia y la lucha por la humanidad en un mundo post-apocalíptico.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151329/ImagenesGame/thelastofus.jpg'
    },
    {
      nombre: 'Red Dead Redemption 2',
      descripcion: 'Viaja por el viejo oeste y vive una historia emocionante con Arthur Morgan y los Van der Linde.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151328/ImagenesGame/reddead2.jpg'
    }
  ];

  juegosRPG = [
    {
      nombre: 'The Witcher 3',
      descripcion: 'Controla a Geralt en un mundo enorme lleno de decisiones morales, monstruos y tramas profundas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151330/ImagenesGame/witcher3.jpg'
    },
    {
      nombre: 'Elden Ring',
      descripcion: 'De los creadores de Dark Souls y George R.R. Martin, un RPG oscuro con exploración abierta y combates difíciles.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151330/ImagenesGame/eldenring.jpg'
    },
    {
      nombre: 'Dragon Age: Inquisition',
      descripcion: 'Lucha por salvar Thedas mientras exploras una tierra llena de magia, monstruos y alianzas complejas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151326/ImagenesGame/dragonage.jpg'
    },
    {
      nombre: 'Fallout 4',
      descripcion: 'Enfréntate a un futuro post-apocalíptico mientras exploras el mundo abierto de Boston y sus ruinas.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151331/ImagenesGame/fallout4.jpg'
    }
  ];

  juegosTerror = [
    {
      nombre: 'Resident Evil 4 Remake',
      descripcion: 'Leon S. Kennedy regresa para rescatar a la hija del presidente. Gráficos actualizados y más tensión que nunca.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151331/ImagenesGame/residentevil4.jpg'
    },
    {
      nombre: 'Dead Space Remake',
      descripcion: 'Una pesadilla espacial reimaginada. Isaac Clarke enfrenta horrores en una nave infestada por necromorfos.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151326/ImagenesGame/deadspace.jpg'
    },
    {
      nombre: 'The Evil Within',
      descripcion: 'Un thriller psicológico que te llevará a través de pesadillas y horrores espantosos en un mundo perturbador.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151331/ImagenesGame/theevilwithin.jpg'
    },
    {
      nombre: 'Silent Hill 2',
      descripcion: 'Explora los oscuros y terroríficos secretos de la ciudad mientras enfrentas tus peores miedos.',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151330/ImagenesGame/silenthill2.jpg'
    }
  ];
}
