import { Injectable } from '@angular/core';

// Note the use of Injectable here. It marks a class as available to an
// injector for instantiation. Best practice: Add Injectable to every
// service class to be ready for injection. For details see
// https://angular.io/api/core/Injectable

@Injectable()
export class LoggerService {
  public log(message: string) {
    console.log(message);
  }
}

