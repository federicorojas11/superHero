import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

interface SearchResult {
  heroes: Hero[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class HeroesService {}
