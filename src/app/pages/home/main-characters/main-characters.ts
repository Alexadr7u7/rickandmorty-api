import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty';

@Component({
  selector: 'app-main-characters',
  imports: [CommonModule],
  templateUrl: './main-characters.html',
  styleUrl: './main-characters.css',
})
export class MainCharacters {
  personajes: any[] = [];
  isLoading = true;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getMainCharactersMain().subscribe((data) => {
      this.personajes = data.map((p) => ({
        nombre: p.name,
        estado: p.status,
        descripcion: `${p.species} ${p.gender.toLowerCase()} de ${
          p.origin.name
        }`,
        imagen: p.image,
      }));
      this.isLoading = false;
    });
  }
}
