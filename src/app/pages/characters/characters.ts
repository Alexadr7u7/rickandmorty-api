import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty';
import { CommonModule } from '@angular/common';
import { SearchHero } from '../../shared/components/search-hero';
import { SectionContainer } from "../../shared/components/section-container";
import { CharacterModal } from "./character-modal/character-modal";
import { CharacterList } from "./character-list/character-list";

@Component({
  selector: 'app-characters',
  imports: [CommonModule, SearchHero, SectionContainer, CharacterModal, CharacterList],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {
  personajes: any[] = [];
  isLoadingInitial = true;
  isLoadingMore = false;
  imageLoaded: boolean[] = [];
  skeletonArray = new Array(10);
  personajeSeleccionado: any = null;
  currentPage = 1;
  totalPages = 0;
  searchTerm = '';
  status = '';
  species = '';
  gender = '';
  paginasCargadas = new Set<number>();

  filters = [
    {
      label: 'Estatus', model: 'status',
      options: [
        { value: 'alive', label: 'Vivo' },
        { value: 'dead', label: 'Muerto' },
        { value: 'unknown', label: 'Desconocido' },
      ],
    },
    {
      label: 'Especie', model: 'species',
      options: [
        { value: 'Human', label: 'Humano' },
        { value: 'Alien', label: 'Alien' },
        { value: 'Robot', label: 'Robot' },
        { value: 'Humanoid', label: 'Humanoide' },
      ],
    },
    {
      label: 'Género', model: 'gender',
      options: [
        { value: 'male', label: 'Hombre' },
        { value: 'female', label: 'Mujer' },
        { value: 'genderless', label: 'Sin género' },
        { value: 'unknown', label: 'Desconocido' },
      ],
    },
  ];

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

    this.currentPage === 1
      ? (this.isLoadingInitial = true)
      : (this.isLoadingMore = true);

    this.rmService
      .getCharactersByPage(this.currentPage, this.searchTerm, this.status, this.species, this.gender)
      .subscribe({
        next: (response) => {
          const nuevos = response.results || [];
          this.personajes = [...this.personajes, ...nuevos];
          this.imageLoaded.push(...Array(nuevos.length).fill(false));
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

  buscar(nombre: string): void {
    this.searchTerm = nombre;
    this.resetAndLoad();
  }

  aplicarFiltros(filtros: Record<string, string>): void {
    this.status = filtros['status'] ?? '';
    this.species = filtros['species'] ?? '';
    this.gender = filtros['gender'] ?? '';
    this.resetAndLoad();
  }

  reiniciarFiltros(): void {
    this.searchTerm = '';
    this.status = '';
    this.species = '';
    this.gender = '';
    this.resetAndLoad();
  }

  verMas(): void {
    if (this.currentPage < this.totalPages && !this.isLoadingMore) {
      this.currentPage++;
      this.obtenerPersonajes();
    }
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
}