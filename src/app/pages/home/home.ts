import { Component } from '@angular/core';
import { Portada } from './portada/portada';
import { MainCharacters } from './main-characters/main-characters';
import { Statistics } from './statistics/statistics';
import { Phrases } from './phrases/phrases';

@Component({
  selector: 'app-home',
  imports: [Portada, MainCharacters, Statistics, Phrases],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
