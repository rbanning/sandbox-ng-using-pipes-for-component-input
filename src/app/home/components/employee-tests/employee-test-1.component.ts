import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IEmployee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { PersonListComponent } from "../person-list/person-list.component";
import { EmployeeStatsComponent } from '../employee=stats/employee-stats.component';

@Component({
  selector: 'hallpass-employee-test-1',
  standalone: true,
  imports: [CommonModule, PersonListComponent, EmployeeStatsComponent],
  templateUrl: './employee-test-1.component.html',
  styles: ':host { display: block; }'
})
export class EmployeeTest1Component implements OnInit {
  employees$!: Observable<IEmployee[]>;

  constructor(private service: EmployeeService) {}

  async ngOnInit() {
    this.employees$ = await this.service.load();
  }

  remove(employee: IEmployee) {
    this.service.remove(employee.id);
  }

  add() {
    this.service.add();
  }
}
