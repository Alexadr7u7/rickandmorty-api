import { Component, Output, EventEmitter, input } from '@angular/core';
import { Hero } from './hero/hero';
import { RickAndMortyService } from '../../services/rick-and-morty';
import { CommonModule } from '@angular/common';
import { ModalInfo } from './modal-info/modal-info';

@Component({
  selector: 'app-characters',
  imports: [Hero, CommonModule, ModalInfo],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {
  personajes: any[] = [];
  visibleCount = 10;
  isLoading = false;
  imageLoaded: boolean[] = [];
  skeletonArray = new Array(10);
  searchTerm = '';
  personajeSeleccionado: any = null;
  constructor(private rmService: RickAndMortyService) {}

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.obtenerPersonajes();
  }
  buscar() {
    this.onSearch.emit(this.searchTerm.trim());
  }
  obtenerPersonajes(): void {
    this.isLoading = false;
    this.rmService.getAllCharacters().subscribe((data) => {
      // Si hay término de búsqueda, filtra por nombre (case-insensitive)
      const personajesFiltrados = this.searchTerm
        ? data.filter((personaje: any) =>
            personaje.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          )
        : data;

      this.personajes = personajesFiltrados;
      this.imageLoaded = Array(this.personajes.length).fill(false);
      this.isLoading = true;
    });
  }

  verMas(): void {
    this.visibleCount += 10;
  }

  onImageLoad(index: number): void {
    this.imageLoaded[index] = true;
  }
  filtrarPorNombre(nombre: string): void {
    this.searchTerm = nombre;
    this.obtenerPersonajes();
  }
  abrirModal(personaje: any): void {
    this.personajeSeleccionado = personaje;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.personajeSeleccionado = null;
    document.body.style.overflow = 'auto';
  }
}
