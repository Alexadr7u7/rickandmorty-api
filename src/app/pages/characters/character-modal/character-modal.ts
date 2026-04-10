import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal } from "../../../shared/components/modal";

@Component({
  selector: 'app-character-modal',
  imports: [CommonModule, Modal],
  templateUrl: './character-modal.html',
  styleUrl: './character-modal.css',
})
export class CharacterModal {
@Input() personaje: any = null;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
    document.body.style.overflow = 'auto';
  }
}
