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

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.communicationForm = this.fb.group({
      comms: [{ value: 'Select', disabled: false }, Validators.required],
      contact: [{ value: 'Select', disabled: false }, Validators.required],
      language: [{ value: 'Select', disabled: false }, Validators.required],
      time: ['', [Validators.maxLength(50)]],
      notif: [{ value: 'Select', disabled: false }, Validators.required],
      terms: [{ value: 'Select', disabled: false }, Validators.required],
      info: [{ value: 'Select', disabled: false }, Validators.required],
      comment: ['', [Validators.maxLength(200)]],
      data: [{ value: 'Select', disabled: false }, Validators.required]
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.communicationForm.valid;
  }
}
