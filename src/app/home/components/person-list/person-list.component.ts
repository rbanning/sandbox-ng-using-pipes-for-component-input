import { Nullable } from './../../../lib/nullable.type';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPersonComponent } from '../display-person/display-person.component';
import { IEmployee } from '../../../models/employee.model';

@Component({
  selector: 'hallpass-person-list',
  standalone: true,
  imports: [CommonModule, DisplayPersonComponent],
  templateUrl: './person-list.component.html',
  styles: ':host { display: block; }'
})
export class PersonListComponent {
  @Input()
  employees: Nullable<IEmployee[]>

  @Output()
  onRemove = new EventEmitter<IEmployee>();

  remove(employee: IEmployee) {
    this.onRemove.emit(employee);
  }
  
}
