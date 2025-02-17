import { Pipe, PipeTransform } from "@angular/core";
import { Predicate, take, TakeMode } from "../lib";

@Pipe({
  name: 'takeImpure',
  standalone: true,
  pure: false, //IMPURE 
})
export class TakeImpurePipe<T> implements PipeTransform  {
  transform(value: T[], countOrMode: number | TakeMode, fn?: Predicate<T>) {
    if (Array.isArray(value)) {
      if (typeof(countOrMode) === 'number') {
        return take(value, countOrMode);
      }
      else if (typeof(fn) === 'function') {
        return take(value, countOrMode, fn);
      }
    }
    //else
    throw new Error('Invalid value and/or options passed to TakeImpurePipe');
  }
}