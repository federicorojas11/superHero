import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _heroesService: HeroesService) {}

  ngOnInit(): void {}
}
