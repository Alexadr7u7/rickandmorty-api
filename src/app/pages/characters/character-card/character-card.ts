import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSkeleton } from "../../../shared/components/skeleton-card";
import { Card } from "../../../shared/components/card";

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, CardSkeleton, Card],
  templateUrl: './character-card.html',
})
export class CharacterCard {
  @Input() personaje: any;
  @Input() index: number = 0;
  @Input() imageLoaded: boolean = false;
  @Output() clicked = new EventEmitter<any>();
  @Output() imageLoadedChange = new EventEmitter<number>();

  onImageLoad(): void {
    this.imageLoadedChange.emit(this.index);
  }
}