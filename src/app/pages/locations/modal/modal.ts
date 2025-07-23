import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../../services/rick-and-morty';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal implements OnChanges {
  @Input() location: any = null;
  @Output() cerrar = new EventEmitter<void>();

  residentes: any[] = [];

  constructor(private rmService: RickAndMortyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location) {
      this.cargarResidentesDelLugar();
    }
  }

  cargarResidentesDelLugar(): void {
    const ids = (this.location.residents || [])
      .map((url: string) => url.split('/').pop()) // extraer solo el ID
      .join(','); // unirlos por coma, ej: "1,2,3"

    this.rmService.getCharacterById(ids).subscribe({
      next: (res) => {
        this.residentes = Array.isArray(res) ? res : [res];
      },
      error: () => {
        this.residentes = [];
      },
    });
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
