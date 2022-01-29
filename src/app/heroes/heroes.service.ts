import { Injectable } from '@angular/core';
import { Characters } from '../models/characters';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  selectedCharacters: Characters = {} as Characters;

  hasSelectedCharacters() {
    return this.selectedCharacters.villanos || this.selectedCharacters.heroes
      ? true
      : false;
  }
}
