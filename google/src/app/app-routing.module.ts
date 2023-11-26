import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationFormComponent } from './communication-form/communication-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'personal', component: PersonalFormComponent },
  { path: 'health', component: HealthFormComponent },
  { path: 'education', component: EducationFormComponent },
  { path: 'work', component: WorkFormComponent },
  { path: 'communication', component: CommunicationFormComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/personal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }