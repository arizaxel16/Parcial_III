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
  minDate: string | undefined;
  maxDate: string | undefined;

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

    // fecha actual
    const currentDate: Date = new Date();

    // fecha limite minimo
    const minDate: Date = new Date(currentDate);
    minDate.setFullYear(currentDate.getFullYear() - 90);

    // fecha limite maximo
    const maxDate: Date = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() - 16);

    // formato YYYY-MM-DD
    this.minDate = this.formatDate(minDate);
    this.maxDate = this.formatDate(maxDate);
  }

  // formatea => YYYY-MM-DD
  private formatDate(date: Date): string {
    const yyyy: number = date.getFullYear();
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const dd: string = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(0, this.personalForm.valid);
  }
}
