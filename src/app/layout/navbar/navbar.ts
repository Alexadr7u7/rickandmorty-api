import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { IconMenu, IconClose } from "../../shared/icons/icons";
import { Logo } from "../../shared/components/logo";

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, RouterLinkActive, IconMenu, IconClose, Logo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;
  isMenuOpen = false;

  links = [
    {
      label: 'Inicio',
      path: '/',
    },
    {
      label: 'Personajes',
      path: '/personajes',
    },
    {
      label: 'Episodios',
      path: '/episodios',
    },
    {
      label: 'Lugares',
      path: '/lugares',
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
