import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from 'src/app/models/heroFullResponse';
import { Characters } from '../../models/characters';
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
  selectedCharacters: Characters = { heroes: [], villanos: [] };

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
        .getHeroes(this.searchForm.get('name').value)
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
          this.addHeroe(id);
        }
      } else {
        if (this.selectedCharacters.villanos.length >= 3) {
          this._snackBar.open('El equipo de villanos ya está completo...', '', {
            duration: 2500,
          });
        } else {
          this.addVillano(id);
        }
      }
    }
  }

  isSelected(id: string): boolean {
    if (
      this.selectedCharacters.heroes.find((x) => x.id === id) != undefined ||
      this.selectedCharacters.villanos.find((x) => x.id === id) != undefined
    )
      return true;
    return false;
  }

  autoFillSelected() {
    if (this.getSelectedLength() > 0) {
      for (let i = 0; i < 3; i++) {
        this.autoFillHeroes(i);
        this.autoFillVillanos(i);
      }
    }
  }

  autoFillHeroes(index: number) {
    if (this.selectedCharacters.heroes[index])
      if (
        this.findCharacter(this.selectedCharacters.heroes[index].id) !==
        undefined
      ) {
        $('.hero-' + this.selectedCharacters.heroes[index].id).addClass(
          'selected-card'
        );
      }
  }

  autoFillVillanos(index: number) {
    if (this.selectedCharacters.villanos[index])
      if (
        this.findCharacter(this.selectedCharacters.villanos[index].id) !==
        undefined
      ) {
        $('.hero-' + this.selectedCharacters.villanos[index].id).addClass(
          'selected-card'
        );
      }
  }

  findHeroe(id: string): Heroe {
    return this.selectedCharacters.heroes.find((heroe) => heroe.id === id);
  }

  findVillano(id: string): Heroe {
    return this.selectedCharacters.villanos.find(
      (villano) => villano.id === id
    );
  }

  findCharacter(id: string): Heroe {
    return this.characters.find((char) => char.id === id);
  }

  removeCharacterIfFound(id: string): boolean {
    // busco si el heroe ya esta seleccionado
    let isDeleted = this.findHeroe(id)
      ? // si lo encuentra lo quita del array
        this.removeHeroe(id)
      : false;

    // lo mismo con los villanos
    if (isDeleted === false) {
      isDeleted = this.findVillano(id)
        ? // si lo encuentra lo quita del array
          this.removeVillano(id)
        : false;
    }
    return isDeleted;
  }

  removeHeroe(id: string): boolean {
    this.selectedCharacters.heroes = this.selectedCharacters.heroes.filter(
      (heroe) => heroe !== this.findHeroe(id)
    );
    $('.hero-' + id).removeClass('selected-card');
    return true;
  }

  removeVillano(id: string): boolean {
    this.selectedCharacters.villanos = this.selectedCharacters.villanos.filter(
      (villano) => villano !== this.findVillano(id)
    );
    $('.hero-' + id).removeClass('selected-card');
    return true;
  }

  submitCharacters() {
    if (this.getSelectedLength() === 0) {
      this._snackBar.open('El equipo está vacío...', '', {
        duration: 2500,
      });
    } else {
      this._heroesService.addCharacters(this.selectedCharacters);

      this.router.navigate(['/home']);
    }
  }

  getSelectedLength(): number {
    return (
      this.selectedCharacters.heroes.length +
      this.selectedCharacters.villanos.length
    );
  }

  getAlignment(character: Heroe): string {
    return character.biography.alignment === 'good' ? 'Heroe' : 'Villano';
  }

  getHeroes(): Heroe[] {
    return this.selectedCharacters.heroes;
  }

  getVillanos(): Heroe[] {
    return this.selectedCharacters.villanos;
  }

  addHeroe(id: string) {
    this.setHeroe(this.findCharacter(id));
    $('.hero-' + id).addClass('selected-card');
  }

  addVillano(id: string) {
    this.setVillano(this.findCharacter(id));
    $('.hero-' + id).addClass('selected-card');
  }

  setHeroe(character: Heroe): void {
    this.selectedCharacters.heroes.push(character);
  }

  setVillano(character: Heroe): void {
    this.selectedCharacters.villanos.push(character);
  }
}
