import { Component, Injector } from '@angular/core';
import { PRIORITY, MailBuilderService, MailBuilderMockService } from '../mail-builder.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-dependency-injection-demo',
  templateUrl: './dependency-injection-demo.component.html',
  providers: [
    { provide: PRIORITY, useValue: 'HIGH' },
    MailBuilderService

    // Note how you could provide a factory method that Angular would use
    // to create a MailBuilder instance.
    // { provide: MailBuilderService, useFactory: mailBuilderFactory, deps: [Logger] }
  ]
})
export class DependencyInjectionDemoComponent {
  public runtimeSender?: MailBuilderService;

  constructor(public sender: MailBuilderService) {
    // Note that component receives mail sender object in constructor
    // parameters instead of creating a concrete sender implementation
    // with "new" itself.

    // Also note that all injected services are singletons. However, you
    // can use Angular's hierarchical injection system to create nested
    // injectors that can create their own service instances. For details see
    // https://angular.io/guide/hierarchical-dependency-injection
  }

  public SendWithRuntimeInjection(to: string, message: string) {
    if (!this.runtimeSender) {
      // This code demonstrates how to explicity create an injector

      // Note how we provide a different implementation of MailBuilder
      // (e.g. for mock objects in unit tests). For details see
      // https://angular.io/api/core/Injector
      const injector = Injector.create({
        providers: [
          { provide: LoggerService, useValue: { log: (_: string) => console.log('Logging mock...') } },
          { provide: MailBuilderService, useClass: MailBuilderMockService }
        ]
      });
      this.runtimeSender = injector.get(MailBuilderService);

      // The following statement will show that we got a MailBuilderMock instance.
      console.log(`Using ${this.runtimeSender.constructor.name} class`);
    }

    this.runtimeSender.SendMessage(to, message);
  }
}
