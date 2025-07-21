import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  imports: [CommonModule],
  templateUrl: './modal-info.html',
  styleUrl: './modal-info.css',
})
export class ModalInfo {
  @Input() personaje: any = null;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
    document.body.style.overflow = 'auto';
  }
}
