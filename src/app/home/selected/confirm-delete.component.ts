import { Input, Output, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { HeroesService } from '../../heroes/heroes.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() id: string;
  @Output() confirmDelete: EventEmitter<any> = new EventEmitter();

  constructor(
    public modal: NgbActiveModal,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {}

  deleteCharacter() {
    this._heroesService.removeCharacter(this.id);
    this.confirmDelete.emit('deleted');
    this.modal.close();
  }
}
