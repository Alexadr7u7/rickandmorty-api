import { Component, EventEmitter, Output } from '@angular/core';
import { IconClose } from "../icons/icons";

@Component({
  selector: 'ui-modal',
  imports: [IconClose],
  template: ` 
  <div
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100]"
  >
    <div
      class="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-8 relative text-gray-800 -"
    >
      <button
        class="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-gray-800"
        (click)="cerrarModal()"
      >
        <icon-close />
      </button>
      <div class="flex flex-col md:flex-row gap-6">
      <ng-content />
      </div>
    </div>
  </div>`,
})
export class Modal {
  @Output() cerrar = new EventEmitter<void>();
    cerrarModal() {
    this.cerrar.emit();
    document.body.style.overflow = 'auto';
  }
}
