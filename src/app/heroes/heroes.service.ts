import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { Heroe } from '../models/heroFullResponse';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  endpoint = 'https://www.superheroapi.com/api.php/923777511838288/search/';
  selectedCharacters: Characters = {} as Characters;

  constructor(private http: HttpClient) {}

  getHeroes(name: string): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + name);
  }

  hasSelectedCharacters() {
    return localStorage.getItem('heroes').length != 2 ||
      localStorage.getItem('villanos').length != 2
      ? true
      : false;
  }

  addCharacters(characters: Characters) {
    this.selectedCharacters = characters;
    this.addLocalStorageCharacters(characters.heroes, characters.villanos);
  }

  addLocalStorageCharacters(heroes?: Heroe[], villanos?: Heroe[]) {
    if (heroes)
      localStorage.setItem(
        'heroes',
        JSON.stringify(this.selectedCharacters.heroes)
      );
    if (villanos)
      localStorage.setItem(
        'villanos',
        JSON.stringify(this.selectedCharacters.villanos)
      );
  }

  refreshFromLocalStorageCharacters() {
    let storageVillanos = localStorage.getItem('villanos');
    let villanosArr = storageVillanos ? JSON.parse(storageVillanos) : [];
    if (villanosArr.length > 0) {
      this.selectedCharacters.villanos = [];
      villanosArr.forEach((element) => {
        this.selectedCharacters.villanos.push(element);
      });
    }

    let storageHeroes = localStorage.getItem('heroes');
    let heroesArr = storageHeroes ? JSON.parse(storageHeroes) : [];
    if (heroesArr.length > 0) {
      this.selectedCharacters.heroes = [];
      heroesArr.forEach((element) => {
        this.selectedCharacters.heroes.push(element);
      });
    }
  }

  removeCharacter(id: string, alignment: string) {
    this.refreshFromLocalStorageCharacters();
    if (alignment === 'good')
      if (this.selectedCharacters.heroes) {
        let myIndex = this.selectedCharacters.heroes.indexOf(
          this.selectedCharacters.heroes.find((char) => char.id === id)
        );
        if (myIndex !== -1) {
          this.selectedCharacters.heroes.splice(myIndex);
        }
        this.addLocalStorageCharacters(this.selectedCharacters.heroes);
      } else {
        let myIndex = this.selectedCharacters.villanos.indexOf(
          this.selectedCharacters.villanos.find((char) => char.id === id)
        );
        if (myIndex !== -1) {
          this.selectedCharacters.villanos.splice(myIndex);
        }
        this.addLocalStorageCharacters(this.selectedCharacters.villanos);
      }
  }
}
