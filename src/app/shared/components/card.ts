import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [],
  template: `
    <div
      class="group relative bg-white shadow-md flex overflow-hidden min-h-[180px] transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-lg"
    >
  <ng-content></ng-content>
  </div>
  `,
})
export class Card {
  @Input() message = 'No se encontraron resultados';
  @Output() reiniciar = new EventEmitter<void>();
}
