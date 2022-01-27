import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Hero {
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  heroCtrl = new FormControl();
  filteredHeroes: Observable<Hero[]>;
  heroes: Hero[] = [];

  constructor() {
    this.filteredHeroes = this.heroCtrl.valueChanges.pipe(
      startWith(''),
      map((hero) => (hero ? this._filterStates(hero) : this.heroes.slice()))
    );
  }
  ngOnInit(): void {}

  private _filterStates(value: string): Hero[] {
    const filterValue = value.toLowerCase();

    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(filterValue)
    );
  }
}
