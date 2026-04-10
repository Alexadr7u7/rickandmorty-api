import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../ui/button';

@Component({
  selector: 'ui-empty-state',
  standalone: true,
  imports: [Button],
  template: `
    <div class="col-span-full flex flex-col items-center justify-center gap-3">
      <i class="fas fa-search text-4xl text-gray-400"></i>
      <p class="text-2xl font-bold text-gray-800">{{ message }}</p>
      <p class="text-base text-gray-500 text-center max-w-md">
        Intenta ajustar tu búsqueda o cambiar los filtros aplicados.
      </p>
      <ui-button (click)="reiniciar.emit()">
        <i class="fas fa-sync-alt mr-2"></i> Reiniciar filtros
      </ui-button>
    </div>
  `,
})
export class EmptyState {
  @Input() message = 'No se encontraron resultados';
  @Output() reiniciar = new EventEmitter<void>();
}