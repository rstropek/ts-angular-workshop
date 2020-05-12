import { Component, OnInit, Injectable, Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public isActive = true,
        public type = 'Business',
        public revenue = 0) { }
}

// Custom validation directives
export function validateRevenue(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        // Revenue has to be > 100 or empty.
        if (!control.value || parseFloat(control.value) > 100) {

            // Note that null means "no error"
            return null;
        } else {
            return { invalidRevenue: true };
        }
    };
}

// This custom directive demonstrates the use a a custom validator
@Directive({
    selector: '[appRevenueInput]',
    providers: [{ provide: NG_VALIDATORS, useExisting: RevenueValidatorDirective, multi: true }]
})
export class RevenueValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {
        return validateRevenue()(control);
    }
}

@Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {
    public customer: Customer;
    public customerTypes = ['Unknown', 'Business', 'Commercial'];

    constructor() {
        this.customer = new Customer('John', 'Doe');
    }

    public save() {
        console.log(JSON.stringify(this.customer));
    }
}
