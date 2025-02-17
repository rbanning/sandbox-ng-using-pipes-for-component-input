import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../../../models/employee.model';

@Component({
  selector: 'hallpass-display-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-person.component.html',
  styles: ':host { display: block; }'
})
export class DisplayPersonComponent {
  @Input()
  employee!: IEmployee;
  @Output()
  onRemove = new EventEmitter<IEmployee>();

  remove() {
    this.onRemove.emit(this.employee);
  }
}
