import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  searchTerm: string = '';
  status: string = '';
  species: string = '';
  gender: string = '';

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onFilterChange: EventEmitter<{
    status: string;
    species: string;
    gender: string;
  }> = new EventEmitter();

  buscar(): void {
    this.onSearch.emit(this.searchTerm.trim());
  }

  aplicarFiltros(): void {
    this.onFilterChange.emit({
      status: this.status,
      species: this.species,
      gender: this.gender,
    });

    const card = document.getElementById('filtrosCard');
    card?.classList.add('hidden');
  }

  cancelarFiltros(): void {
    this.status = '';
    this.species = '';
    this.gender = '';
    this.onFilterChange.emit({
      status: '',
      species: '',
      gender: '',
    });

    const card = document.getElementById('filtrosCard');
    card?.classList.add('hidden');
  }
}
