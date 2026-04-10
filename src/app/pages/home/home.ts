import { Component } from '@angular/core';
import { MainCharacters } from './main-characters/main-characters';
import { Statistics } from './statistics/statistics';
import { Phrases } from './phrases/phrases';
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-home',
  imports: [ MainCharacters, Statistics, Phrases, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
