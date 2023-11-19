import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

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
  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.communicationForm = this.fb.group({
      comms: [{ value: 'Select', disabled: false }, Validators.required],
      contact: [{ value: 'Select', disabled: false }, Validators.required],
      language: [{ value: 'Select', disabled: false }, Validators.required],
      time: ['', [Validators.maxLength(150), Validators.required]],
      notif: [{ value: 'Select', disabled: false }, Validators.required],
      terms: [false, [Validators.pattern('true')]],
      info: [{ value: 'Select', disabled: false }],
      comment: ['', [Validators.maxLength(400)]],
      data: [false, [Validators.pattern('true')]]
    });
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(4, this.communicationForm.valid);
  }
}
