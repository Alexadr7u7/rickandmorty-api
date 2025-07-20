import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { MainCharacters } from '../home/main-characters/main-characters';

@Component({
  selector: 'app-characters',
  imports: [Navbar, MainCharacters],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {}
