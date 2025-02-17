import { Injectable } from '@angular/core';
import { IEmployee, Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly TAKE = 10;
  private store = new BehaviorSubject<IEmployee[]>([]);
  private extra: IEmployee[] = [];

  constructor(private http: HttpClient) {}

  load() {
    return this._load();
  }

  add() {
    let random: IEmployee | undefined = undefined;
    while (!random) {
      random = this.extra[Math.floor(Math.random() * this.extra.length)];
      if (this.store.value.some(m => m.id === random?.id)) {
        random = undefined;
      }
    }
    //add to the top
    this.store.next([random, ...this.store.value]);
  }
  remove(id: string) {
    this.store.next(this.store.value.filter(m => m.id !== id));
  }
  reset() {
    this.store.next(this.store.value.filter(m => !this.extra.some(x => x.id === m.id)));
  }


  private _load(take?: number) {
    take ??= this.TAKE;
    const url = '/data/employee.repo.json'
    return new Promise<Observable<IEmployee[]>>((resolve, reject) => {
      this.http.get<IEmployee[]>(url)
        .subscribe({
          next: (data) => {
            const [current, extra] = data.reduce((ret: [IEmployee[], IEmployee[]], curr, index) => {
              ret[index < take ? 0 : 1].push(curr);
              return ret;
            }, [[], []]);
            this.store.next(current);
            this.extra = extra;
            resolve(this.store.asObservable());
          },
          error: (reason) => {
            reject(reason);
          }
        })
    });
  }
}

