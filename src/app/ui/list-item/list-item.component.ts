import { Component, Input } from '@angular/core';
import { StudentStore } from '../../data-access/student.store';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';
import { CityStore } from 'src/app/data-access/city.store';
import { NgIf } from '@angular/common';

// If you add a comma between name and country, after firstName there will be a comma
// Need to *ngIf here as well
@Component({
  selector: 'app-list-item',
  template: `
    <div class="border border-grey-300 py-1 px-2 flex justify-between">
      <span>{{firstName}} </span>
      <span *ngIf="name">{{name}}, {{country}}</span>    
      <button (click)="delete(id)">
        X
      </button>
    </div>
  `,
  standalone: true,
  imports: [NgIf]
})

export class ListItemComponent {
  @Input() id!: number;
  @Input() firstName!: string;
  @Input() name!: string;
  @Input() type!: CardType;
  @Input() country!: string;

  constructor(
    private teacherStore: TeacherStore,
    private studentStore: StudentStore,
    private cityStore: CityStore
  ) {}

  delete(id: number) {
    if (this.type === CardType.TEACHER) {
      this.teacherStore.deleteOne(id);
    } else if (this.type === CardType.STUDENT) {
      this.studentStore.deleteOne(id);
    } else if (this.type === CardType.CITY) {
        this.cityStore.deleteOne(id);
      }
  }
}