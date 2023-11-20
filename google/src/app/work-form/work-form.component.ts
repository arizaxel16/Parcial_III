import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  
  // class vars
  readonly supervisor_placeholder: String = "Nombre de supervisor";
  workForm: FormGroup;

  // constructor de formulario
  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.workForm = this.fb.group({
      enterprise: ['', [Validators.maxLength(50), Validators.required]],
      position: ['', [Validators.maxLength(100), Validators.required]],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      responsabilities: ['', [Validators.required, Validators.maxLength(400)]],
      achievements: ['', [Validators.maxLength(200)]],
      country: [{ value: 'Select', disabled: false }, Validators.required],
      supervisor: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      exit: ['', [Validators.required, Validators.maxLength(300), Validators.pattern(/^[a-zA-Z]+$/)]],
    });

    this.workForm.valueChanges.subscribe(() => {
      this.globalService.setWorkFormData(this.workForm.value);
    });
  }

  ngOnInit() {
    // Set initial form data if available
    const storedData = this.globalService.getWorkFormData();
    if (storedData) {
      this.workForm.patchValue(storedData);
    }
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(3, this.workForm.valid);
  }
}
