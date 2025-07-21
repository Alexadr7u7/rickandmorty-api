import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
@Component({
  selector: 'app-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  searchTerm: string = '';

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  buscar() {
    this.onSearch.emit(this.searchTerm.trim());
  }
}
