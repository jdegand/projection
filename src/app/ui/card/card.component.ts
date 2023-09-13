import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType } from '../../model/card.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() type!: CardType;
  @Input() customClass = '';
  
  @Output() add = new EventEmitter<void>();

  CardType = CardType;

  constructor() {}

  // remove card type ?

  // use customClass to pass a css class to each item 
  // so don't need :ng-deep ?
  // is :ng-deep actually problematic ?
  
}