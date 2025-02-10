import { Pipe, PipeTransform } from "@angular/core";

//SAME AS LengthPipe

@Pipe({
  name: 'lengthImpure',
  standalone: true,
  pure: false, //IMPURE 
})
export class LengthImpurePipe implements PipeTransform  {
  counter = 0;
  transform(value: unknown[]) {
    this.counter += 1;
    if (Array.isArray(value)) {
      return `${value.length} [${this.counter}]`;
    }
    //else
    throw new Error('Invalid value passed to LengthImpurePipe');
  }
}