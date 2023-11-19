import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationFormComponent } from './communication-form/communication-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(PersonalFormComponent) personalForm: PersonalFormComponent | undefined;
  @ViewChild(HealthFormComponent) healthForm: HealthFormComponent | undefined;
  @ViewChild(EducationFormComponent) educationForm: EducationFormComponent | undefined;
  @ViewChild(WorkFormComponent) workForm: WorkFormComponent | undefined;
  @ViewChild(CommunicationFormComponent) communicationForm: CommunicationFormComponent | undefined;

  currentFormIndex = 0;
  routes: string[] = ["personal", "health", "education", "work", "communication"];

  constructor(private router: Router, private globalService: GlobalService) {}

  onPrevious() {
    if (this.formValidation()) {
      this.currentFormIndex--;
      this.router.navigate(['/' + this.routes[this.currentFormIndex]]);
    } else {
      alert('Revise el formulario, algun/os campos son inválidos');
    }
  }

  onNext() {
    if (this.formValidation()) {
      this.currentFormIndex++;
      this.router.navigate(['/' + this.routes[this.currentFormIndex]]);
    } else {
      alert('Revise el formulario, algun/os campos son inválidos');
    }
  }

  formValidation(): boolean {
    return this.globalService.getIsValidForm(this.currentFormIndex);
  }
}
