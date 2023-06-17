import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  private dataForEvery1Min: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  public setData(data: any) {
    this._data.next(data);
  }

  public getData(): Observable<any> {
    return this._data.asObservable();
  }

  public newNumberSet(newNum: any) {
    return this.dataForEvery1Min.next(newNum);
  }
  public newNumGet(): Observable<any> {
    return this.dataForEvery1Min.asObservable();
  }
}
