import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../../shared/ui/button';
import { CharacterCard } from '../character-card/character-card';
import { EmptyState } from "../../../shared/components/empty-state";
import { CardSkeleton } from "../../../shared/components/skeleton-card";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, CharacterCard, Button, EmptyState, CardSkeleton],
  templateUrl: './character-list.html',
})
export class CharacterList {
  @Input() personajes: any[] = [];
  @Input() isLoadingInitial = false;
  @Input() isLoadingMore = false;
  @Input() imageLoaded: boolean[] = [];
  @Input() currentPage = 0;
  @Input() totalPages = 0;
  skeletonArray = new Array(10);

  @Output() cardClicked = new EventEmitter<any>();
  @Output() imageLoadedChange = new EventEmitter<number>();
  @Output() verMas = new EventEmitter<void>();
  @Output() reiniciarFiltros = new EventEmitter<void>();
}