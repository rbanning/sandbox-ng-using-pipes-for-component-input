import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthImpurePipe, LengthPipe } from '../pipes';

@Component({
  selector: 'hallpass-home',
  standalone: true,
  imports: [CommonModule, 
    LengthPipe, LengthImpurePipe
  ],
  templateUrl: './home.component.html',
  styles: ':host { display: block; }',
})
export class HomeComponent {

  globalCounter = 0;

  array: number[] = [];

  constructor() {
    console.log('DEBUG: home', {prop: this});
  }

  add() {
    //add an element to the array
    this.array.push(this.array.length);
  }
  remove() {
    //remove an element from the array
    this.array.pop();
  }
  update() {
    //change an element in the array
    this.array[0] = (this.array[0] ?? 0) + 1;
  }
  reset() {
    //re-assign this.array
    this.array = [...this.array];
  }

  incrementCounter() {
    //add to the global counter
    this.globalCounter += 1;
  }

}
