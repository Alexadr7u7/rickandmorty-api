import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-tittle-section',
  standalone: true,
  template: `
    <section class="flex flex-col items-center text-center mb-16 relative">

      <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
        <span class="text-xs font-bold tracking-[0.2em] text-primary uppercase">{{ title }}</span>
      </div>

      @if (subtitle) {
        <h2 class="text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-4">
          {{ subtitle }}
          @if (subtitleHighlight) {
            <span class="text-primary italic"> {{ subtitleHighlight }}</span>
          }
        </h2>
      }

      @if (description) {
        <p class="max-w-xl text-gray-400 font-medium text-lg leading-relaxed">
          {{ description }}
        </p>
      }

      <div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-8 opacity-40"></div>

    </section>
  `,
})
export class TittleSection {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() subtitleHighlight?: string;
  @Input() description?: string;
}