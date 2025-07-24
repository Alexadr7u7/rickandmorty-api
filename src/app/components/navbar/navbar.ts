import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cambia isScrolled si el scroll vertical es mayor a 0
    this.isScrolled = window.pageYOffset > 0;
  }
  closeMenu() {
    const collapse = document.querySelector(
      '#hs-navbar-example-collapse'
    ) as HTMLElement;
    const target = document.querySelector('#hs-navbar-example') as HTMLElement;
    if (target?.classList.contains('block')) {
      collapse?.click(); // emula el click en el botón hamburguesa
    }
  }
}
