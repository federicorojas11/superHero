import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() id: string;
  @Input() alignment: string;

  constructor(
    public modal: NgbActiveModal,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {}

  deleteCharacter() {
    this._heroesService.removeCharacter(this.id, this.alignment);
    this.modal.close();
  }
}
