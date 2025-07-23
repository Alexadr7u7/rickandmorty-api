import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  searchTerm: string = '';
  @Output() buscar = new EventEmitter<string>();

  buscarLocation() {
    this.buscar.emit(this.searchTerm);
  }
}
