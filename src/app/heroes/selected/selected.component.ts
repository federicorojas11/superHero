import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heroe } from 'src/app/models/heroFullResponse';
import { HeroesService } from '../heroes.service';
import { HeroesDetailsComponent } from '../details/heroes-details.component';
import { ConfirmDeleteComponent } from './confirm-delete.component';
@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  villanos: Heroe[] = [];

  constructor(
    public _heroesService: HeroesService,
    private _ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    let storageHeroes = localStorage.getItem('heroes');
    let heroesArr = storageHeroes ? JSON.parse(storageHeroes) : [];

    if (heroesArr.length > 0) {
      heroesArr.forEach((element) => {
        this.heroes.push(element);
      });
    }

    let storageVillanos = localStorage.getItem('villanos');
    let villanosArr = storageVillanos ? JSON.parse(storageVillanos) : [];

    if (villanosArr.length > 0) {
      villanosArr.forEach((element) => {
        this.villanos.push(element);
      });
    }
  }

  showDetails(character: Heroe) {
    const modalRef = this._ngbModal.open(HeroesDetailsComponent);
    modalRef.componentInstance.character = character;
  }
  removeCharacter(id: string, alignment: string) {
    let modalRef = this._ngbModal.open(ConfirmDeleteComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.alignment = alignment;
  }
}
