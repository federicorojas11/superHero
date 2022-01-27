import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from './search.service';

interface Hero {
  name: string;
  image: {
    url: string;
  };
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

  constructor(private _searchService: SearchService) {
    this.filteredHeroes = this.heroCtrl.valueChanges.pipe(
      startWith(''),
      map((hero) => (hero ? this._filterHeroes(hero) : this.heroes.slice()))
    );

    this._searchService.getHeroes().subscribe((res: any) => {
      if (res.response === 'error') {
        console.log(res.response);
      } else {
        res.results.forEach((el) => {
          this.heroes.push(el);
        });
        console.log(this.heroes);
      }
      /*  Nota: mapeo a array (el buscador utiliza un observable)
          res.results.map((heroes: any) => {
            let hero = [heroes.name, heroes.image.url];

            this.heroes.push(...hero);
          });
      */
    });
  }

  ngOnInit(): void {}

  private _filterHeroes(value: string): Hero[] {
    const filterValue = value.toLowerCase();

    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(filterValue)
    );
  }
}
