import { isUnionType } from "./is-union-type";

export type Predicate<T> = (obj: T, index?: number, array?: T[]) => boolean;
export const takeModes = ['every', 'while', 'until'] as const;
export type TakeMode = typeof takeModes[number];

export function take<T>(array: T[], count: number): T[];
export function take<T>(array: T[], mode: TakeMode, fn: Predicate<T>): T[];
export function take<T>(array: T[], arg2: number | TakeMode, fn?: Predicate<T>): T[] {
  if (typeof(arg2) === 'number') {
      return array.filter((_, index) => index < arg2);
  }
  else if (isUnionType<TakeMode>(arg2, takeModes) && typeof(fn) === 'function') {
      switch (arg2) {
          case 'every': return array.filter((value, index, array) => fn(value, index, array));
          case 'while': {
              const result: T[] = [];
              let ok = true;
              for(let i=0; i<array.length && ok; i++) {
                  ok = fn(array[i], i, array);
                  if (ok) { result.push(array[i]); }
              }
              return result;
          }
          case 'until': {
              const notFn: Predicate<T> = (val: T, i?: number, arr?: T[]) => !fn(val, i, arr)
              return take(array, 'while', notFn);
          };
      }
  }
  //else ... error 
  throw new Error("take() error - invalid arguments");
}
