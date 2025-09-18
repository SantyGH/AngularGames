import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Personaje {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  habilidades: string[];
  historia: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,          // <-- Importante para standalone
  imports: [CommonModule],   // <-- Aquí importas CommonModule
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  personajeSeleccionado: string = '';

  personajes: Personaje[] = [
    {
      id: 'kratos',
      nombre: 'Kratos (God of War)',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151326/ImagenesGame/yo1eebntppsihfshsjt2.png',
      descripcion: 'Guerrero espartano con fuerza descomunal y habilidades sobrenaturales.',
      habilidades: ['Fuerza extrema', 'Control de magia', 'Combate cuerpo a cuerpo'],
      historia: `Kratos es el protagonista de God of War, un guerrero espartano que, tras una serie de tragedias personales,
        busca redención enfrentando dioses y monstruos de la mitología griega y nórdica. Es conocido por su temperamento
        feroz y su icónica arma, las Cadenas del Caos.`
    },
    {
      id: 'ellie',
      nombre: 'Ellie (The Last of Us)',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151321/ImagenesGame/d6wkydqhneu8dxnffj95.png',
      descripcion: 'Joven sobreviviente con gran determinación y habilidades de combate.',
      habilidades: ['Sigilo', 'Tiro con arco', 'Supervivencia'],
      historia: `Ellie es una adolescente inmune a una infección que ha devastado la humanidad. A lo largo de The Last of Us,
        lucha para sobrevivir en un mundo post-apocalíptico, enfrentando enemigos humanos y criaturas infectadas,
        mientras desarrolla relaciones profundas y complejas.`
    },
    {
      id: 'sackboy',
      nombre: 'Sackboy (LittleBigPlanet)',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151331/ImagenesGame/ekcwkm60ye79wv7hklgw.avif',
      descripcion: 'Pequeño y adorable héroe hecho de tela con mucha creatividad.',
      habilidades: ['Saltos acrobáticos', 'Personalización', 'Creación de niveles'],
      historia: `Sackboy es la estrella de LittleBigPlanet, un juego que celebra la creatividad y la imaginación.
        Aunque pequeño y de aspecto adorable, es un aventurero valiente que explora mundos variados y ayuda a resolver puzzles.`
    },
    {
      id: 'marcus',
      nombre: 'Marcus Fénix (Gears of War)',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151327/ImagenesGame/ly1efkdebgm6qj4wp2oh.png',
      descripcion: 'Soldado endurecido y líder de la COG en la saga Gears of War.',
      habilidades: ['Combate con armas pesadas', 'Liderazgo táctico', 'Resistencia y fuerza física'],
      historia: `Marcus Fénix es el protagonista principal de Gears of War, un soldado endurecido que lucha para salvar a la humanidad
    de los Locust, una amenaza subterránea. Es conocido por su valentía, liderazgo y su icónica motosierra acoplada a su rifle.`
    },

    {
      id: 'doomguy',
      nombre: 'Doom Guy (Doom)',
      imagen: ' https://res.cloudinary.com/doqenm8du/image/upload/v1758151319/ImagenesGame/rxd4wmtfhmvyqmi3gxyw.png',
      descripcion: 'Marines espacial conocido por su brutalidad contra demonios del infierno.',
      habilidades: ['Combate intenso', 'Uso de armas pesadas', 'Resistencia extrema'],
      historia: `Doom Guy es el protagonista de la icónica saga Doom. Armada hasta los dientes, se enfrenta a hordas de demonios
        para salvar a la humanidad de la destrucción infernal, destacando por su estilo directo y brutal.`
    },
    {
      id: 'fablehero',
      nombre: 'Héroe de Fable',
      imagen: 'https://res.cloudinary.com/doqenm8du/image/upload/v1758151324/ImagenesGame/w5reapzrtms1y9wznr1i.png',
      descripcion: 'Héroe elegido con el destino de Albion en sus manos.',
      habilidades: ['Magia', 'Combate cuerpo a cuerpo', 'Carisma y decisiones morales'],
      historia: `El Héroe de Fable es una figura legendaria que puede moldear el destino de Albion. Sus decisiones
        y acciones afectan la historia y el mundo a su alrededor, permitiendo múltiples caminos y finales.`
    }
  ];

  seleccionarPersonaje(id: string) {
    this.personajeSeleccionado = id === this.personajeSeleccionado ? '' : id;
  }
}
