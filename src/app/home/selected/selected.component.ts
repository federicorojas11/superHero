import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heroe } from 'src/app/models/heroFullResponse';
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
  villanos: Heroe[] = [];
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
  removeCharacter(id: string) {
    let modalRef = this._ngbModal.open(ConfirmDeleteComponent);

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.confirmDelete.subscribe((res) => {
      if (res == 'deleted') this.getSelectedCharacters();
    });
  }

  getSelectedCharacters() {
    this.selectedCharactersId = this._heroesService.getAllLocalStorageId();
    this.heroes = [];
    this.villanos = [];
    this.selectedCharactersId.forEach((id) => {
      this._heroesService.getHeroeById(id).subscribe((character) => {
        character.biography.alignment === 'good'
          ? this.heroes.push(character)
          : this.villanos.push(character);
      });
    });
  }
  /*   this.selectedCharactersId.forEach((id) => {
      this._heroesService.getHeroeById(id).subscribe((character) => {
        console.log(character);
        character.biography.alignment === 'good'
          ? this.heroes.push(character)
          : this.villanos.push(character);
      });
    }); */
}
