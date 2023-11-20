import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  educationForm: FormGroup;

  // constructor formulario con validaciones individuales
  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.educationForm = this.fb.group({
      level: [{ value: 'Select', disabled: false }, Validators.required],
      institution: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      title: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      enddate: ['', Validators.required],
      area: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      country: [{ value: 'Select', disabled: false }, Validators.required],
      city: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
      comment: ['', [Validators.maxLength(400)]],
      file: ['', [Validators.required]]
    });

    this.educationForm.valueChanges.subscribe(() => {
      this.globalService.setEducationFormData(this.educationForm.value);
    });
  }

  ngOnInit() {
    // Set initial form data if available
    const storedData = this.globalService.getEducationFormData();
    if (storedData) {
      this.educationForm.patchValue(storedData);
    }
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(2, this.educationForm.valid);
  }
}
