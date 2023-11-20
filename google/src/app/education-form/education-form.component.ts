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
  minDate: string | undefined;
  maxDate: string | undefined;

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

    // fecha actual
    const currentDate: Date = new Date();

    // fecha limite min
    const mindate: Date = new Date(currentDate);
    mindate.setFullYear(currentDate.getFullYear() - 60);

    // fecha limite max
    const yesterday: Date = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    // formato YYYY-MM-DD
    this.minDate = this.formatDate(mindate);
    this.maxDate = this.formatDate(yesterday);
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
    this.globalService.setIsValidForm(2, this.educationForm.valid);
  }
}
