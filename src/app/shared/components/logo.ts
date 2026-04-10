import { Component } from '@angular/core';

@Component({
  selector: 'ui-logo',
  imports: [],
  template: ` <span
    class="inline-flex items-center gap-x-2 text-xl font-semibold text-white"
  >
    <img src="assets/img/logo.png" alt="logo" class="w-15 h-auto" />
    Rick & Morty
  </span>`,
})
export class Logo {}
