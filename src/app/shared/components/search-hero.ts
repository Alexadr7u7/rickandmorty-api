import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterGroup {
  label: string;
  model: string;
  options: FilterOption[];
}

@Component({
  selector: 'ui-search-hero',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section
      class="relative bg-[#14141F] text-white py-20 px-6 overflow-visible"
    >
      @if (imageSrc) {
        <img
          [src]="imageSrc"
          [alt]="imageAlt"
          class="absolute bottom-0 right-0 max-w-none h-70 object-contain z-0 pointer-events-none select-none"
        />
      }

      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl font-extrabold leading-tight mb-4"
          data-aos="fade-down"
        >
          {{ title }}
        </h1>
        <p class="text-lg text-gray-300 mb-6" data-aos="fade-down">
          {{ description }}
        </p>

        <div class="relative inline-block max-w-2xl w-full mx-auto text-left">
          <div
            class="flex flex-row flex-wrap items-center gap-4 max-w-2xl w-full mx-auto mb-4"
          >
            <form
              (ngSubmit)="onSearch()"
              class="flex flex-1 bg-white rounded-xl overflow-hidden shadow-md border border-gray-300"
              data-aos="fade-down"
            >
              <input
                [(ngModel)]="searchTerm"
                name="search"
                type="text"
                [placeholder]="placeholder"
                class="flex-1 px-4 py-3 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                class="bg-pink-600 hover:bg-pink-700 text-white px-6 cursor-pointer"
              >
                <i class="fas fa-search"></i>
              </button>
            </form>

            @if (filters.length > 0) {
              <button
                data-aos="fade-down"
                (click)="showFilters = !showFilters"
                class="cursor-pointer bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl shadow-md"
              >
                <i class="fas fa-sliders-h"></i>
              </button>
            }
          </div>

          @if (showFilters && filters.length > 0) {
            <div
              class="absolute right-0 mt-2 w-full bg-white text-black text-left p-6 rounded-xl shadow-2xl z-20"
            >
              <h3 class="text-xl font-bold mb-4">Filtros</h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                @for (filter of filters; track filter.model) {
                  <div
                    [class]="
                      filters.indexOf(filter) === filters.length - 1 &&
                      filters.length % 2 !== 0
                        ? 'md:col-span-2'
                        : ''
                    "
                  >
                    <label class="block text-sm font-medium mb-1">{{
                      filter.label
                    }}</label>
                    <select
                      class="w-full border border-gray-300 rounded-md px-3 py-2"
                      [(ngModel)]="filterValues[filter.model]"
                      [name]="filter.model"
                    >
                      <option value="">Todos</option>
                      @for (opt of filter.options; track opt.value) {
                        <option [value]="opt.value">{{ opt.label }}</option>
                      }
                    </select>
                  </div>
                }
              </div>

              <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <button
                  (click)="applyFilters()"
                  class="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md w-full sm:flex-grow"
                >
                  <i class="fas fa-check"></i> Aplicar
                </button>
                <button
                  (click)="clearFilters()"
                  class="flex items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-xl shadow-md w-full sm:w-auto"
                >
                  <i class="fas fa-times"></i> Cancelar
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SearchHero {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() placeholder: string = 'Buscar...';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() filters: FilterGroup[] = []; // si no se pasa → sin botón de filtros

  @Output() searched = new EventEmitter<string>();
  @Output() filtered = new EventEmitter<Record<string, string>>();

  searchTerm = '';
  showFilters = false;
  filterValues: Record<string, string> = {};

  onSearch() {
    this.searched.emit(this.searchTerm);
  }

  applyFilters() {
    this.filtered.emit(this.filterValues);
    this.showFilters = false;
  }

  clearFilters() {
    this.filterValues = {};
    this.showFilters = false;
  }
}
