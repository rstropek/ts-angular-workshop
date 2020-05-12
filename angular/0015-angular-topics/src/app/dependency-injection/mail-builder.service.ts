import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { LoggerService } from './logger.service';

// Note that we use an opaque token here. We need that because
// PRIORITY is not a class. For details see
// https://angular.io/api/core/InjectionToken
export const PRIORITY = new InjectionToken('priority');

// Define an interface to make sure that all mail builders follow the same contract.
export interface IMailBuilder {
  SendMessage(to: string, message: string): void;
}

@Injectable()
export class MailBuilderService implements IMailBuilder {
  // Note the use inject metadata so that Angular does not do DI based on
  // the type of the parameter. For details see
  // https://angular.io/api/core/Inject
  constructor(@Inject(PRIORITY) private priority: string, private logger: LoggerService) { }

  public SendMessage(to: string, message: string) {
    this.logger.log('Sending message...');
    console.log(`Sending ${message} to ${to} with priority ${this.priority}`);
  }
}

@Injectable()
export class MailBuilderMockService implements IMailBuilder {
    // Note the optional constructor parameter. For details see
    // https://angular.io/docs/ts/latest/api/core/index/Optional-var.html
    constructor( @Optional() private logger: LoggerService) { }

    public SendMessage(_: string, __: string) {
        if (this.logger) {
            this.logger.log('Mock object called...');
        }

        console.log('Just a mock object...');
    }
}
