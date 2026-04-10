import { FormsModule } from '@angular/forms';

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  searchTerm: string = '';
  @Output() buscar = new EventEmitter<string>();

  buscarEpisodio() {
    this.buscar.emit(this.searchTerm);
  }
}
