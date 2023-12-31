import { Component, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { CardType } from '../../model/card.model';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"
    [type]="cardType"
    customClass="bg-light-blue"
  ></app-card>`,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(137, 196, 244, 1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];
  cardType = CardType.CITY;

  constructor(private http: FakeHttpService, private store: CityStore) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));

    this.store.cities$.subscribe((s) => (this.cities = s));
  }
}