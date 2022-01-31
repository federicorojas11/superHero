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

  constructor(private http: HttpClient) {
    // this.getSelectedFromLocalStorage$();
    // console.log(this.selectedCharacters);
    // console.log(localStorage.getItem('characters_id').length);
  }

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
      let charactersId = this.getAllLocalStorageId();
      characters.forEach((character) => {
        charactersId.push(character.id);
      });
      localStorage.setItem('characters_id', JSON.stringify(charactersId));
    }
  }

  getAllLocalStorageId() {
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
    let selected = this.getAllLocalStorageId();
    console.log(id.toString());
    console.log(selected[0]);
    selected = selected.filter((e) => e !== id);
    localStorage.setItem('characters_id', JSON.stringify(selected));
    console.log(selected);
  }

  /*   getSelectedFromLocalStorage$(): Observable<Heroe[]> {
    let jsonId = localStorage.getItem('characters_id');
    let charactersId = jsonId ? JSON.parse(jsonId) : [];
    let charactersArr$: Observable<Object>;
    charactersArr$.pipe(tap(usersList => {
 charactersId.forEach((id) => {
   usersList.push(this.http.get(`${this.endpoint}/${id})`));
 });}));

    return charactersArr$;
  }

  /*   charactersId.forEach((id) => {
      this.subscriptions.add(
        this.getCharacterById(id).subscribe((char) => {
          this.selectedCharacters.push(char);
          console.log(this.selectedCharacters);
        })
      );
    }); */
}
