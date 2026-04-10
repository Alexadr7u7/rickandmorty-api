import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ScrollTop } from './layout/scroll-top/scroll-top';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'rickandmorty-api';
  ngAfterViewInit(): void {
    AOS.init({
      duration: 500,
    });

    // En caso de que ya esté inicializado y regreses a la ruta
    AOS.refreshHard(); // fuerza la relectura del DOM para animaciones
  }
}
