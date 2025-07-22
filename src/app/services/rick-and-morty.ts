import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { API_CONFIG } from '../api.config';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }
  getMainCharactersMain(): Observable<any[]> {
    const ids = [1, 2, 3, 4, 5];
    return this.http.get<any[]>(`${this.baseUrl}/character/${ids.join(',')}`);
  }
  getTotalStats() {
    return forkJoin({
      characters: this.http.get<any>(`${this.baseUrl}/character`),
      episodes: this.http.get<any>(`${this.baseUrl}/episode`),
      locations: this.http.get<any>(`${this.baseUrl}/location`),
    });
  }
  getCharactersByPage(
    page: number,
    name: string = '',
    status: string = '',
    species: string = '',
    gender: string = ''
  ): Observable<any> {
    const params = new URLSearchParams();

    params.set('page', String(page));
    if (name) params.set('name', name);
    if (status) params.set('status', status);
    if (species) params.set('species', species);
    if (gender) params.set('gender', gender);

    const url = `${this.baseUrl}/character?${params.toString()}`;
    return this.http.get<any>(url);
  }
}
