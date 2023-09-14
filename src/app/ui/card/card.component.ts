import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet],
})
export class CardComponent {
  @Input() customClass = ''; // use customClass to pass a css class to each item ?

  @Input() list: any[] | null = null;
  @Output() add = new EventEmitter<void>();

  @ContentChild('rowRef', { read: TemplateRef })
  rowTemplate!: TemplateRef<any>; // typing as ListItemComponent causes problems

  // Type '{ $implicit: any; }' is not assignable to type 'ListItemComponent'.
  // Object literal may only specify known properties, and '"$implicit"' does not exist in type 'ListItemComponent'.
}