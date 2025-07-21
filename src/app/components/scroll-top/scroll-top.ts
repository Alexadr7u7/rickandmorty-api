import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop {
  mostrarBoton: boolean = false;

  // Detecta el scroll para mostrar u ocultar el botón
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarBoton = window.scrollY > 300;
  }

  // Método para subir suavemente
  scrollArriba(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
