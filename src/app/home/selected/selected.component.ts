import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heroe, Powerstats } from 'src/app/models/heroFullResponse';
import { HeroesService } from '../../heroes/heroes.service';
import { HeroesDetailsComponent } from '../../heroes/details/heroes-details.component';
import { ConfirmDeleteComponent } from './confirm-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  heroesPowerstats: Powerstats;
  villanos: Heroe[] = [];
  villanosPowerstats: Powerstats;
  selectedCharactersId = [];
  constructor(
    public _heroesService: HeroesService,
    private _ngbModal: NgbModal,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getSelectedCharacters();
  }

  showDetails(character: Heroe) {
    const modalRef = this._ngbModal.open(HeroesDetailsComponent);
    modalRef.componentInstance.character = character;
  }
  removeCharacter(character: Heroe) {
    let modalRef = this._ngbModal.open(ConfirmDeleteComponent);

    modalRef.componentInstance.id = character.id;
    modalRef.componentInstance.confirmDelete.subscribe((res) => {
      if (res == 'deleted' && character.biography.alignment === 'good') {
        this.heroes = this.heroes.filter((x) => x !== character);
      } else {
        this.villanos = this.villanos.filter((x) => x !== character);
      }
    });
  }

  getSelectedCharacters() {
    this.selectedCharactersId = this._heroesService.getAllLocalStoragedId();
    this.heroes = [];
    this.villanos = [];
    console.log(
      `getSelectedCharacters() from selected component ==> ${this.selectedCharactersId}`
    );
    (async () => {
      this.selectedCharactersId.forEach((id) => {
        this._heroesService.getHeroeById(id).subscribe((character) => {
          character.biography.alignment === 'good'
            ? this.heroes.push(character)
            : this.villanos.push(character);
        });
      });
    })()
      .then(() => {
        this.getSelectedPowerstats();
      })
      .catch((err) => {});

    // this.getSelectedPowerstats(this.villanos);
  }

  getSelectedPowerstats(): Powerstats {
    let powerstats: Powerstats = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };
    this.heroes.forEach((el) => {
      console.log(el);

      /*       powerstats.combat += el.powerstats.combat;
      powerstats.durability += el.powerstats.durability;
      powerstats.intelligence += el.powerstats.intelligence;
      powerstats.power += el.powerstats.power;
      powerstats.speed += el.powerstats.speed;
      powerstats.strength += el.powerstats.strength; */
    });

    return powerstats;
  }
}
