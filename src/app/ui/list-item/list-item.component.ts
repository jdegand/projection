import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="border border-grey-300 py-1 px-2 flex justify-between">   
      <ng-content></ng-content>
      <button (click)="delete.next()">X</button>
    </div>
  `,
  standalone: true
})

export class ListItemComponent {
  @Output() delete = new EventEmitter<void>();

  //context = {$implicit: null};
}