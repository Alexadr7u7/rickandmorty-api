import { Component } from '@angular/core';
import { MainCharacters } from './main-characters/main-characters';
import { Statistics } from './statistics/statistics';
import { Phrases } from './phrases/phrases';
import { Hero } from "./hero/hero";
import { SectionContainer } from "../../shared/components/section-container";
import { TittleSection } from "../../shared/components/title-section";

@Component({
  selector: 'app-home',
  imports: [MainCharacters, Statistics, Phrases, Hero, SectionContainer, TittleSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
