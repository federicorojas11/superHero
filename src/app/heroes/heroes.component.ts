import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() {}

  ngOnInit(): void {}
}
