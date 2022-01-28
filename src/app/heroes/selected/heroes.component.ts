import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroFullResponse';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  villanos: Heroe[] = [];
  constructor(public _heroesService: HeroesService) {}

  ngOnInit(): void {
    this._heroesService.heroesSeleccionados.forEach((element) => {
      this.heroes.push(element);
    });
    // this._heroesService.villanosSeleccionados.forEach((element) => {
    //   this.heroes.push(element);
    // });
  }
}
