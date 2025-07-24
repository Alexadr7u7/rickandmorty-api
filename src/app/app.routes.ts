import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { Locations } from './pages/locations/locations';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'personajes', component: Characters },
  { path: 'episodios', component: Episodes },
  { path: 'lugares', component: Locations },
  { path: '**', redirectTo: '' }, // Ruta de fallback
];
