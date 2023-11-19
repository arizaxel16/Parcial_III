import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent {

  // class vars
  healthForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.healthForm = this.fb.group({
      blood: [{ value: 'Select', disabled: false }, Validators.required],
      alergies: ['', [Validators.maxLength(400)]],
      medicine: ['', [Validators.maxLength(400)]],
      illness: ['', [Validators.maxLength(400)]],
      food: ['', [Validators.maxLength(400)]],
      exercise: ['', [Validators.maxLength(400)]],
      smoker: [{ value: 'Select', disabled: false }, Validators.required],
      alcohol: [{ value: 'Select', disabled: false }, Validators.required],
      surgery: ['', [Validators.maxLength(400)]],
      contact: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(1, this.healthForm.valid);
  }
}
