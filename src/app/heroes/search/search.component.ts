import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from 'src/app/models/heroFullResponse';
import { HeroesService } from '../heroes.service';

declare let $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewChecked, OnDestroy {
  private subscriptions = new Subscription();

  searchForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  characters: Heroe[] = [];
  selectedCharacters: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.search();
  }

  ngAfterViewChecked(): void {
    this.autoFillSelected();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  search() {
    this.characters = [];
    this.subscriptions.add(
      this._heroesService
        .getCharactersByName(this.searchForm.get('name').value)
        .subscribe((res: any) => {
          if (res.response !== 'error') {
            res.results.forEach((hero) => {
              this.characters.push(hero);
            });
          }
        })
    );
  }

  switchHero(id: string) {
    if (this.removeCharacterIfFound(id) === false) {
      if (this.findCharacter(id).biography.alignment === 'good') {
        if (this.getHeroes().length >= 3) {
          this._snackBar.open('El equipo de heroes ya está completo...', '', {
            duration: 2500,
          });
        } else {
          this.addCharacter(id);
        }
      } else {
        if (this.getVillanos().length >= 3) {
          this._snackBar.open('El equipo de villanos ya está completo...', '', {
            duration: 2500,
          });
        } else {
          this.addCharacter(id);
        }
      }
    }
  }

  isSelected(id: string): boolean {
    if (this.selectedCharacters.find((x) => x.id === id) != undefined)
      return true;
    return false;
  }

  autoFillSelected() {
    if (this.selectedCharacters.length > 0) {
      for (let i = 0; i < 3; i++) {
        this.autoFillCharacters(i);
      }
    }
  }

  autoFillCharacters(index: number) {
    if (this.selectedCharacters[index])
      if (this.findCharacter(this.selectedCharacters[index].id) !== undefined) {
        $('.hero-' + this.selectedCharacters[index].id).addClass(
          'selected-card'
        );
      }
  }

  findSelectedCharacter(id: string): Heroe {
    return this.selectedCharacters.find((char) => char.id === id);
  }

  findCharacter(id: string): Heroe {
    return this.characters.find((char) => char.id === id);
  }

  removeCharacterIfFound(id: string): boolean {
    // busco si el personaje ya esta seleccionado
    let state = this.findSelectedCharacter(id)
      ? // si lo encuentra lo quita del array
        this.removeCharacter(id)
      : false;
    return state;
  }

  removeCharacter(id: string): boolean {
    this.selectedCharacters = this.selectedCharacters.filter(
      (char) => char !== this.findCharacter(id)
    );
    $('.hero-' + id).removeClass('selected-card');
    return true;
  }

  submitCharacters() {
    if (this.selectedCharacters.length === 0) {
      this._snackBar.open('El equipo está vacío...', '', {
        duration: 2500,
      });
    } else {
      this._heroesService.addCharacters(this.selectedCharacters);
      this.router.navigate(['/home']);
    }
  }

  getAlignment(character: Heroe): string {
    return character.biography.alignment === 'good' ? 'Heroe' : 'Villano';
  }

  getHeroes(): Heroe[] {
    return this.selectedCharacters.filter(
      (character) => character.biography.alignment === 'good'
    );
  }

  getVillanos(): Heroe[] {
    return this.selectedCharacters.filter(
      (character) => character.biography.alignment === 'bad'
    );
  }

  addCharacter(id: string) {
    this.setCharacter(this.findCharacter(id));
    $('.hero-' + id).addClass('selected-card');
  }

  setCharacter(character: Heroe): void {
    this.selectedCharacters.push(character);
  }
}
