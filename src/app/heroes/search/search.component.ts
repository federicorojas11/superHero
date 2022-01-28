import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
declare let $: any;

interface Hero {
  id: number;
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
export class SearchComponent implements OnInit, AfterViewChecked {
  heroCtrl = new FormControl();
  heroes: Hero[] = [];
  selectedHeroes: Hero[] = [];

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.autoFillSelected();
  }

  search() {
    this.heroes = [];
    this._searchService
      .getHeroes(/* this.heroCtrl.value */ 'l')
      .subscribe((res: any) => {
        if (res.response !== 'error') {
          res.results.forEach((hero) => {
            this.heroes.push(hero);
          });
        }
      });
  }

  switchHero(id: number) {
    // busco si el heroe ya esta seleccionado
    if (this.selectedHeroes.find((heroe) => heroe.id === id)) {
      // si lo encuentra lo quita del array
      this.selectedHeroes = this.selectedHeroes.filter(
        (heroe) => heroe !== this.selectedHeroes.find((x) => x.id === id)
      );
      $('.hero-' + id).removeClass('selected-card');
    } else {
      // si no lo encuentra lo agrego al array
      this.selectedHeroes.push(this.heroes.find((x) => x.id === id));
      $('.hero-' + id).addClass('selected-card');
    }
  }

  isSelected(id: number) {
    this.selectedHeroes.find((x) => x.id === id) ? true : false;
  }

  autoFillSelected() {
    if (this.selectedHeroes.length > 0) {
      for (let i = 0; i < this.selectedHeroes.length; i++) {
        if (this.heroes.indexOf(this.selectedHeroes[i]) === -1) {
          $('.hero-' + this.selectedHeroes[i].id).addClass('selected-card');
        }
      }

      let hasSelected = this.selectedHeroes.some((ai) => {
        return this.heroes.includes(ai);
      });

      if (hasSelected) {
        this.selectedHeroes.forEach((element) => {
          $('.hero-' + element.id).addClass('selected-card');
        });
      }
    }
  }
}
