import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroesDetailsComponent } from '../heroes/details/heroes-details.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  searchHeroes() {
    this.modalService.open(HeroesDetailsComponent, { size: 'xl' });
  }
}
