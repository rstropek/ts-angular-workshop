import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateRevenue } from '../template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public customerForm!: FormGroup;
  public customerTypes = ['Unknown', 'Business', 'Commercial'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.customerForm = this.formBuilder.group({
          firstName: ['John'],
          lastName: ['Doe', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          revenue: ['1000', [Validators.required, validateRevenue()]],
          isActive: [true],
          customerType: [this.customerTypes[1]]
      });
  }

  public save() {
      console.log(this.customerForm.value);
  }
}
