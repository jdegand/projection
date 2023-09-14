import { Component, OnInit } from '@angular/core';
import { FakeHttpService, randomCity } from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from "../../ui/list-item/list-item.component";

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"
    customClass="bg-light-blue"
    (add)="addCity()"
  >
  <img
      src="assets/img/urban-transport-paper-style-assortment.jpg"
      width="200px"
    />
    <p>Image by <a href="https://www.freepik.com/free-photo/urban-transport-paper-style-assortment_15421422.htm#query=city%20cartoon&position=3&from_view=search&track=ais">Freepik</a></p>

    <ng-template #rowRef let-city>
      <app-list-item (delete)="deleteCity(city.id)">
        {{city.name}},{{city.country}}
      </app-list-item>
    </ng-template>

  </app-card>`,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(137, 196, 244, 1);
      }
    `,
  ],
  imports: [CardComponent, ListItemComponent]
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];

  constructor(private http: FakeHttpService, private store: CityStore) { }

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));

    this.store.cities$.subscribe((s) => (this.cities = s));
  }

  addCity() {
    this.store.addOne(randomCity());
  }

  deleteCity(id: number) {
    this.store.deleteOne(id);
  }
}