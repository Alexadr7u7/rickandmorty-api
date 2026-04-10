import { Component } from '@angular/core';

@Component({
  selector: 'ui-card-skeleton',
  standalone: true,
  template: `
    <div class="relative bg-white rounded-xl shadow-md flex overflow-hidden min-h-[180px] animate-pulse">
      <div class="w-40 h-full bg-gray-300 shrink-0"></div>
      <div class="flex-1 p-4 space-y-3">
        <div class="h-6 bg-gray-300 rounded w-1/2"></div>
        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  `,
})
export class CardSkeleton {}