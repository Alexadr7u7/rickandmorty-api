import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-episodes',
  imports: [Hero],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css',
})
export class Episodes {}
