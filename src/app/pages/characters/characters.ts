import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { MainCharacters } from '../home/main-characters/main-characters';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-characters',
  imports: [Navbar, MainCharacters, Hero],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {}
