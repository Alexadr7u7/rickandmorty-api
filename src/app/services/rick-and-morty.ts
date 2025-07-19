import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character`);
  }

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
}
