import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  // constantes visual
  readonly nameInput_placeholder: String = 'John';
  readonly surnameInput_placeholder: String = 'Doe';
  readonly telInput_placeholder: String = '123-4567890';
  readonly emailInput_placeholder: String = 'example@email.com';

  personalForm: FormGroup;

  // constructor formulario con validaciones individuales
  constructor(
      private fb: FormBuilder,
      private globalService: GlobalService
    ) {
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

    this.personalForm.valueChanges.subscribe(() => {
      this.globalService.setPersonalFormData(this.personalForm.value);
    });
  }

  ngOnInit() {
    // Set initial form data if available
    const storedData = this.globalService.getPersonalFormData();
    if (storedData) {
      this.personalForm.patchValue(storedData);
    }
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(0, this.personalForm.valid);
  }
}
