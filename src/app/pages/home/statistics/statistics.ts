import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics implements AfterViewInit {
  @ViewChild('counterSection', { static: false }) counterSection!: ElementRef;

  personajes = 0;
  episodios = 0;
  ubicaciones = 0;

  private targets = { personajes: 0, episodios: 0, ubicaciones: 0 };
  private hasAnimated = false;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getTotalStats().subscribe((data) => {
      this.targets = {
        personajes: data.characters.info.count,
        episodios: data.episodes.info.count,
        ubicaciones: data.locations.info.count,
      };
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated && this.targets.personajes > 0) {
          this.hasAnimated = true;
          this.startCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(this.counterSection.nativeElement);
  }

  startCounters() {
    this.animateCounter('personajes', this.targets.personajes, 1500);
    this.animateCounter('episodios', this.targets.episodios, 1200);
    this.animateCounter('ubicaciones', this.targets.ubicaciones, 1300);
  }

  animateCounter(
    property: 'personajes' | 'episodios' | 'ubicaciones',
    target: number,
    duration: number
  ) {
    const startTime = performance.now();
    const update = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      this[property] = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(update);
      else this[property] = target;
    };
    requestAnimationFrame(update);
  }
}