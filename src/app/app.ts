import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ScrollTop } from './components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'rickandmorty-api';
}
