import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty';
@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  constructor(private rickAndMortyService: RickAndMortyService) {}
  stats = {
    personajes: 0,
    episodios: 0,
    ubicaciones: 0,
  };

  ngOnInit() {
    this.rickAndMortyService.getTotalStats().subscribe((data) => {
      this.stats = {
        personajes: data.characters.info.count,
        episodios: data.episodes.info.count,
        ubicaciones: data.locations.info.count,
      };
    });
  }
}
