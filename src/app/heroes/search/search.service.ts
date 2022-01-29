import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/models/characters';
import { HeroesService } from '../heroes.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  endpoint = 'https://www.superheroapi.com/api.php/923777511838288/search/';
  constructor(
    private http: HttpClient,
    private _heroesService: HeroesService
  ) {}

  getHeroes(name: string): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + name);
  }

  addCharacters(characters: Characters): void {
    this._heroesService.selectedCharacters = characters;
  }
}
