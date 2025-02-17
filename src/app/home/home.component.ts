import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTest1Component } from './components/employee-tests/employee-test-1.component';

@Component({
  selector: 'hallpass-home',
  standalone: true,
  imports: [CommonModule, 
    EmployeeTest1Component
  ],
  templateUrl: './home.component.html',
  styles: ':host { display: block; }',
})
export class HomeComponent {


}
