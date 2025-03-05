import { Nullable } from './../../../lib/nullable.type';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../../../models/employee.model';

@Component({
  selector: 'hallpass-employee-stats',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employee-stats.component.html',
  styles: ':host { display: block; }'
})
export class EmployeeStatsComponent implements OnChanges {
  @Input()
  employees!: Nullable<IEmployee[]>;

  count: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employees']) {
      this.refresh();
    }
  }

  refresh() {
    if (this.employees) {
      this.count = this.employees.length;
    }
  }
}
