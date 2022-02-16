import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { Characters } from '../models/characters';
import { Heroe } from '../models/heroFullResponse';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  endpoint = 'https://www.superheroapi.com/api.php/923777511838288/';
  selectedCharacters: Heroe[] = [];
  subscriptions = new Subscription();

  constructor(private http: HttpClient) {}

  getCharactersByName(name: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.endpoint + 'search/' + name);
  }

  getCharacterById(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(this.endpoint + id);
  }

  getSelectedCharactersLength() {
    if (localStorage.getItem('characters_id') === '[]') return [];
    return localStorage.getItem('characters_id')
      ? localStorage.getItem('characters_id').length
      : [];
  }

  addCharacters(characters: Heroe[]) {
    this.selectedCharacters = characters;
    this.addLocalStorageCharacters(characters);
  }

  addLocalStorageCharacters(characters: Heroe[]) {
    if (characters) {
      let charactersId = this.getAllLocalStoragedId();
      characters.forEach((character) => {
        charactersId.push(character.id);
      });
      localStorage.setItem(
        'characters_id',
        JSON.stringify([...new Set(charactersId)])
      );
    }
  }

  getAllLocalStoragedId() {
    let e = localStorage.getItem('characters_id');
    return e ? JSON.parse(e) : [];
  }

  getHeroeById(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(this.endpoint + id);
  }

  getHeroes(): Heroe[] {
    return this.selectedCharacters.filter(
      (character) => character.biography.alignment === 'good'
    );
  }

  getVillanos(): Heroe[] {
    return this.selectedCharacters.filter(
      (character) => character.biography.alignment === 'bad'
    );
  }

  removeCharacter(id: string) {
    let selected = this.getAllLocalStoragedId();
    selected = selected.filter((e) => e !== id);
    localStorage.setItem('characters_id', JSON.stringify(selected));
  }
}
