import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-communication-form',
  templateUrl: './communication-form.component.html',
  styleUrls: ['./communication-form.component.css'],
})
export class CommunicationFormComponent {
  // class vars
  communicationForm: FormGroup;
  isChecked_terms: boolean = false;
  isChecked_info: boolean = false;
  isChecked_data: boolean = false;

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.communicationForm = this.fb.group({
      comms: [{ value: 'Select', disabled: false }, Validators.required],
      contact: [{ value: 'Select', disabled: false }, Validators.required],
      language: [{ value: 'Select', disabled: false }, Validators.required],
      time: ['', [Validators.maxLength(50), Validators.required]],
      notif: [{ value: 'Select', disabled: false }, Validators.required],
      terms: [Validators.required],
      info: [{ value: 'Select', disabled: false }, Validators.required],
      comment: ['', [Validators.maxLength(200)]],
      data: [{ value: 'Select', disabled: false }]
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.communicationForm.valid;
  }
}
