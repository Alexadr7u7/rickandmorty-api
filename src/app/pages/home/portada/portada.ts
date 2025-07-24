import { AfterViewInit, Component } from '@angular/core';
declare global {
  interface Window {
    HSCarousel: any;
  }
}

@Component({
  selector: 'app-portada',
  templateUrl: './portada.html',
  styleUrls: ['./portada.css'],
  standalone: true,
})
export class Portada implements AfterViewInit {
  ngAfterViewInit(): void {
    // @ts-ignore: avoid type errors if preline is global
    window.HSCarousel?.getInstance(
      document.querySelector('[data-hs-carousel]')
    ) || window.HSCarousel?.autoInit();
  }
}
