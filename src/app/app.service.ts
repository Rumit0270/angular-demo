import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // Subject used for emitting events
  private messageSubject$ = new BehaviorSubject<string>('');

  // observable to subscribe to data in the stream
  public get message$() {
    return this.messageSubject$.asObservable();
  }

  // function to push new data in observable stream
  public sendMessage(message: string) {
    this.messageSubject$.next(message);
    this.messageSubject$.complete();
  }

  constructor() {}
}
