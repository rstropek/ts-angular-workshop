import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModules } from './material-modules';

describe('AppComponent', () => {
  // Mocking component that is not relevant for unit test.
  // For details and other options (especially NO_ERRORS_SCHEMA approach) see
  // https://angular.io/guide/testing#nested-component-tests
  @Component({selector: 'app-breadcrumb', template: ''})class BreadcrumbStubComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ...MaterialModules
      ],
      declarations: [
        AppComponent, BreadcrumbStubComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
