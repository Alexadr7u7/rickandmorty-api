import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-section-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="class">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class SectionContainer {
  @Input() class: string = '';
}
