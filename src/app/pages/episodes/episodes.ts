import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { RickAndMortyService } from '../../services/rick-and-morty';
import { CommonModule } from '@angular/common';
import { Modal } from './modal/modal';
@Component({
  selector: 'app-episodes',
  imports: [Hero, CommonModule, Modal],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css',
})
export class Episodes {
  episodios: any[] = [];
  isLoadingInitial = true;
  isLoadingMore = false;
  currentPage = 1;
  totalPages = 0;
  skeletonArray = new Array(10);
  paginasCargadas: Set<number> = new Set();
  episodio: any = null;
  personajesModal: any[] = [];
  episodioSeleccionado: any = null;
  searchTerm: string = '';

  constructor(private rmService: RickAndMortyService) {}

  ngOnInit(): void {
    this.resetAndLoad();
  }

  resetAndLoad(): void {
    this.episodios = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.paginasCargadas.clear();
    this.isLoadingInitial = true;
    this.isLoadingMore = false;
    this.obtenerEpisodios();
  }

  obtenerEpisodios(): void {
    if (this.paginasCargadas.has(this.currentPage)) return;

    if (this.currentPage === 1) {
      this.isLoadingInitial = true;
    } else {
      this.isLoadingMore = true;
    }

    this.rmService.getEpisodes(this.searchTerm, this.currentPage).subscribe({
      next: (response) => {
        const nuevos = response.results || [];
        this.episodios = [...this.episodios, ...nuevos];
        this.totalPages = response.info?.pages || 0;
        this.paginasCargadas.add(this.currentPage);
        this.isLoadingInitial = false;
        this.isLoadingMore = false;
      },
      error: () => {
        this.episodios = [];
        this.totalPages = 0;
        this.isLoadingInitial = false;
        this.isLoadingMore = false;
      },
    });
  }

  verMas(): void {
    if (this.currentPage < this.totalPages && !this.isLoadingMore) {
      this.currentPage++;
      this.obtenerEpisodios();
    }
  }
  abrirModal(episodio: any): void {
    this.episodioSeleccionado = episodio;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.episodioSeleccionado = null;
    document.body.style.overflow = 'auto';
  }
  buscarPorId(id: number): void {
    this.isLoadingInitial = true;
    this.episodios = [];
    this.totalPages = 0;

    this.rmService.getEpisodeById(id).subscribe({
      next: (episodio) => {
        this.episodios = [episodio];
        this.isLoadingInitial = false;
      },
      error: () => {
        this.episodios = [];
        this.isLoadingInitial = false;
      },
    });
  }

  onBuscar(termino: string): void {
    this.searchTerm = termino.trim();
    const esNumero = /^\d+$/.test(this.searchTerm);

    if (esNumero) {
      this.buscarPorId(parseInt(this.searchTerm));
    } else {
      this.resetAndLoad(); // nombre normal
    }
  }
  reiniciarFiltros(): void {
    this.searchTerm = '';
    this.resetAndLoad();
  }
}
