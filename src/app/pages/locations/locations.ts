import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty';
import { Modal } from './modal/modal';

@Component({
  selector: 'app-locations',
  imports: [Modal, Hero, CommonModule],
  templateUrl: './locations.html',
  styleUrl: './locations.css',
})
export class Locations {
  locations: any[] = [];
  isLoadingInitial = true;
  isLoadingMore = false;
  currentPage = 1;
  totalPages = 0;
  skeletonArray = new Array(10);
  paginasCargadas: Set<number> = new Set();
  location: any = null;
  locationSeleccionado: any = null;
  searchTerm: string = '';
  constructor(private rmService: RickAndMortyService) {}
  ngOnInit(): void {
    this.resetAndLoad();
  }

  resetAndLoad(): void {
    this.locations = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.paginasCargadas.clear();
    this.isLoadingInitial = true;
    this.isLoadingMore = false;
    this.obtenerLocation();
  }

  obtenerLocation(): void {
    if (this.paginasCargadas.has(this.currentPage)) return;

    if (this.currentPage === 1) {
      this.isLoadingInitial = true;
    } else {
      this.isLoadingMore = true;
    }

    this.rmService.getLocations(this.searchTerm, this.currentPage).subscribe({
      next: (response) => {
        const nuevos = response.results || [];
        this.locations = [...this.locations, ...nuevos];
        this.totalPages = response.info?.pages || 0;
        this.paginasCargadas.add(this.currentPage);
        this.isLoadingInitial = false;
        this.isLoadingMore = false;
      },
      error: () => {
        this.locations = [];
        this.totalPages = 0;
        this.isLoadingInitial = false;
        this.isLoadingMore = false;
      },
    });
  }

  verMas(): void {
    if (this.currentPage < this.totalPages && !this.isLoadingMore) {
      this.currentPage++;
      this.obtenerLocation();
    }
  }
  onBuscar(termino: string): void {
    this.searchTerm = termino.trim();
    this.resetAndLoad(); // nombre normal
  }
  reiniciarFiltros(): void {
    this.searchTerm = '';
    this.resetAndLoad();
  }
  abrirModal(location: any): void {
    this.locationSeleccionado = location;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.locationSeleccionado = null;
    document.body.style.overflow = 'auto';
  }
}
