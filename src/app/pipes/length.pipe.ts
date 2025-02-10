import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'length',
  standalone: true,
  pure: true, //not necessary as this is the DEFAULT 
})
export class LengthPipe implements PipeTransform  {
  counter = 0;
  transform(value: unknown[]) {
    this.counter += 1;
    if (Array.isArray(value)) {
      return `${value.length} [${this.counter}]`;
    }
    //else
    throw new Error('Invalid value passed to LengthPipe');
  }
}