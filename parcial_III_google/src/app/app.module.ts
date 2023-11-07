import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { CommunicationFormComponent } from './communication-form/communication-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalFormComponent,
    EducationFormComponent,
    WorkFormComponent,
    HealthFormComponent,
    CommunicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
