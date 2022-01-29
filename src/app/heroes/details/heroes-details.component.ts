import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from '../heroes.service';
import { Hero } from '../../models/hero';
import { Heroe } from 'src/app/models/heroFullResponse';

@Component({
  selector: 'app-details-heroes',
  templateUrl: './heroes-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./heroes-details.component.scss'],
})
export class HeroesDetailsComponent implements OnInit {
  heroes: Hero[] = [];
  @Input() character: Heroe;

  constructor(public modal: NgbActiveModal, public service: HeroesService) {}

  ngOnInit(): void {}
}
