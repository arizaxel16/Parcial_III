import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent {
  // constantes visual
  readonly telInput_placeholder: String = '123-4567890';
  readonly emailInput_placeholder: String = 'example@email.com';

  personalForm: FormGroup;

  // constructor formulario con validaciones individuales
  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      secondName: [
        '',
        [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      birthdate: ['', Validators.required],
      gender: [{ value: 'Select', disabled: false }, Validators.required],
      tel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      country: [{ value: 'Select', disabled: false }, Validators.required],
      country_residence: [{ value: 'Select', disabled: false }, Validators.required],
      city: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      adress: [
        '',
        [
          Validators.required,
          Validators.maxLength(100)
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.personalForm.valid;
  }
}
