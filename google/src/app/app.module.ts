import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule here
import { GlobalService } from './global.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { CommunicationFormComponent } from './communication-form/communication-form.component';
import { HistoryComponent } from './history/history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonalFormComponent,
    HealthFormComponent,
    WorkFormComponent,
    EducationFormComponent,
    CommunicationFormComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
