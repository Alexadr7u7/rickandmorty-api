import { Component } from '@angular/core';
import { HeroLayout } from "../../../shared/components/layout-hero";

@Component({
  selector: 'app-hero',
  imports: [HeroLayout],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
