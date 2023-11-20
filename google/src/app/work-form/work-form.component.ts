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
  minDateStart: string | undefined;
  maxDateStart: string | undefined;
  minDateEnd: string | undefined;
  maxDateEnd: string | undefined;

  // constructor de formulario
  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.workForm = this.fb.group({
      enterprise: ['', [Validators.maxLength(50), Validators.required]],
      position: ['', [Validators.maxLength(100), Validators.required]],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      responsibilities: ['', [Validators.required, Validators.maxLength(400)]],
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

    // fecha actual
    const currentDate: Date = new Date();
    
    // fecha limite min start
    const minStart: Date = new Date(currentDate);
    minStart.setFullYear(currentDate.getFullYear() - 50);

    // fecha limite min end
    const minEnd: Date = new Date(currentDate);
    minEnd.setFullYear(currentDate.getFullYear() - 2);
    
    // fecha limite maximo start
    const maxDate: Date = new Date(currentDate);
    maxDate.setDate(currentDate.getDate() - 2);
    
    // fecha limite max end
    const yesterday: Date = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    // formato YYYY-MM-DD
    this.minDateStart = this.formatDate(minStart);
    this.maxDateStart = this.formatDate(maxDate);
    this.minDateEnd = this.formatDate(minEnd);
    this.maxDateEnd = this.formatDate(yesterday);
  }

  private formatDate(date: Date): string {
    const yyyy: number = date.getFullYear();
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const dd: string = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // funcion general de comprobacion de formulario
  onFormChange(): void {
    this.globalService.setIsValidForm(3, this.workForm.valid);
  }
}
