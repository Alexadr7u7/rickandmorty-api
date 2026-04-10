import { AfterViewInit, Component } from '@angular/core';
declare global {
  interface Window {
    HSCarousel: any;
  }
}

@Component({
  selector: 'ui-hero-layout',
  imports: [],
  template: `
    <section
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true,
    "interval": 4000,
    "pauseOnHover": false
  }'
      class="relative h-[90vh] overflow-hidden"
    >
      <div class="hs-carousel relative w-full h-full">
        <div
          class="hs-carousel-body absolute inset-0 flex transition-transform duration-700 opacity-0"
        >
          <div class="hs-carousel-slide h-full w-full">
            <div
              class="h-full w-full bg-cover bg-center"
              style="background-image: url('assets/img/rickandmorty.webp')"
            ></div>
          </div>
          <div class="hs-carousel-slide h-full w-full">
            <div
              class="h-full w-full bg-cover bg-center"
              style="background-image: url('assets/img/slider2.webp')"
            ></div>
          </div>
          <div class="hs-carousel-slide h-full w-full">
            <div
              class="h-full w-full bg-cover bg-center"
              style="background-image: url('assets/img/slider3.webp')"
            ></div>
          </div>
        </div>

        <div class="absolute inset-0 bg-black/60 z-10"></div>

        <ng-content />

        <div
          class="hs-carousel-pagination flex justify-center absolute bottom-5 inset-x-0 z-20 gap-x-2"
        ></div>
      </div>
    </section>
  `,
})
export class HeroLayout implements AfterViewInit  {

  ngAfterViewInit(): void {
      window.HSCarousel?.getInstance(
        document.querySelector('[data-hs-carousel]')
      ) || window.HSCarousel?.autoInit();
    }
}
