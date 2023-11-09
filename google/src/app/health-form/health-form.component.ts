import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent {

  // class vars
  healthForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.healthForm = this.fb.group({
      blood: [{ value: 'Select', disabled: false }, Validators.required],
      alergies: ['', [Validators.maxLength(150)]],
      medicine: ['', [Validators.maxLength(150)]],
      illness: ['', [Validators.maxLength(150)]],
      food: ['', [Validators.maxLength(150)]],
      exercise: ['', [Validators.maxLength(150)]],
      smoker: [{ value: 'Select', disabled: false }, Validators.required],
      alcohol: [{ value: 'Select', disabled: false }, Validators.required],
      surgery: ['', [Validators.maxLength(150)]],
      contact: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.healthForm.valid;
  }
}
