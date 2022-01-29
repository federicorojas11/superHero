import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heroe } from 'src/app/models/heroFullResponse';
import { HeroesService } from '../heroes.service';
import { HeroesDetailsComponent } from '../details/heroes-details.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  villanos: Heroe[] = [];
  constructor(
    public _heroesService: HeroesService,
    private _ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this._heroesService.heroesSeleccionados.forEach((element) => {
      this.heroes.push(element);
    });
    // this._heroesService.villanosSeleccionados.forEach((element) => {
    //   this.heroes.push(element);
    // });
  }

  showDetails(character: Heroe) {
    const modalRef = this._ngbModal.open(HeroesDetailsComponent);
    modalRef.componentInstance.character = character;
  }
  removeCharacter(id: string) {}
}
