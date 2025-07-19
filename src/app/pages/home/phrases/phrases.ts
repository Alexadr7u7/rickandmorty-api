import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty';
interface Frase {
  texto: string;
  nombre: string;
  descripcion: string;
  personajeId: number;
  imagen?: string; // opcional porque se carga después
}

@Component({
  selector: 'app-phrases',
  imports: [CommonModule],
  templateUrl: './phrases.html',
  styleUrl: './phrases.css',
})
export class Phrases {
  frases: Frase[] = [
    {
      texto: '“Cuando te das cuenta de que nada importa, el universo es tuyo.”',
      nombre: 'Rick',
      descripcion: 'Científico loco',
      personajeId: 1,
    },
    {
      texto:
        '“¿Tienes a un planeta completo generando electricidad para ti? ¡Eso es esclavitud!”',
      nombre: 'Morty',
      descripcion: 'Nieto nervioso',
      personajeId: 2,
    },
    {
      texto:
        '“¿Sabes qué es lo mejor que puedes hacer para la gente que depende de ti? Sé honesto con ellos, incluso significa liberarlos.”',
      nombre: 'Sr. Meeseeks',
      descripcion: 'Versión vegetal',
      personajeId: 242,
    },
    {
      texto:
        '“Cuando dos personas crean una vida juntas, dejan de lado sus vidas previas como individuos.”',
      nombre: 'Beth Smith',
      descripcion: 'Científico loco',
      personajeId: 4,
    },
    {
      texto:
        '“¿Así que ahora se supone que debemos de dormir todas las noches? ¿Eres consciente de que la noche es como la mitad de todo el tiempo?”',
      nombre: 'Rick',
      descripcion: 'Científico loco',
      personajeId: 1,
    },
    {
      texto:
        '“No huyas. Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión.”',
      nombre: 'Morty',
      descripcion: 'Nieto nervioso',
      personajeId: 2,
    },
  ];
  constructor(private characterService: RickAndMortyService) {}

  ngOnInit() {
    this.frases.forEach((frase) => {
      this.characterService.getCharacterById(frase.personajeId).subscribe({
        next: (data: any) => {
          frase.imagen = data.image;
        },
        error: (err) => {
          console.error('Error al obtener personaje', err);
        },
      });
    });
  }
}
