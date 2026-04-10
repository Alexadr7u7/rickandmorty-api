import { Component } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [],
  template: ` 
     <button 
        class="bg-purple-600 text-white font-semibold px-6 py-2  hover:bg-purple-700 transition cursor-pointer">
        <ng-content ></ng-content>
      </button>
  `,
})
export class Button {}
