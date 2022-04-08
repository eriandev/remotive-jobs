import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private readonly _storeState = new BehaviorSubject<string | null>(null);

  constructor() {}

  public get$(): Observable<string | null> {
    return this._storeState.asObservable();
  }

  public set(payload: string | null): void {
    this._storeState.next(payload);
  }
}
