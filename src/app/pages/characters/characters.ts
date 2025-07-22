import { Component, Output, EventEmitter } from '@angular/core';
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
  isLoadingInitial = true; // ✅ para la carga inicial
  isLoadingMore = false; // ✅ para el botón "ver más"
  imageLoaded: boolean[] = [];
  skeletonArray = new Array(10);
  searchTerm = '';
  personajeSeleccionado: any = null;
  currentPage = 1;
  totalPages = 0;
  status: string = ''; // alive, dead, unknown
  species: string = ''; // especie escrita o tipo
  gender: string = ''; // male, female, genderless, unknown

  paginasCargadas: Set<number> = new Set();

  constructor(private rmService: RickAndMortyService) {}

  ngOnInit(): void {
    this.resetAndLoad();
  }

  resetAndLoad(): void {
    this.personajes = [];
    this.imageLoaded = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.paginasCargadas.clear();
    this.isLoadingInitial = true;
    this.isLoadingMore = false;
    this.obtenerPersonajes();
  }

  obtenerPersonajes(): void {
    if (this.paginasCargadas.has(this.currentPage)) return;

    // Cargar la página según el contexto
    if (this.currentPage === 1) {
      this.isLoadingInitial = true;
    } else {
      this.isLoadingMore = true;
    }

    this.rmService
      .getCharactersByPage(
        this.currentPage,
        this.searchTerm,
        this.status,
        this.species,
        this.gender
      )
      .subscribe({
        next: (response) => {
          const nuevosPersonajes = response.results || [];
          this.personajes = [...this.personajes, ...nuevosPersonajes];
          this.imageLoaded.push(...Array(nuevosPersonajes.length).fill(false));
          this.totalPages = response.info?.pages || 0;
          this.paginasCargadas.add(this.currentPage);

          this.isLoadingInitial = false;
          this.isLoadingMore = false;
        },
        error: () => {
          this.personajes = [];
          this.totalPages = 0;
          this.isLoadingInitial = false;
          this.isLoadingMore = false;
        },
      });
  }

  verMas(): void {
    if (this.currentPage < this.totalPages && !this.isLoadingMore) {
      this.currentPage++;
      this.obtenerPersonajes();
    }
  }

  filtrarPorNombre(nombre: string): void {
    this.searchTerm = nombre;
    this.resetAndLoad();
  }

  onImageLoad(index: number): void {
    this.imageLoaded[index] = true;
  }

  abrirModal(personaje: any): void {
    this.personajeSeleccionado = personaje;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.personajeSeleccionado = null;
    document.body.style.overflow = 'auto';
  }

  aplicarFiltrosAvanzados(filtros: {
    status: string;
    species: string;
    gender: string;
  }): void {
    this.status = filtros.status;
    this.species = filtros.species;
    this.gender = filtros.gender;
    this.resetAndLoad();
  }
  reiniciarFiltros(): void {
    this.searchTerm = '';
    this.status = '';
    this.species = '';
    this.gender = '';
    this.currentPage = 1;
    this.personajes = [];
    this.totalPages = 0;
    this.resetAndLoad();
  }
}
