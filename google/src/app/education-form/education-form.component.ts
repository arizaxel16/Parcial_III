import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent {

  educationForm: FormGroup;

  // constructor formulario con validaciones individuales
  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      level: [{ value: 'Select', disabled: false }, Validators.required],
      institution: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      title: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      enddate: ['', Validators.required],
      area: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      country: [{ value: 'Select', disabled: false }, Validators.required],
      city: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      comment: ['', [Validators.required, Validators.maxLength(200), Validators.pattern(/^[a-zA-Z]+$/)]],
      file: ['', [Validators.required]]
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.educationForm.valid;
  }
}
