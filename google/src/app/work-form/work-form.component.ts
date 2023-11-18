import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent {
  
  // class vars
  readonly supervisor_placeholder: String = "Nombre de supervisor";
  workForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder) {
    this.workForm = this.fb.group({
      enterprise: ['', [Validators.maxLength(50), Validators.required]],
      position: ['', [Validators.maxLength(100), Validators.required]],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      responsabilities: ['', [Validators.required, Validators.maxLength(200)]],
      achievements: ['', [Validators.maxLength(100)]],
      country: [{ value: 'Select', disabled: false }, Validators.required],
      supervisor: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      exit: ['', [Validators.required, Validators.maxLength(150), Validators.pattern(/^[a-zA-Z]+$/)]],
    });
  }

  // funcion general de comprobacion de formulario
  isFormValid(): boolean {
    return this.workForm.valid;
  }
}
