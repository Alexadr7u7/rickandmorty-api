import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
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
}
