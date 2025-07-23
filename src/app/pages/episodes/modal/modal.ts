import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() episodio: any = null;
  @Output() cerrar = new EventEmitter<void>();

  personajes: any[] = [];

  constructor(private rmService: RickAndMortyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['episodio'] && this.episodio) {
      this.cargarPersonajesDelEpisodio();
    }
  }

  cargarPersonajesDelEpisodio(): void {
    const ids = this.episodio.characters
      .map((url: string) => url.split('/').pop())
      .join(',');

    this.rmService.getCharacterById(ids).subscribe({
      next: (res) => {
        this.personajes = Array.isArray(res) ? res : [res];
      },
      error: () => {
        this.personajes = [];
      },
    });
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
